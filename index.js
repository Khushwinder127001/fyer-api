// /*Copy the access token and paste it here. NOTE : Make sure for running 
// any api 
// fyers.setAccessToken and setAppId is set or it will throw error. */

const FyersAPI = require("fyers-api-v3").fyersModel

var fyers = new FyersAPI()
fyers.setAppId("Y4PJ649WNP-100")
fyers.setRedirectUrl("https://trade.fyers.in/api-login/redirect-uri/index.html")
fyers.setAccessToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE2OTQ5NDg4NzksImV4cCI6MTY5NDk5NzA1OSwibmJmIjoxNjk0OTQ4ODc5LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbEJ0NFBVekJic2EzWnBZdWEtR2xSYmlaR3JDdmFROTRMSmxjMjdEQTB5b2lOTEZjZUpmLWZ4QkVmTEs0dGxpYTdhaTJKNDFzWEtqUVM1MGNoVGtmS3VlbUF5c1l1QVFqdjBfeGJYTEFIWGZEV1AxRT0iLCJkaXNwbGF5X25hbWUiOiJLSFVTSFdJTkRFUiIsIm9tcyI6IksxIiwiaHNtX2tleSI6IjY2ZTBiYzM3MmQ4ZWVkMmNkNDdhNmJjNmJmYjY4MzY4MWRlN2Q5ZTg1MGU2YTlhYWI5NjgzMTkyIiwiZnlfaWQiOiJYSzAzNDgxIiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.h_qe0a-p_kDdjQIPHNUzc0NRHrWPg2mNs9CmO1Y3-WA")

fyers.get_profile().then((response)=>{
      console.log(response)
  }).catch((error)=>{
      console.log(error)
  })



var inp={
    "symbol":"NSE:SBIN-EQ",
    "resolution":"D",
    "date_format":"0",
    "range_from":"1690895316",
    "range_to":"1691068173",
    "cont_flag":"1"
}
fyers.getHistory(inp).then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})

var inp=["NSE:SBIN-EQ","NSE:TCS-EQ"]

fyers.getQuotes(inp).then((response) => {
    console.log(JSON.stringify(response))
}).catch((error) => {
    console.log(error)
})
