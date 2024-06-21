import {defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config

const mediumSvg = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">\n' +
    '    <path d="M45,4H5C4.448,4,4,4.448,4,5v40c0,0.552,0.448,1,1,1h40c0.552,0,1-0.448,1-1V5C46,4.448,45.552,4,45,4z M40,13.5 l-1.821,2.197C38.064,15.811,38,15.965,38,16.125V32.75c0,0.16,0.064,0.314,0.179,0.428L40,35.546V36H30v-0.454l2.821-2.368 C32.936,33.064,33,32.91,33,32.75V17.879L24.848,36h-0.001h-1.543l0,0L15,18.375v13.108c0,0.22,0.076,0.433,0.215,0.605L18,35.546 V36h-8v-0.454l2.783-3.438C12.923,31.936,13,31.721,13,31.5V16.388c0-0.142-0.05-0.279-0.142-0.388L11,13.5V13h7.097l7.624,16.183 L33.002,13H40V13.5z"></path>\n' +
    '</svg>'
const telegramSvg = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">\n' +
    '<path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375\tc0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219\tc-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966\tc0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693\tc0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351\tc0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>\n' +
    '</svg>'
export default defineConfig({
    lang: 'en-US',
    title: "AAStar",
    description: "Sponsor Every Tx.!",
    lastUpdated: true,
    themeConfig: {
        editLink: {
            pattern:'https://github.com/AAStarCommunity/aastar_docs/tree/main/docs/:path',
        },
        search: {
            provider: 'local'
        },

        logo:'/startlogo.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'AAStar', link: 'https://aastar.io/'},
            {text: 'ETHPaymaster', link: 'https://ETHPaymaster.org'},
            {text: 'DashBoard', link: 'https://dashboard.aastar.io/'},
            {text: 'Blog', link: 'https://www.aastar.io/posts/'},
        ],

        sidebar:sidebarGuide(),

        socialLinks: [
            {icon: 'github', link: 'https://github.com/AAStarCommunity'},
            {icon: 'twitter', link: 'https://twitter.com/AAStarCommunity'},
            {icon: {svg : mediumSvg}, link: 'https://medium.com/@AAStarCommunity'},
            {icon: {svg : telegramSvg}, link: 'https://t.me/Account_Abstraction_Community'},
        ]
    }
})
function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return  [
        {
            text: 'Overview',
            collapsed: false,
            items: [
                {text: '- Architecture OverView', link: '/quick-start/index.md'},
                {text: '- Tutorials', link: '/introduction/index.md'},
                {text: '- FAQ', link: '/introduction/dashboard-introduction.md'},
                {text: '- Get Start', link: '/introduction/dashboard-introduction.md'}
            ]
        },
        {
            text: 'Paymaster',
            collapsed: false,
            items: [
                {text: 'API Examples', link: '/api-examples/index.md'},
                {text: 'API list', link: '/api-list/index.md'},
                {text: 'ChangeLog', link: '/api-list/index.md'}
            ]
        },
        {
            text: 'AirAccount',
            collapsed: false,
            items: [
                {text: 'Guide ', link: '/api-examples/index.md'},
                {text: 'ChangeLog', link: '/api-list/index.md'}
            ]
        },
        {
            text: 'Conmet Ens',
            collapsed: false,
            items: [
                {text: 'Guide ', link: '/api-examples/index.md'},
                {text: 'ChangeLog', link: '/api-list/index.md'}
            ]
        },
        {
            text: 'Out Demo',
            collapsed: false,
            items: [
                {text: 'MintNFT ', link: '/api-examples/index.md'},
                {text: 'MultiMint Token', link: '/api-examples/index.md'},
            ]
        }
    ]
}
function sidebarReference(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Reference',
            items: [
                { text: 'Site Config', link: 'site-config' },
                { text: 'Frontmatter Config', link: 'frontmatter-config' },
                { text: 'Runtime API', link: 'runtime-api' },
                { text: 'CLI', link: 'cli' },
                {
                    text: 'Default Theme',
                    base: '/reference/default-theme-',
                    items: [
                        { text: 'Overview', link: 'config' },
                        { text: 'Nav', link: 'nav' },
                        { text: 'Sidebar', link: 'sidebar' },
                        { text: 'Home Page', link: 'home-page' },
                        { text: 'Footer', link: 'footer' },
                        { text: 'Layout', link: 'layout' },
                        { text: 'Badge', link: 'badge' },
                        { text: 'Team Page', link: 'team-page' },
                        { text: 'Prev / Next Links', link: 'prev-next-links' },
                        { text: 'Edit Link', link: 'edit-link' },
                        { text: 'Last Updated Timestamp', link: 'last-updated' },
                        { text: 'Search', link: 'search' },
                        { text: 'Carbon Ads', link: 'carbon-ads' }
                    ]
                }
            ]
        }
    ]
}
