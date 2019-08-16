export default {
  definitions: {},
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://example.com/root.json',
  type: 'object',
  title: 'The Root Schema',
  properties: {
    woofReducer: {
      $id: '#/properties/woofReducer',
      type: 'object',
      title: 'The Woofreducer Schema',
      required: ['items', 'flopping'],
      properties: {
        items: {
          $id: '#/properties/woofReducer/properties/items',
          type: 'array',
          title: 'The Items Schema',
          items: {
            $id: '#/properties/woofReducer/properties/items/items',
            type: 'object',
            title: 'The Items Schema',
            required: ['userId', 'id', 'title', 'body'],
            properties: {
              userId: {
                $id:
                  '#/properties/woofReducer/properties/items/items/properties/userId',
                type: 'integer',
                title: 'The Userid Schema',
                default: 0,
                examples: [1]
              },
              id: {
                $id:
                  '#/properties/woofReducer/properties/items/items/properties/id',
                type: 'integer',
                title: 'The Id Schema',
                default: 0,
                examples: [1]
              },
              title: {
                $id:
                  '#/properties/woofReducer/properties/items/items/properties/title',
                type: 'string',
                title: 'The Title Schema',
                default: '',
                examples: [
                  'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
                ]
              },
              body: {
                $id:
                  '#/properties/woofReducer/properties/items/items/properties/body',
                type: 'string',
                title: 'The Body Schema',
                default: '',
                examples: [
                  'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
                ]
              }
            }
          }
        },
        flopping: {
          $id: '#/properties/woofReducer/properties/flopping',
          type: 'boolean',
          title: 'The Flopping Schema',
          default: false,
          examples: [false]
        }
      }
    }
  }
};
