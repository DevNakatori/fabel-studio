
import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'
import {defineType, isImage} from 'sanity'

export default defineType({
  name: 'qrmenu',
  title: 'QR Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subTitle',
      type: 'string',
    }),
    defineField({
      name: 'tabs',
      title:"Tabs",
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'lable',
              title: 'Lable',
              description: 'Tab Lable',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'tabContant',
      title: 'Tab Contant',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'friet',
          title: 'Friet',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'subTitle',
                  title: 'Sub Title',
                  type: 'string',
                }),
                defineField({
                  name: 'menu',
                  title: 'Menus (Recipe)',
                  description: 'Food Menus',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'recipe',
                          title: 'Recipe',
                          type: 'string',
                        }),
                        defineField({
                          name: 'recipedetails',
                          title: 'Recipe Details',
                          type: 'string',
                        }),
                        defineField({
                          name: 'price',
                          title: 'Price',
                          type: 'string',
                        }),
                      ],
                    }),
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
      seoImage: 'seo.image',
      title: 'title',
      language: 'language',
    },
    prepare({seoImage, title, language}) {
      return {
        media: seoImage ?? DocumentIcon,
        subtitle: language,
        title,
      }
    },
  },
})
