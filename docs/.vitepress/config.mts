import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ETHPaymaster",
  description: "Sponsor Every Tx.!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
        { text: 'Home', link: '/' },
      { text: 'ETHPaymaster', link: 'https://ETHPaymaster.org' },
      { text: 'AAStar', link: 'https://aastar.xyz' }
    ],

      sidebar: [
      {
        text: 'Quick start',
        items: [
          { text: 'Quick start', link: '/quick-start/index.md' },
          { text: 'Introduction', link: '/introduction/index.md' }
        ]
      },     
      {
        text: 'API',
        items: [
          { text: 'API Examples', link: '/api-examples/index.md' },
          { text: 'API list', link: '/api-list/index.md' }
        ]
        },       
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AAStarCommunity' }
    ]
  }
})
