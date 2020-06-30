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
      "An Animal Crossing New Horizons fan-blog providing tips and tricks for making your island a better place!",
    keywords: [
      "Island Horizons",
      "Island Horizons Animal Crossing blog",
      "Island Horizons Animal Crossing fan blog",
      "Island Horizons ACNH",
      "Animal Crossing New Horizons",
      "Animal Crossing",
      "ACNH",
      "New Horizons",
      "Animal Crossing 5 star island",
      "animal crossing nintendo",
      "animal crossing nintendo switch",
      "animal crossing switch",
      "animal crossing turnips",
      "animal crossing flowers",
      "animal crossing new horizons villagers",
      "animal crossing bug prices",
      "animal crossing fish prices",
      "animal crossing custom designs",
      "animal crossing animals",
      "animal crossing fossils",
      "fossil prices new horizons",
      "fossils new horizons",
      "fossils animal crossing",
      "cj and flick",
      "cj and flick prices",
      "cj and flick prices animal crossing",
      "cj prices animal crossing",
      "flick prices animal crossing",
      "selling to flick",
      "selling to cj",
      "selling fish to cj animal crossing",
      "selling bugs to flick animal crossing",
      "cj animal crossing",
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
      "critters animal crossing",
      "fishing in animal crossing",
      "catching bugs in animal crossing",
      "swimming in animal crossing",
      "Animal Crossing help",
      "Animal Crossing tips and tricks",
      "Best practices Animal Crossing",
      "Animal Crossing blog",
      "Animal Crossing New horizons fan blog",
      "Animal Crossing fan blog",
      "Animal Crossing fan-blog",
      "DIY",
      "DIY recipes",
      "DIY Recipes animal crossing",
      "custom paths",
      "React",
      "Gatsby",
      "animal crossing amiibo",
      "animal crossing games",
      "animal crossing new game",
      "animal crossing 2020",
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
              "/critters/critters/",
              "/critters/time",
              "/critters/month",
            ],
          },
        ],
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
