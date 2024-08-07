import {defineConfig, type DefaultTheme} from 'vitepress'

// https://vitepress.dev/reference/site-config


export const en = defineConfig({
    lang: 'en-US',
    title: "AAStar",
    description: "Abstract Account Sponsor Every Tx.!",
    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: 'https://docs.aastar.io/startlogo.svg'}],
        ['meta', {name: 'theme-color', content: '#5f67ee'}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {property: 'og:locale', content: 'en'}],
        ['meta', {property: 'og:site_name', content: 'AAStar Doc'}],
        ['meta', {property: 'og:url', content: 'https://docs.aastar.io/'}],
    ],
    lastUpdated: true,
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/AAStarCommunity/aastar_docs/tree/main/docs/:path',
        },
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'AAStar WebSite', link: 'https://aastar.io/'},
            {text: 'DashBoard', link: 'https://dashboard.aastar.io/'},
            {text: 'Blog', link: 'https://www.aastar.io/posts/'},
            {text: 'Status', link: 'https://aastar.instatus.com/'},
            {text: 'API', link: 'https://aastar-docs.readme.io/'},
        ],

        sidebar: sidebarGuide(),

     
    }
})

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '🎓INTRODUCTION',
            base:'/introduction/',
            collapsed: false,
            items: [
                {text: '- What is Account Abstract', link: 'aa_intro.md'},
                {text: '- Architecture OverView', link: 'architecture_overview.md'},
                {text: '- Tutorials', link: 'tutorials.md'},
                {text: '- FAQ', link: 'faq.md'},
            ]
        },
        {
            text: '⚙️DASHBOARD',
            base:'/dashboard/',
            collapsed: false,
            link: 'overview.md', // default link when clicking on the parent
            items: [
                {text: '- OverView', link: 'overview.md'},
                {text: '- Api Key', link: 'api_key.md'},
                {text: '- Sponsor Strategy', link: 'sponsor_strategy.md'}
            ]
        },
        {
            text: '⛽PAYMASTER',
            base:'/paymaster/',
            link: 'overview.md', // default link when clicking on the parent
            collapsed: false,
            items: [
                {text: '- Overview', link: 'overview'},
                {text: '- Guide', link: 'guide'},
                {text: '- RPC Methods', link: 'rpc_methods'},
                {text: '- Support Chains', link: 'support_chains'},
                {text: '- Support Erc20 Token', link: 'support_erc20_token'},
                {text: '- Errors', link: 'errors'},
                {text: '- ChangeLog', link: 'change_log'},
                {text: '- Deploy your own Paymaster', link: 'deploy'},
            ]
        },
        {
            text: '👤AIR ACCOUNT',
            collapsed: false,
            base:'/airaccount/',
            link: 'overview.md', // default link when clicking on the parent
            items: [
                {text: '- OverView ', link: 'overview.md'},
                {text: '- Rpc Methods', link: 'rpc_methods.md'},
                {text: '- ChangeLog', link: 'change_log.md'}
            ]
        },
        {
            text: '🔎CONMET ENS',
            base:'/ens/',
            link: 'overview.md', // default link when clicking on the parent
            collapsed: false,
            items: [
                {text: '- OverView ', link: 'overview.md'},
                {text: '- Rpc Methods', link: 'rpc_methods.md'},
                {text: '- ChangeLog', link: 'change_log.md'}
            ]
        },
        {
            text: '📗Our Demo',
            collapsed: false,
            items: [
                {text: '- MintNFT ', link: '/demo/nft.md'},
                {text: '- MultiMint Token', link: '/demo/token.md'},
            ]
        },
        {
            "text": "price",
            link: "/price.md"
        },
        {
            text: "SDKS",
            collapsed: false,
            base:'/sdks/',
            items: [
                {text: '- TS-SDK ', link: 'ts-sdk.md'},
                {text: '- GO-SDK', link: 'go-sdk.md'},
                {text: '- Flutter-SDK', link: 'flutter-sdk.md'},
            ]
        }
    ]
}
