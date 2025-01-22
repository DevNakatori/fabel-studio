import {defineField, defineType, isImage, defineArrayMember} from 'sanity'

export default defineType({
  name: 'hetmenu',
  title: 'Het Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'logoImage',
      title: 'Logo',
      type: 'image',
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
          title: 'Image',
          name: 'image',
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
                          type: 'text',
                        }),
                        defineField({
                          name: 'recipedetails',
                          title: 'Recipe Details',
                          type: 'text',
                        }),
                        defineField({
                          name: 'price',
                          title: 'Price',
                          type: 'text',
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
                          type: 'text',
                        }),
                        defineField({
                          name: 'recipedetails',
                          title: 'Recipe Details',
                          type: 'text',
                        }),
                        defineField({
                          name: 'price',
                          title: 'Price',
                          type: 'text',
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
                          type: 'text',
                        }),
                        defineField({
                          name: 'recipedetails',
                          title: 'Recipe Details',
                          type: 'text',
                        }),
                        defineField({
                          name: 'price',
                          title: 'Price',
                          type: 'text',
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
      const {topTitle, bottomTitle, language, media} = selection

      return {
        title: `${topTitle || ''} ${bottomTitle || ''}`.trim(),
        subtitle: language,
        media,
      }
    },
  },
})
