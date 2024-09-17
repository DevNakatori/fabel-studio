import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homebanner',
  title: 'Video Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerVideo',
      title: 'Video Link',
      type: 'url',
    }),
    defineField({
      name: 'bannerLogo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
        name: 'title',
        title: 'Heading',
        type: 'string',
    }),
    defineField({
      name: 'bannerContent',
      title: 'Content',
      type: 'text',
  }),
  defineField({
    name: 'bannerButton',
    title: 'Banner Button',
    type: 'object',
    fields: [
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
      },
      {
        name: 'buttonLink',
        title: 'Button Link',
        type: 'url',
      },
    ],
  }),
  defineField({
    name: 'bannerText',
    title: 'Typing Text',
    type: 'string',
  }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      media: 'image',
    },
    prepare(select) {
      const {title, language, media} = select

      return {
        title,
        subtitle: language,
        media,
      }
    },
  },
})