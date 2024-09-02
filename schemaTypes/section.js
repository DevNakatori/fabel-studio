// schemas/section.js
export default {
    name: 'section',
    title: 'Section',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'ctaLink',
        title: 'CTA Link',
        type: 'url',
      },
      {
        name: 'ctaText',
        title: 'CTA Text',
        type: 'string',
      },
    ],
  };
  