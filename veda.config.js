module.exports = {
  /**
   * Glob path for the datasets.
   */
  datasets: "./datasets/*.data.mdx",

  /**
   * Glob path for the stories.
   */
  stories: "./stories/*.stories.mdx",

  // App component and content overrides.
  // See docs/CONFIGURATION.md for more information.
  pageOverrides: {
    // Content for the about page.
    // Type: Content override
    aboutContent: "./overrides/about.mdx",
    // Content for the home page.
    // Type: Content override
    homeContent: "./overrides/home/index.mdx",
    // Content for the development page.
    // Type: Content override
    developmentContent: "./overrides/development/index.mdx",
    storiesHubContent: "./overrides/theme/content/index.mdx",
    storiesHubHero: "./overrides/theme/hero/index.mdx",
    // Component for the home hero banner.
    homeHero: "./overrides/components/home-hero/index.mdx",

    // Component for the header brand.
    headerBrand: "./overrides/components/header-brand/index.mdx",
    // Component for the footer.
    pageFooter: "./overrides/components/page-footer/index.mdx",
  },

  strings: {
    stories: {
      one: "theme",
      other: "themes",
    },
    storiesBanner: "Something related to themes.",
    dataCatalogBanner:
      "This dashboard is for exploring key datasets that provide insight into greenhouse gas sources, sinks, emissions, fluxes, and events.",
  },

  theme: {
    color: {
      primary: "#082a64",
      link: "#1565EF",
    },
    type: {
      base: {
        color: "#1B2631",
        family: '"Inter", sans-serif',
      },
    },
    button: {
      type: {
        case: "uppercase",
        weight: 400,
      },
    },
  },
};
