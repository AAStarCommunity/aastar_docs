---
outline: deep
title: Ens Rpc Methods
lang: en-US
date: 2024-07-11
author: Neal
editor: ethan3
---

> This documentation covers several interfaces: retrieving all ENS records, adding a new ENS record, updating an ENS record, and deleting a specific record.


## Service URL

Test environment: https://ens-management.onrender.com

## Endpoints

### 1. Retrieve All ENS Records

**Endpoint**

- Description: Retrieve all ENS records
- URL: `/api/all`
- Method: `GET`

**Request Headers**

| No. | Type         | Value             | Description |
| --- | ------------ | ----------------- | ----------- |
| 1   | Content-Type | application/json  | JSON format |

**Success Response Example**

```json
{
    "data": [
        {
            "id": 1,
            "node": "ethpaymaster.eth",
            "address": {
                "0": "0x76a91462e907b15cbf27d5425399ebf6f0fb50ebb88f1888ac",
                "60": "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
            },
            "text": {
                "email": "admin@ethpaymaster.com"
            },
            "contenthash": "0xe301017012204edd2984eeaf3ddf50bac238ec95c5713fb40b5e428b508fdbe55d3b9f155ffe"
        },
        {
            "id": 2,
            "node": "test.ethpaymaster.eth",
            "address": {
                "0": "0xa914b48297bff5dadecc5f36145cec6a5f20d57c8f9b87",
                "60": "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"
            },
            "text": {
                "email": "this_is_a_test@ethpaymaster.com"
            },
            "contenthash": "0xe301017012204edd2984eeaf3ddf50bac238ec95c5713fb40b5e428b508fdbe55d3b9f155ffe"
        }
    ],
    "time": 855
}
```

**Error Response Example**

```json
{
    "status": "error",
    "message": "error message"
}
```

### 2. Add or Update ENS Record

**Endpoint**

- Description: Add a new ENS record or update an existing one if the data includes an `id` field.
- URL: `/api/ens`
- Method: `POST`

> Parameters and return values refer to `Add ENS`

**Request Headers**

| No. | Type         | Value             | Description |
| --- | ------------ | ----------------- | ----------- |
| 1   | Content-Type | application/json  | JSON format |

**Request Body**

| No. | Key        | Type   | Description                                                 |
| --- | ---------- | ------ | ----------------------------------------------------------- |
| 1   | node       | string | ENS subdomain, e.g., neal.ethpaymaster.eth                  |
| 2   | address    | Object | Key is the coinType of the chain (detailed mapping below), value is the address |
| 3   | text       | Object | Key can be 'email', 'avatar', 'description', 'display', 'keywords', 'mail', 'notice', 'location', 'phone', 'url'. Value is the corresponding value |
| 4   | contenthash| string | IPFS or SWAP hash                                           |
| 5   | id         | number | Only for updates, this field is the id from the API response |

**Request Body Example**

```json
{
    "node": "neal.ethpaymaster.eth",
    "address": { "60": "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266" },
    "text": { "email": "admin@ethpaymaster.com" },
    "contenthash": "0xe301017012204edd2984eeaf3ddf50bac238ec95c5713fb40b5e428b508fdbe55d3b9f155ffe",
    "id": 1
}
```

**Success Response Example**

```json
{
    "status": "ok"
}
```

**Error Response Example**

```json
{
    "status": "error",
    "message": "error message"
}
```

### 3. Delete an ENS Record

**Endpoint**

- Description: Delete a specific ENS record.
- URL: `/api/ens/delete`
- Method: `POST`

> Parameters and return values refer to `Add ENS`

**Request Headers**

| No. | Type         | Value             | Description |
| --- | ------------ | ----------------- | ----------- |
| 1   | Content-Type | application/json  | JSON format |

**Request Body**

| No. | Key  | Type   | Description                         |
| --- | ---- | ------ | ----------------------------------- |
| 1   | id   | number | The id from the API response        |

**Request Body Example**

