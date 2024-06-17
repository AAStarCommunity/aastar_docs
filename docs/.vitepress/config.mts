import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AAStar",
  description: "Sponsor Every Tx.!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
        { text: 'Home', link: '/' },
        { text: 'AAStar', link: 'https://aastar.io/' },
        { text: 'ETHPaymaster', link: 'https://ETHPaymaster.org' },
      
    ],

      sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Quick start', link: '/quick-start/index.md' },
          { text: 'Introduction', link: '/introduction/index.md' },
          { text: '- Relay', link: '/introduction/relay-introduction.md' },
          { text: '- Contract', link: '/introduction/contract-introduction.md' },
          { text: '- Dashboard', link: '/introduction/dashboard-introduction.md' }
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
