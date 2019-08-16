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
        id: 18726,
        userId: 123,
        title: 'Fetched # 1',
        body: 'Der Hund kann bellen'
      },
      {
        id: 498479847,
        userId: 124,
        title: 'Fetched # 2',
        body: 'Der Hund kann Pfötchen geben'
      }
    ]
  });
});

afterEach(() => {
  // import and pass your custom axios instance to this method
  moxios.uninstall();
});

it('can fetch a list of todos and display them', done => {
  // Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchTodos' button and click it
  wrapped.find('.fetch-todos').simulate('click');

  // introduce a TINY pause

  //Expect to find a list of todos
  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  });
});
