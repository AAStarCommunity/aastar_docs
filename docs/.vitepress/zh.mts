import {defineConfig, type DefaultTheme} from 'vitepress'

// https://vitepress.dev/reference/site-config


export const zh = defineConfig({
    lang: 'zh-CN',
    title: "AAStar",
    description: "致力于用户大规模采用的以太坊账户抽象基础设施",
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
            {text: 'AAStar 官网', link: 'https://aastar.io/'},
            {text: '仪表板', link: 'https://dashboard.aastar.io/'},
            {text: '博客', link: 'https://www.aastar.io/posts/'},
            {text: '状态', link: 'https://aastar.instatus.com/'},
            {text: '接口', link: 'https://docs.aastar.io/api.html'},
        ],

        sidebar: sidebarGuide(),

     
    }
})

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '🎓介绍',
            base:'/zh/introduction/',
            collapsed: false,
            items: [

                {text: '- 架构 概览', link: 'architecture_overview.md'},
                {text: '- 教程', link: 'tutorials.md'},
                {text: '- 答疑', link: 'faq.md'},
            ]
        },
        {
            text: '⚙️仪表板',
            base:'zh/dashboard/',
            collapsed: false,
            link: 'overview.md', // default link when clicking on the parent
            items: [
                {text: '- Api Key', link: 'api_key.md'},
                {text: '- 赞助 策略', link: 'sponsor_strategy.md'}
            ]
        },
        {
            text: '⛽gas赞助',
            base:'/zh/paymaster/',
            link: 'overview.md', // default link when clicking on the parent
            collapsed: false,
            items: [
                {text: '-  概览', link: 'overview.md'},

                {text: '- 指引', link: 'guide'},
                {text: '- RPC 方法', link: 'rpc_methods'},
                {text: '- 支持的网络', link: 'support_chains'},
                {text: '- 支持的Erc20 Token', link: 'support_erc20_token'},
                {text: '- 错误 解释', link: 'errors'},
                {text: '- 汽油箱', link: 'gas_tank'},
                {text: '- 变更日志', link: 'change_log'},
                {text: '- 部署您自己的Paymaster', link: 'deploy'},
            ]
        },
        {
            text: '👤AIR ACCOUNT',
            collapsed: false,
            base:'/zh/airaccount/',
            link: 'overview.md',
            items: [
                {text: '- 概览 ', link: 'overview.md'},

                {text: '- RPC 方法', link: 'rpc_methods.md'},
                {text: '- 支持的网络', link: 'support_chains'},
                {text: '- 变更日志', link: 'change_log.md'}
            ]
        },
        {
            text: '🔎CONMET ENS',
            collapsed: false,
            base:'/zh/ens/',
            link: 'overview.md',
            items: [
                {text: '- 概览 ', link: 'overview.md'},
                {text: '- RPC 方法', link: 'rpc_methods.md'},
                {text: '- 变更日志', link: 'change_log.md'}
            ]
        },
        {
            text: '📗我们的 Demo',
            collapsed: false,
            base:'/zh/demo/',
            items: [
                {text: '- MintNFT ', link: 'nft.md'},
                {text: '- MultiMint Token', link: 'token.md'},
            ]
        }
    ]
}
