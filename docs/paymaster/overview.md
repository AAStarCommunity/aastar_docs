OverView

Erc20Paymater
GasSponsorPaymaster

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
