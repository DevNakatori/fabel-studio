import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'
import {defineType, isImage} from 'sanity'

export default defineType({
  name: 'qrmenu',
  title: 'QR Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'qrcustomertitle',
      title: 'Customers Title',
      type: 'string',
    }),
    defineField({
      name: 'qrcustomerdescription',
      title: 'Customers Description',
      type: 'text',
    }),
    defineField({
      name: 'qrcustomerTitle',
      title: 'Customers Button Title',
      type: 'string',
    }),
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
      title: 'Tabs',
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
            defineField({
              name: 'english_lable',
              title: 'English Lable',
              description: 'English Tab Lable',
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
          title: 'Fries',
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
                  name: 'filtername',
                  title: 'Filte rname',
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
                          name: 'english_recipe',
                          title: 'English Recipe',
                          type: 'string',
                        }),
                        defineField({
                          name: 'recipedetails',
                          title: 'Recipe Details',
                          type: 'string',
                        }),
                        defineField({
                          name: 'english_recipedetails',
                          title: 'English Recipe Details',
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
        defineField({
          name: 'snacks',
          title: 'Snacks',
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
                  name: 'filtername',
                  title: 'Filte rname',
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
                          name: 'english_recipe',
                          title: 'English Recipe',
                          type: 'string',
                        }),
                        defineField({
                          name: 'recipedetails',
                          title: 'Recipe Details',
                          type: 'string',
                        }),
                        defineField({
                          name: 'english_recipedetails',
                          title: 'English Recipe Details',
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
        defineField({
          name: 'drinks',
          title: 'Drinks',
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
                  name: 'filtername',
                  title: 'Filte rname',
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
                          name: 'english_recipe',
                          title: 'English Recipe',
                          type: 'string',
                        }),
                        defineField({
                          name: 'recipedetails',
                          title: 'Recipe Details',
                          type: 'string',
                        }),
                        defineField({
                          name: 'english_recipedetails',
                          title: 'English Recipe Details',
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
