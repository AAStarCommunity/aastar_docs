# Paymaster
Our payment supervisor allows project sponsor users to operate. We sponsor on-chain and verify and deduct project balance off-chain. Use our standard API endpoint to request sponsorship from the paymaster.
## Endpoint

Here is the basic URL for API calls:
https://paymaster.aastar.io/api/v1/paymaster/{NETWORK_ENUM}?apiKey={YOUR-APIKEY}
We prefer using enums as network identifiers instead of chain IDs to improve interface readability and scalability.
`https://paymaster.aastar.io/api/v1/paymaster/{NETWORK_ENUM}?apiKey={YOUR-APIKEY}`

No ApiKey? Here is a guide on how to apply for an ApiKey [here](../dashboard/api_key.md). Apply for your API key.

To use Paymaster capabilities, you need to log in to the AAstar dashboard to get your paymaster URL, obtain an API Key, and configure your custom sponsorship strategy.
## Modes
AAStar Paymaster has three modes:
## Project Sponsorship Mode:  
The project representative pays gas fees on behalf of users without users needing to pay native tokens. For configuring your sponsorship strategy, please refer to [Source](../dashboard/sponsor_strategy.md)

 ## Token Sponsorship Mode:  
  We allow users of project parties to use their own Erc20 tokens for paying their gas fees. Check out the list of supported token tokens [here](support_erc20_token.md) 
## User Sponsorship Mode:  
  We allow users who have obtained our Gas payment card through channels or activities to have their own gas prepayment balance. The project party does not need to pay gas; they can pay with deducted user gas top-up card storage balance.

## How To Trigger Modes:
* Project Sponsorship Mode: Specify the unique code of the Payaster's sponsorship strategy in the parameters of the Sponsor interface at Payaster, which means that projects represent users' payments for Gas.
* Token Sponsorship Mode: Specify in the parameters of Payaster's [Sponsor interface](rpc_methods.md) that it supports Tokens' enumeration[support_erc20_token.md]to trigger token sponsorship mode using specified user Tokens for payment.
* User Sponsorship Mode: If no strategy code or token is specified, by default, user sponsorship mode will be used where personal gas tank limits are used for paying gas.