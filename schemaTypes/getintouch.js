import {defineField, defineType, isImage} from 'sanity'

export default defineType({
  name: 'getintouch',
  title: 'Get In Touch',
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
        defineField({
            name: 'mobileImages',
            title: 'Mobile Images',
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
                  defineField({
                    name: 'leftText',
                    title: 'Left Text',
                    type: 'string',
                  }),
                  defineField({
                    name: 'rightText',
                    title: 'Right Text',
                    type: 'string',
                  }),
                ],
              },
            ],
        }),
        defineField({
            name: 'socialMedia',
            title: 'Social Media',
            type: 'object',
            fields: [
              defineField({
                name: 'title',
                title: 'Title',
                type: 'text',
              }),
              defineField({
                name: 'insta',
                title: 'Instagram',
                type: 'url',
              }),
              defineField({
                name: 'facebook',
                title: 'Facebook',
                type: 'url',
              }),
              defineField({
                name: 'twitter',
                title: 'Twitter',
                type: 'url',
              }),
              defineField({
                name: 'linkedin',
                title: 'LinkedIn',
                type: 'url',
              }),
              defineField({
                name: 'tiktok',
                title: 'TikTok',
                type: 'url',
              }),
              defineField({
                name: 'whatsapp',
                title: 'WhatsApp',
                type: 'url',
              }),
            ],
        }),
      ],
    }),
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({   
          name: 'formShortCode',
          title: 'Form Shortcode',
          type: 'string',
        }),
        defineField({
            name: 'contactDetails',
            title: 'Contact Details',
            type: 'object',
            fields: [
              defineField({
                name: 'title',
                title: 'Title',
                type: 'text',
              }),
              defineField({
                name: 'whatsAppLabel',
                title: 'whatsApp Button Label',
                type: 'string',
              }),
              defineField({
                name: 'email',
                title: 'Email',
                type: 'string',
              }),
              defineField({
                name: 'telephone',
                title: 'Telephone',
                type: 'string',
              }),
              defineField({
                name: 'locations',
                title: 'Locations',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      defineField({
                        name: 'address',
                        title: 'Address',
                        type: 'text',
                      }),
                      defineField({
                        name: 'mapLink',
                        title: 'Map Link',
                        type: 'url',
                      }),
                    ],
                  },
                ],
            }),
            defineField({
              name: 'faqSection',
              title: 'FAQ Section',
              type: 'object',
              fields: [
              defineField({
                name: 'heading',
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


