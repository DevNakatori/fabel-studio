import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'franchise',
  title: 'Franchise',
  type: 'document',
  fields: [
    defineField({
      name: 'Franchise',
      title: 'Franchise Section',
      type: 'object',
      fields: [
        defineField({
          name: 'franchisetitle',
          title: 'Franchise Title',
          type: 'string',
        }),
        defineField({
            name: 'franchisedescription',
            title: 'Franchise Description',
            type: 'text',
          }),  
      ],
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
  ],
})
