let DataSocket = require("fyers-api-v3").fyersDataSocket;

var skt= DataSocket.getInstance("Accesstoken in format APPID:AccessToken",
"path where to save logs")

skt.on("connect",function(){
skt.subscribe(['NSE:IDEA-EQ',"NSE:SBIN-EQ"]) 
//subscribing for market depth data if need of market depth comes as a diffrent tick
skt.subscribe(['NSE:IDEA-EQ',"NSE:SBIN-EQ"],true) 
//to start lite mode to get fewer data like ltp change
skt.mode(skt.LiteMode) 
//to revert back to full mode
// skt.mode(skt.FullMode) 
})

skt.on("message",function(message){
	console.log({"TEST":message})
})

skt.on("error",function(message){
	console.log("erroris",message)
})

skt.on("close",function(){
    console.log("socket closed")
})
skt.connect()


// Enable auto reconnect with 5 second interval and retry for maximum of 5 times.
// skt.autoReconnect();