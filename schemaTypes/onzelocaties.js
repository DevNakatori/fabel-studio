import {defineField, defineType, isImage} from 'sanity'

export default defineType({
  name: 'onzelocaties',
  title: 'Onze Locaties',
  type: 'document',
  fields: [
    defineField({
      name: "logoImage",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true, // Enable hotspot
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for screen readers',
        }),
      ],
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
          type: "image",
          options: {
            hotspot: true, // Enable hotspot
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for screen readers',
            }),
          ],
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
        defineField({   
            name: 'btn_label',
            title: 'Button Label',
            type: 'string',
        }),
        defineField({   
            name: 'btn_link',
            title: 'Button Link',
            type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'locationSection',
      title: 'Location Section',
      type: 'object',
      fields: [
        defineField({
          name: 'location',
          title: 'Location',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true, // Enable hotspot
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      description: 'Alternative text for screen readers',
                    }),
                  ],
                }),
                defineField({
                  name: 'locationName',
                  title: 'Location Name',
                  type: 'string',
                }),
                defineField({
                  name: 'address',
                  title: 'Address',
                  type: 'text',
                }),
                defineField({
                  name: 'info',
                  title: 'Info',
                  type: 'text',
                }),
                defineField({
                  name: 'btn_label',
                  title: 'Button Label',
                  type: 'string',
                }),
                defineField({
                  name: 'btn_link',
                  title: 'Button Link',
                  type: 'url',
                }),
              ],
            },
          ],
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


