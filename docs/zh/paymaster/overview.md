
# Paymaster
我们的支付主管允许项目赞助用户操作，我们在链上赞助，并在链下验证和扣除项目余额。使用我们的标准API端点向支付主管请求赞助。
## 端点

以下是用于 API 调用的基本 URL：
https://paymaster.aastar.io/api/v1/paymaster/{NETWORK_ENUM}?apiKey={YOUR-APIKEY}
我们希望使用枚举而不是链 ID 作为网络的标识符，以提高接口的可读性和可扩展性。
`https://paymaster.aastar.io/api/v1/paymaster/{NETWORK_ENUM}?apiKey={YOUR-APIKEY}`

没有 ApiKey？这里是申请 ApiKey 的[指南](../dashboard/api_key.md)。申请您的 API 密钥。

要使用Paymaster能力 您需要登录AAstar仪表板以获取您的 paymaster URL，获取APIKey，并配置您自定义的赞助策略
## 模式
 AAStar Paymaster有三种模式
## 项目赞助模式 :  
项目方代表用户支付gas ，无需用户支付原生代币，如何配置您的赞助策略 请查看 [Source](../dashboard/sponsor_strategy.md)

 ## 代币赞助模式 :  
  我们允许项目方的用户使用他们 自己的Erc20 代币支付自己的gas费用，[查看我们支持的Token代币](support_erc20_token.md) 
## 用户赞助模式 :  
  我们允许用户 通过渠道或者活动获取我们的Gas支付卡后，拥有自己的gas代付余额，无需项目方支付gas，通过扣减的用户gas加油卡的存储余额 为自己支付gas

## 如何触发模式 ：
* 项目赞助模式： 在Payaster  Sponsor接口参数指定Paymaster 的赞助策略唯一Code，即为项目代表用户支付Gas
* 代币赞助模式： 在Paymaster [Sponsor接口](rpc_methods.md)参数中指定 Paymaster 支持Token的[枚举](support_erc20_token.md) 即可触发代币赞助模式，使用指定的用户Token 进行支付 
* 用户赞助模式： 不指定策略Code 也不指定代币时，默认使用用户赞助模式，使用用户的个人gas油箱额度支付gas


