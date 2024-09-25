import {defineField, defineType, isImage} from 'sanity'

export default defineType({
  name: 'hetmenu',
  title: 'Het Menu',
  type: 'document',
  fields: [
    defineField({
      name: "logoImage",
      title: "Logo",
      type: "image"
    }),
    defineField({
      name: 'transitionSection',
      title: 'Transition Section',
      type: 'object',
      fields: [
        defineField({
          name: 'topTitle',
          title: 'Top Title',
          type: 'string',
        }),
        defineField({   
          name: 'bottomTitle',
          title: 'Bottom Title',
          type: 'string',
        }),
        defineField({
          title: "Image",
          name: "image",
          type: "image"
        }),
      ],
    }),
    defineField({
      name: 'contentSection',
      title: 'Content Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({   
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'menuSection',
      title: 'Menu Section',
      type: 'object',
      fields: [
        defineField({
          name: 'Menu',
          title: 'Menu Image',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
        name: 'bottomContentSection',
        title: 'Bottom Content Section',
        type: 'object',
        fields: [
          defineField({
            name: 'bottomHeading',
            title: 'Bottom Heading',
            type: 'string',
          }),
          defineField({   
            name: 'bottomDescription',
            title: 'Bottom Description',
            type: 'text',
          }),
          defineField({   
            name: 'bottomImage',
            title: 'Bottom Image',
            type: 'image',
          }),
          defineField({   
            name: 'bottomTitle',
            title: 'Bottom Title',
            type: 'string',
          }),
          defineField({   
            name: 'bottomContent',
            title: 'Bottom Content',
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
  preview: {
    select: {
      topTitle: 'transitionSection.topTitle',
      bottomTitle: 'transitionSection.bottomTitle',
      language: 'language',
      media: 'logoImage',
    },
    prepare(selection) {
      const { topTitle, bottomTitle, language, media } = selection;

      return {
        title: `${topTitle || ''} ${bottomTitle || ''}`.trim(),
        subtitle: language,
        media,
      }
    },
  },
})


