---
outline: deep
---



# Dashboard

We will provide a open-source framework to run your own gas sponsor service with one-key deployment.
Dashboard is one of the important components for data visualization.


## Fow who?
We have different terminals which service for different target users.
Now we open dashboard for individual sponsors, we will open dashboard for terminal users and project runners and more later.

### Individual Sponsor
As a individual sponsor, you will run a signature service at a relay server based on our ETHPaymaster framework.
Any developers want a gas sponsorship service, just send their UserOps to your API.
#### API management
##### Apply
Access this URL: [Get API key ](https://ethpaymaster.org/dash/apikey)
1. Input your Email, project website and  daily user transaction number
2. need attachment to verify, like snapshot, contract address in EtherScan), submit the form.
3. The maintainer will check and give a manually or automatically answer.
4. You will get a key like this in your Email:
```md
Access key: 30f60d8f-cb72-4cf1-ab72-eccaa5142c68

```
##### Plans
1. You will get a 10 time a day for a free test quota(a NFT on special chain).
2. If you want put your project into real business, you need choose your plan.
We have 3 plan:
**Basic**
It is suitable for a Beta version project, just integrate with AA sponsor ability and test it.
TPS Concurrency: 3
Daily limitation: 500

**Pro**
It is a strong version for a active DApp with a DAU over 10 thousands per day.
TPS Concurrency: 30
Daily limitation: 50000

**Premium**
It is a customized version with different chains based on Pro version.

Cross chain: 3-10
TPS Concurrency: 30
Daily limitation: 50000

**Master**
It is a deeply cooperation with ETHPaymaster project, we will provide a one-key deployment docker shell script and a one day per month service to run your own Sponsor service.

Cross chain: 3-10
TPS Concurrency: 30
Daily limitation: 50000


##### Rules
Some specific rules in common transactions.

**Mode**
**Individual Single mode** 
It will service for all input transactions with a single gas payment every time.
It means the sender address must have USDT and ERC20 firstly with pre approvement.

**Gas tank mode**
We merge this mode into NFT mode.

**NFT mode**
It should send NFT to the sender address, the NFT is published by ETHPaymaster official on-chain NFT contract.
To get the special NFT, buy from official website or on cooperation community interface.

##### Settings

**Limitations**
Global Maximums
Set the total amount of USD or Native Tokens you are willing to sponsor.

Per User Maximum
Set the amount of USD or Native Tokens you are willing to sponsor per user.

Per User Operation Maximum
Set the amount of USD or Native Tokens you are willing to sponsor per user operation.

On-chain call enabled
Make an on-chain call to determine whether a user operation should be sponsored.

**Chains(on/off)**
Enabled Chains

Ancient8

Arbitrum One

Arbitrum Nova

Avalanche

Base

BNB Smart Chain

Blast

Bob

Celo

Cyber Mainnet

Degen

DFK Chain

Ethereum

Fraxtal

Fuse

Gnosis

Kinto Mainnet

Klaytn

Linea Mainnet

Lyra

Mantle

Mode

Nautilus

opBNB

OP Mainnet

Polygon

Scroll

Xai

Zora

#### Daily monitor
Activity daily monitor

#### Balance management

Deposit your ETH into special chains.


### Project Launcher
