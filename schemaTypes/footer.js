import {defineField, defineType, isImage} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
            hotspot: true 
        },
      }),
      defineField({
        name: 'menu',
        title: 'Menu',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'label',
                title: 'Label',
                type: 'string',
              }),
              defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'url',
              }),
            ],
          },
        ],
      }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  defineField({
                    name: 'text',
                    title: 'Text',
                    type: 'string',
                  }),
                  defineField({
                      name: 'locationLink',
                      title: 'Location Link',
                      type: 'url',
                  }),
                ],
              },
            ],
          }),
      ],
    }),
    defineField({
        name: 'socials',
        title: 'Socials',
        type: 'object',
        fields: [
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
            name: 'linkedIn',
            title: 'LinkedIn',
            type: 'url',
        }),
        defineField({
            name: 'tiktok',
            title: 'Tiktok',
            type: 'url',
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
      language: 'language',
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