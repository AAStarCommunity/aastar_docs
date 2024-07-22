OverView

Erc20Paymater
GasSponsorPaymaster

paymaster 服务使 Dapps 能够赞助交易，还允许用户使用 ERC-20 代币作为 gas 支付费用。登录 Biconomy 仪表板以获取 paymaster URL，并在我们的赞助和代币 Paymaster 之间切换模式。利用不同的支出限额来自定义付款主管使用情况。
Paymaster 有三种模式
* Project Sponsor Mode :
* Token  Mode: 
* User Sponsor Mode : 



ETHPaymaster as a composable module for Ethereum, comprises three parts:

1. Relay
    1. A server to sign UserOps and maintain gas car(gas tank) account balance.
2. Contract
    1. A contract to communicate with Entrypoint and verify the signature maintain fee(deduction and refund). 3. Dashboard
    2. A terminal to show visualized data and set the sponsor strategies.


# What is ETHPaymaster?

## Introduction

**AAStar** is committed to providing AA capability component public goods for Ethereum, try to answer the question: **How can we improve Ethereum accounts to fit into the future of mass adoption?**

**ETHPaymaster** is a project supporting gas sponsors with cross-chain, multi-protocol, multi-type accounts, and more features, including smart contracts, relay, dashboard with control rules and one-key deployed docker images.

### Strength

Compared to the Business, Closed Source, and Central Relay Paymasters, ETHPaymaster provides a Community, Open Source, Decentralized Paymaster Framework to Sponsor Every Transaction.

The **unique** ETHPaymaster strengths for Ethereum are:

1. System improvements in gas sponsor UX(NFT, ENS), Cost(Gas Tank), and Security(Alert).
2. Weak censorship for transaction gas sponsorship(Sponsor any transaction with one-key deployment).
3. Diversity ERC20 gas sponsor market(Projects can support their ERC20 with gas sponsorship).
4. Lower dev cost to gas sponsor ability for DApps(SDK and ENS contract).

### Flow

![](https://raw.githubusercontent.com/jhfnetboy/MarkDownImg/main/img/202403052039293.png)

## More

[full list of APIs](../paymaster/rpc_methods.md ).


---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results



## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
