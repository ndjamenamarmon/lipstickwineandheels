export default {
  data: {
    site: {
      siteMetadata: {
        title: 'Lipstick, Wine, and Heels',
        description:
          'Lipstick, Wine, and Heels is a lifestyle blog dedicated to chic living and nerdy topics. I am a woman in tech who appreciates fashion, fine food and drink, crafty hobbies, fitness, and cats.',
        siteUrl: 'https://lipstickwineandheels.com',
      },
    },
    allContentfulBlog: {
      edges: [
        {
          date: 'August 30, 2018',
          slug: 'this-is-a-sample-blog-post',
          title: 'This is a sample blog post',
          tags: [
            {
              title: 'Tech',
              slug: 'tech',
            },
          ],
        },
        {
          date: 'August 28, 2018',
          slug: 'hello-world',
          title: 'Hello World!',
          tags: [
            {
              title: 'Tech',
              slug: 'tech',
            },
            {
              title: 'Travel',
              slug: 'travel',
            },
          ],
        },
        {
          date: 'December 31, 2222',
          slug: 'this-is-a-published-post-in-the-future',
          title: 'This is a published post in the future',
          tags: [
            {
              title: 'Travel',
              slug: 'travel',
            },
          ],
        },
      ],
    },
    allContentfulTag: {
      edges: [
        {
          title: 'Tech',
          slug: 'tech',
        },
        {
          title: 'Travel',
          slug: 'travel',
        },
      ],
    },
    contentfulBlog: {
      date: 'August 30, 2018',
      slug: 'this-is-a-sample-blog-post',
      title: 'This is a sample blog post',
      postContent: {
        childMarkdownRemark: {
          html: '<p>This is the post content in html</p>',
        },
      },
      postImage: {
        title: 'this is the image title',
        description: 'this is the image description',
      },
      tags: [
        {
          title: 'Tech',
          slug: 'tech',
        },
      ],
    },
    contentfulTag: {
      title: 'Tech',
      slug: 'tech',
      image: {
        sizes: {
          src: '/reference/to/some/image.jpg',
        },
        title: 'this is the image title',
      },
    },
    contentfulPage: {
      title: 'About',
      slug: 'slug',
      pageContent: {
        childMarkdownRemark: {
          html: '<p>Learn all about me...</p>',
        },
      },
      metaDescription: 'This page is all about me',
      pageImage: {
        sizes: {
          src: '/reference/to/some/image.jpg',
        },
      },
    },
  },
}
