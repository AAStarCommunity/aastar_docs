# What is Account Abstraction
Account Abstraction aims to enhance user experience by making user accounts more flexible and practical.
* Abstraction of permissions: Users can authorize their accounts using external social software, biometric verification, etc., allowing them to ignore the existence of private keys.
* Gas abstraction: Through an external Paymaster, users can pay gas required for on-chain interactions with any non-native gas token without worrying about it.
* Signature abstraction: Supports on-chain signature methods beyond the Elliptic Curve Digital Signature Algorithm (ECDSA), providing greater scalability and preparing for future quantum resistance.

## ERC 4337
Here is a quick overview of the ERC-4337 standard aimed at developers.

ERC-4337 proposes to provide a standardized interface for account abstraction in Ethereum. This interface defines a set of functions and data structures that contracts can implement to enable advanced transaction processing capabilities. The goal is to offer more flexibility and control, enabling various use cases and optimizations.

The main idea behind account abstraction is separating transaction execution logic from the standard Ethereum Virtual Machine (EVM) execution flow. Instead of relying solely on the EVM's built-in execution model, account abstraction allows alternative execution models to be implemented, supporting more complex transaction processing and optimizations.

By implementing the ERC-4337 interface, contracts can customize various aspects of transaction execution such as gas calculation, signature verification, and state access. This enables the development of advanced features like gasless transactions, meta-transactions, etc., leading to more efficient transaction processing.

![](https://raw.githubusercontent.com/jhfnetboy/MarkDownImg/main/img/202403052039293.png)

> [!TIP] 📘Need more detailed information?
> You can check out EIPFun's introduction and information compilation on 4337 at https://eip.fun/eips/eip-4337
> Query more developer-oriented 4337 information at https://docs.stackup.sh/docs/erc-4337-guides

## EIP 7702 
Coming

## RIP 7560 
Coming
