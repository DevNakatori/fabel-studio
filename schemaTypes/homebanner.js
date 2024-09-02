export default {
  name: 'homebanner',
  title: 'Home Page Video Banner',
  type: 'document',
  fields: [
    {
      name: 'bannerVideo',
      title: 'Banner Video',
      type: 'url',
    },
    {
      name: 'bannerLogo',
      title: 'Banner Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Banner Title',
      type: 'string',
    },
    {
      name: 'bannerContent',
      title: 'Banner Content',
      type: 'text',
    },
    {
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
    },
    {
      name: 'bannerText',
      title: 'Banner Text',
      type: 'string',
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
