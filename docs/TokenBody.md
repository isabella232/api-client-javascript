# LaunchDarklyApi.TokenBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human-friendly name for the access token | [optional] 
**role** | **String** | The name of a built-in role for the token | [optional] 
**customRoleIds** | **[String]** | A list of custom role IDs to use as access limits for the access token | [optional] 
**inlineRole** | [**[Statement]**](Statement.md) |  | [optional] 
**serviceToken** | **Boolean** | Whether the token will be a service token https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens | [optional] 
**defaultApiVersion** | **Number** | The default API version for this token | [optional] 


