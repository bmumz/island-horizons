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
    description:
      "An Animal Crossing New Horizons blog providing tips and tricks for making your island a better place!",
    keywords: [
      "Animal Crossing New Horizons blog",
      "Island Horizons",
      "Island Horizons Animal Crossing",
      "Animal Crossing blog",
      "Animal Crossing blog new horizons",
      "animal crossing switch",
      "animal crossing new horizons price",
      "animal crossing new horizons guide",
      "acnh island ideas",
      "acnh guidebook",
      "acnh guide",
      "animal crossing guide",
      "help with animal crossing",
      "help with animal crossing new horizons",
      "animal crossing info",
      "animal crossing price list",
      "animal crossing price guide",
      "animal crossing price of fish",
      "animal crossing price guide",
      "animal crossing advice",
      "animal crossing new horizons advice",
      "animal crossing fan-site",
      "new horizons guide",
      "new horizons blog",
      "new horizons fan-site",
      "new horizons starting guide",
      "tips for animal crossing",
      "starting out in animal crossing new horizons",
      "new horizons starting guide",
      "animal crossing starting guide",
      "animal crossing starting tips",
      "tips for animal crossing",
      "tips and tricks animal crossing",
    ],
    siteUrl: "https://www.islandhorizons.com",
    author: "Brandi Mummery",
  },

  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          "/critters/time/",
          "/critters/month/",
          "/critters/critters/",
          "/404",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.islandhorizons.com",
        sitemap: "https://www.islandhorizons.com/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: [
              "/critters/critters",
              "/critters/time",
              "/critters/month",
            ],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Island Horizons",
        short_name: "Island Horizons",
        start_url: "/",
        background_color: "#7cbc9b",
        theme_color: "#adacac",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "browser",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
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
