import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'App';
import moxios from 'moxios';

beforeEach(() => {
  // import and pass your custom axios instance to this method
  moxios.install();
  moxios.stubRequest(/jsonplaceholder/, {
    status: 200,
    response: [
      {
        title: 'Fetched # 1',
        id: 18726
      },
      {
        title: 'Fetched # 2',
        id: 498479847
      }
    ]
  });
});

afterEach(() => {
  // import and pass your custom axios instance to this method
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  // Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // introduce a TINY pause

  //Expect to find a list of comments
  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  });
});
