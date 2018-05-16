var token_ // variable will store the token
var userName = "12447"; // app clientID
var passWord = "ptRplwVuSVmdx*I3XC*CmQ(("; // app clientSecret
var caspioTokenUrl = "https://stackexchange.com/oauth/login_success"; // Your application token endpoint  
var request = new XMLHttpRequest();

function getToken(url, clientID, clientSecret) {
    var key;
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send("grant_type=client_credentials&client_id="+clientID+"&"+"client_secret="+clientSecret); // specify the credentials to receive the token on request
    request.onreadystatechange = function () {
        if (request.readyState == request.DONE) {
            var response = request.responseText;
            var obj = JSON.parse(response);
            key = obj.access_token; //store the value of the accesstoken
            token_ = key; // store token in your global variable "token_" or you could simply return the value of the access token from the function
        }
    }
}
// Get the token
getToken(caspioTokenUrl, userName, passWord);
