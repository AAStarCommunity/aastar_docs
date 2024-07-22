---
outline: deep
title: Paymaster RpcMethods
lang: en-US
---

## EndPoint

Here is the base URL for the API calls:

`
https://paymaster.aastar.io/api/v1/paymaster/{NETWORK_ENUM}?apiKey={YOUR-APIKEY}
`

We hope to use enumeration instead of chain Id as the identifier for the network, in order to improve the readability and scalability of the interface.
[See Our Support Network Enum](./support_chains.md)
No ApiKey? Here is the guide for applying for an ApiKey.
[Apply Your API Key](../dashboard/api_key.md)

JSON-RPC API reference for AAStar's  Paymaster(Verifying+Erc20) service.

[pm_supportEntrypoint](#pm-supportentrypoint)

[pm_paymasterAccount](#pm-paymasteraccount)

[pm_sponsorUserOperation](#pm-sponsoruseroperation)

[pm_estimateUserOperations](#pm-estimateUserOperations)

## RPCMethods

### pm_supportEntrypoint

::: code-group

```json[Body Request]
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "pm_supportEntrypoint"
}
```

```json[Body Response]
{
  "code": 200,
  "message": "",
  "data": [
    "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    "0x0000000071727De22E5E9d8BAf0edAc6f37da032"
  ],
  "cost": "2562047h47m16.854775807s"
}
```

```shell[curl]
curl -X 'POST' \
  'https://paymaster.aastar.io/api/v1/paymaster/{NETWORK_ENUM}?apiKey={YOUR-APIKEY}' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "pm_supportEntrypoint"
}'
```

:::

### pm_paymasterAccount

::: code-group

```json[Body Request]
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "pm_paymasterAccount"
}
```

```json[Body Response]
{
  "code": 200,
  "message": "",
  "data": [
    "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    "0x0000000071727De22E5E9d8BAf0edAc6f37da032"
  ],
  "cost": "2562047h47m16.854775807s"
}
```

```shell[curl]
curl -X 'POST' \
  'https://paymaster.aastar.io/api/v1/paymaster/{NETWORK_ENUM}?apiKey={YOUR-APIKEY}' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "pm_paymasterAccount"
}'
```

:::

### pm_sponsorUserOperation

> [!WARNING]
> Paymaster Signature will expire in 5 mins

Parameters(In order):

* UserOperation: This is a User Operation with a valid dummy signature.
* Extra Data: This is a JSON object with the following fields:
  * strategy_code: This is the strategy code you apply. In provided, the Paymaster will Run In Sponsor Mode use this strategy to sponsor the User Operation.
  * token: This is the ERC-20 token type. Not Required. If provided, the Paymaster will Run In ERC20 Mode use this token to pay for the gas fee.
  * version: This is the version of the Entrypoint (v0.6 v0.7). If not provided, the Paymaster will use the default version(v0.6)
If Strategy_code and token are not provided, the Paymaster will Run In User Sponsor Mode.

[See PaymasterMode for more details.](../paymaster/guide.md)

::: code-group

```json[Body Request]
{
    "id": 0,
    "jsonrpc": "2.0",
    "method": "pm_sponsorUserOperation",
    "params": [
        {
            "callData": "0xb61d27f60000000000000000000000001c7d4b196cb0c7b01d743fbc6116a902379c7238000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000044095ea7b30000000000000000000000000000000000325602a77416a16136fdafd04b299fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000",
            "callGasLimit": "0x54fa",
            "initCode": "0x9406cc6185a346906296840746125a0e449764545fbfb9cf000000000000000000000000b6bcf9517d193f551d0e3d6860103972dd13de7b0000000000000000000000000000000000000000000000000000000000000000",
            "maxFeePerGas": "0x5968606e",
            "maxPriorityFeePerGas": "0x59682f00",
            "nonce": "0x00",
            "preVerificationGas": "0xae64",
            "sender": "0xFfDB071C2b58CCC10Ad386f9Bb4E8d3d664CE73c",
            "signature": "0xaa846693598194980f3bf50486be854704534c1622d0c2ee895a5a1ebe1508221909a27cc7971d9f522c8df13b9d8a6ee446d09ea7635f31c59d77d35d1281421c",
            "verificationGasLimit": "0x05fa35"
        },
        {
            "strategy_code": "{Strategy_Code_You_APPLY}",
            "token": "{ERC_20_Token_Type}",
            "version": "v0.6"
        }
    ]
}
```

```json[Body Response]
{
  "code": 200,
  "message": "",
  "data": {
    "strategyId": "",
    "network": "ethereum-sepolia",
    "entrypointVersion": "v0.6",
    "entrypointAddress": "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    "paymasterAddress": "0xF2147CA7f18e8014b76e1A98BaffC96ebB90a29f",
    "Erc20TokenCost": null,
    "userOpResponse": {
      "paymasterAndData": "0xf2147ca7f18e8014b76e1a98baffc96ebb90a29f00000000000000000000000000000000000000000000000000000000667939b3000000000000000000000000000000000000000000000000000000006679388600000000000000000000000086af7fa0d8b0b7f757ed6cdd0e2aadb33b03be58000000000000000000000000000000000000000000000000000000000000000099975706e331ed1424378a39a3a73cbf4a4381745f7b20ef719b721779bc6c13156553a3aabc407c62bd615695eee1cc17f2a5363518d225249c4b9770076bee1c",
      "preVerificationGas": 52456,
      "verificationGasLimit": 485377,
      "callGasLimit": 390779,
      "maxFeePerGas": 1500012654,
      "maxPriorityFeePerGas": 1500000000,
      "accountGasLimit": "",
      "paymasterVerificationGasLimit": null,
      "paymasterPostOpGasLimit": null,
      "gasFees": ""
    }
  },
  "cost": "2562047h47m16.854775807s"
}
```

```shell[curl]
curl -X 'POST' \
  'http://localhost/api/v1/paymaster/{NETWORK_ENUM}?apiKey={YOUR-APIKEY}' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
    "id": 0,
    "jsonrpc": "2.0",
    "method": "pm_sponsorUserOperation",
    "params": [
        {
            "callData": "0xb61d27f60000000000000000000000001c7d4b196cb0c7b01d743fbc6116a902379c7238000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000044095ea7b30000000000000000000000000000000000325602a77416a16136fdafd04b299fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000",
            "callGasLimit": "0x54fa",
            "initCode": "0x9406cc6185a346906296840746125a0e449764545fbfb9cf000000000000000000000000b6bcf9517d193f551d0e3d6860103972dd13de7b0000000000000000000000000000000000000000000000000000000000000000",
            "maxFeePerGas": "0x5968606e",
            "maxPriorityFeePerGas": "0x59682f00",
            "nonce": "0x00",
            "preVerificationGas": "0xae64",
            "sender": "0xFfDB071C2b58CCC10Ad386f9Bb4E8d3d664CE73c",
            "signature": "0xaa846693598194980f3bf50486be854704534c1622d0c2ee895a5a1ebe1508221909a27cc7971d9f522c8df13b9d8a6ee446d09ea7635f31c59d77d35d1281421c",
            "verificationGasLimit": "0x05fa35"
        },
        {
            "strategy_code": "{Strategy_Code_You_APPLY}",
            "token": "{ERC_20_Token_Type}",
            "version": "v0.6"
        }
    ]
}'
```

### pm_estimateUserOperationGas
