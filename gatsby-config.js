/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Island Horizons",
    language: "English",
    description: "An Animal Crossing New Horizons fan-blog.",
    keywords: [
      "Animal Crossing New Horizons",
      "Animal Crossing",
      "ACNH",
      "New Horizons",
      "Animal Crossing 5 star island",
      "animal crossing switch",
      "animal crossing turnips",
      "animal crossing flowers",
      "animal crossing new horizons villagers",
      "animal crossing bug prices",
      "animal crossing fish prices",
      "animal crossing custom designs",
      "c.j. animal crossing",
      "flick animal crossing",
      "animal crossing dodo code",
      "animal crossing critterpedia",
      "animal crossing marina",
      "animal crossing ankha",
      "animal crossing erik",
      "animal crossing apollo",
      "animal crossing annalisa",
      "animal crossing wolfgang",
      "animal crossing eating fruit",
      "Critterpedia",
      "critters",
      "fishing",
      "catching",
      "Animal Crossing help",
      "Animal Crossing blog",
      "blog",
      "Island Horizons",
      "Animal Crossing fan-blog",
      "DIY",
      "DIY recipes",
      "custom paths",
      "React",
      "Gatsby",
    ],
    siteUrl: "https://www.islandhorizons.com",
    author: "Brandi Mummery",
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
        head: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/Images`,
        name: "Images",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
