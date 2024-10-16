import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'onzefriet',
  title: 'Onze Friet',
  type: 'document',
  fields: [
    defineField({
      name: "logoImage",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true, // Enable hotspot for better cropping
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
            hotspot: true,
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
          title: "3 Images",
          name: "three_image",
          type: 'array',
          of: [{ 
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              defineField({
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
                description: 'Alternative text for screen readers',
              }),
            ],
          }],
          validation: (Rule) => Rule.min(1).max(3).error('You can add between 1 and 3 images only.'),
        }),
      ],
    }),
    defineField({
      name: 'videoSection',
      title: 'Video Section',
      type: 'object',
      fields: [
        defineField({
          name: 'videoHeading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({   
          name: 'videoDescription',
          title: 'Description',
          type: 'text',
        }),
        defineField({   
          name: 'videoLink',
          title: 'Video Link',
          type: 'url',
          description: 'Link to the video',
        }),
        defineField({   
          name: 'videoHandwritingText',
          title: 'Handwriting Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'reviewSection',
      title: 'Review Section',
      type: 'object',
      fields: [
        defineField({
          name: 'reviewHeading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'reviews',
          title: 'Reviews',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'reviewContent',
                  title: 'Content',
                  type: 'text',
                }),
                defineField({
                  name: 'reviewCustName',
                  title: 'Customer Name',
                  type: 'string',
                }),
                defineField({
                  name: 'reviewRating',
                  title: 'Rating',
                  type: 'number',
                  validation: (Rule) => Rule.min(1).max(5).error('Rating must be between 1 and 5'),
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'accordionSection',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({
          name: 'accordionHeading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'faq',
          title: 'Question',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'question',
                  title: 'Question',
                  type: 'text',
                }),
                defineField({
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
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