```json
{
    "id": 1
}
```

**Success Response Example**

```json
{
    "status": "ok"
}
```

**Error Response Example**

```json
{
    "status": "error",
    "message": "error message"
}
```

### CoinType Mapping

```json
[
  {
    "chainId": 0,
    "name": "btc",
    "fullName": "Bitcoin",
    "coinType": 0
  },
  {
    "chainId": 1,
    "name": "eth",
    "fullName": "Ethereum",
    "coinType": 60
  },
  {
    "chainId": 10,
    "name": "op",
    "fullName": "Optimism",
    "coinType": 2147483658
  },
  {
    "chainId": 25,
    "name": "cro",
    "fullName": "Cronos",
    "coinType": 2147483673
  },
  {
    "chainId": 56,
    "name": "bsc",
    "fullName": "BNB Smart Chain",
    "coinType": 2147483704
  },
  {
    "chainId": 60,
    "name": "go",
    "fullName": "GoChain",
    "coinType": 2147483708
  },
  {
    "chainId": 61,
    "name": "etc",
    "fullName": "Ethereum Classic ",
    "coinType": 2147483709
  },
  {
    "chainId": 88,
    "name": "tomo",
    "fullName": "TomoChain",
    "coinType": 2147483736
  },
  { "chainId": 99, "name": "poa", "fullName": "POA", "coinType": 2147483747 },
  {
    "chainId": 100,
    "name": "gno",
    "fullName": "Gnosis",
    "coinType": 2147483748
  },
  {
    "chainId": 108,
    "name": "tt",
    "fullName": "ThunderCore",
    "coinType": 2147483756
  },
  {
    "chainId": 137,
    "name": "matic",
    "fullName": "Polygon",
    "coinType": 2147483785
  },
  {
    "chainId": 169,
    "name": "manta",
    "fullName": "Manta Pacific",
    "coinType": 2147483817
  },
  {
    "chainId": 246,
    "name": "ewt",
    "fullName": "Energy Web",
    "coinType": 2147483894
  },
  {
    "chainId": 250,
    "name": "ftm",
    "fullName": "Fantom Opera",
    "coinType": 2147483898
  },
  {
    "chainId": 288,
    "name": "boba",
    "fullName": "Boba",
    "coinType": 2147483936
  },
  {
    "chainId": 324,
    "name": "zksync",
    "fullName": "zkSync",
    "coinType": 2147483972
  },
  {
    "chainId": 361,
    "name": "theta",
    "fullName": "Theta",
    "coinType": 2147484009
  },
  {
    "chainId": 820,
    "name": "clo",
    "fullName": "Callisto",
    "coinType": 2147484468
  },
  {
    "chainId": 1088,
    "name": "metis",
    "fullName": "Metis",
    "coinType": 2147484736
  },
  {
    "chainId": 5000,
    "name": "mantle",
    "fullName": "Mantle",
    "coinType": 2147488648
  },
  {
    "chainId": 8453,
    "name": "base",
    "fullName": "Base",
    "coinType": 2147492101
  },
  {
    "chainId": 39797,
    "name": "nrg",
    "fullName": "Energi",
    "coinType": 2147523445
  },
  {
    "chainId": 42161,
    "name": "arb1",
    "fullName": "Arbitrum One",
    "coinType": 2147525809
  },
  {
    "chainId": 42220,
    "name": "celo",
    "fullName": "Celo",
    "coinType": 2147525868
  },
  {
    "chainId": 43114,
    "name": "avaxc",
    "fullName": "Avalanche C-Chain",
    "coinType": 2147526762
  },
  {
    "chainId": 59144,
    "name": "linea",
    "fullName": "Linea",
    "coinType": 2147542792
  },
  {
    "chainId": 534352,
    "name": "scr",
    "fullName": "Scroll",
    "coinType": 2148018000
  },
  {
    "chainId": 7777777,
    "name": "zora",
    "fullName": "Zora",
    "coinType": 2155261425
  }
]
```
