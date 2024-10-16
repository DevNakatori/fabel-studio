import {defineField, defineType, isImage} from 'sanity'

export default defineType({
  name: 'onzeimpact',
  title: 'Onze Impact',
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
        
      ],
    }),
    defineField({
      name: 'imageSection',
      title: 'Image Section',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
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
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
        name: 'cardSection',
        title: 'Card Section',
        type: 'object',
        fields: [
        defineField({
            name: 'secTitle',
            title: 'Heading',
            type: 'text',
            }),
          defineField({
            name: 'card',
            title: 'Card',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  defineField({
                    name: 'cardTitle',
                    title: 'Title',
                    type: 'text',
                  }),
                  defineField({
                    name: 'cardDescription',
                    title: 'Description',
                    type: 'text',
                  }),
                ],
              },
            ],
          }),
        defineField({
            name: 'qrImage',
            title: 'QR Image',
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
        ],
      }),
      defineField({
        name: 'bottomSection',
        title: 'Bottom Section',
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
                name: 'secTitle',
                title: 'Heading',
                type: 'text',
            }),
            defineField({
                name: 'secDescription',
                title: 'Description',
                type: 'text',
            }),
            defineField({
                name: 'sideImage',
                title: 'Side Image',
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
                name: 'sideText',
                title: 'Side Text',
                type: 'string',
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


