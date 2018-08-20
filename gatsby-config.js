let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
    process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Lipstick, Wine, and Heels',
    description:
      'Lipstick, Wine, and Heels is a lifestyle blog dedicated to chic living and nerdy topics. I am a woman in tech who appreciates fashion, fine food and drink, crafty hobbies, fitness, and cats.',
    siteUrl: 'https://lipstickwineandheels.com',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Crimson Text', 'Dancing Script'],
      },
    },
    'gatsby-plugin-page-transitions',
  ],
}
