# rescaClient.PingPongApi

All URIs are relative to *http://127.0.0.1:7443/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pingPong**](PingPongApi.md#pingPong) | **GET** /ping | ping api server


<a name="pingPong"></a>
# **pingPong**
> PingPong pingPong()

ping api server

### Example
```javascript
import rescaClient from 'rescaClient';
let defaultClient = rescaClient.ApiClient.instance;

// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth
let oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new rescaClient.PingPongApi();
apiInstance.pingPong().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PingPong**](PingPong.md)

### Authorization

[basic](../README.md#basic), [oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

