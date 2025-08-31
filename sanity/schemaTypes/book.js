export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'coverUrl',
      title: 'Cover URL',
      type: 'url',
    },
    {
      name: 'googleBooksId',
      title: 'Google Books ID',
      type: 'string',
    },
    {
      name: 'textContent',
      title: 'Text Content',
      type: 'text',
    },
  ],
}