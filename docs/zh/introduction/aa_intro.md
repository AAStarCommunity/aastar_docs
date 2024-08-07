# 什么是账户抽象
Account Abstraction 旨在通过使用户帐户更加灵活和实用来增强用户体验。
* 权限的抽象化：可以使用外部社交软件，生物信息验证等途径进行账户授权）让用户忽略私钥的存在
* Gas的抽象化： 通过外部Paymaster，用户可以不用在意链上交互所需的gas，使用任意非 当前链的gas token 支付gas
* 签名的抽象化： 支持 椭圆曲线数字签名算法 （ECDSA）之外的链上签名方式，扩展性更强，并且为未来抗量子做准备



##  ERC 4337
以下为面向开发人员的 ERC-4337 标准的快速概述。

ERC-4337提议在以太坊中为账户抽象提供标准化接口。该接口定义了一组函数和数据结构，合约可以实现这些函数和数据结构，从而实现高级交易处理功能。其目标是提供更多灵活性和控制权，使得能够执行各种用例和优化。

账户抽象的主要思想是将交易执行逻辑与标准以太坊虚拟机（EVM）执行流程分离开来。不再仅依赖于EVM内置的执行模型，账户抽象允许实现替代的执行模型，从而支持更复杂的交易处理和优化。

通过实现ERC-4337接口，合约可以定制交易执行的各个方面，如燃气计算、签名验证和状态访问。这样就可以开发出像无燃气交易、元交易等高级功能，并且能够更有效地进行交易处理。

![](https://raw.githubusercontent.com/jhfnetboy/MarkDownImg/main/img/202403052039293.png)

> [!TIP] 📘需要查看更多细节信息吗？
>  你可以查询  EIPFun提供的 4337介绍和信息整理 https://eip.fun/eips/eip-4337
>  查询更面向开发者的4337 信息 https://docs.stackup.sh/docs/erc-4337-guides


##  EIP 7702 
Coming

##  RIP 7560
Coming
