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
        },
        {
          date: 'August 28, 2018',
          slug: 'hello-world',
          title: 'Hello World!',
        },
        {
          date: 'December 31, 2222',
          slug: 'this-is-a-published-post-in-the-future',
          title: 'This is a published post in the future',
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
  },
}
