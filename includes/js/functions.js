// SplashScreen Delay
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    setTimeout(function() {
        navigator.splashscreen.hide();
    }, 10000);
}


//Abrir URL en navegador nativo
function abrirURL(url) {
    //document.addEventListener('deviceready', onDeviceReady, false); // Esperar a que Cordova cargue.
    
    //function onDeviceReady() {
        var ref = window.open(encodeURI(url), '_system');
    //}
}


//Abrir Twitter
function abrirTwitter(userName){
	//document.addEventListener("deviceready", onDeviceReady, false);

    //function onDeviceReady() {
        var plataforma = device.platform;
        var twitter;

        //Saber si es Android o iOS
        if (plataforma == "Android") {
            twitter = "com.twitter.android";
        } else if(plataforma == "iOS"){
            twitter = "twitter://";
        };

        // AppAvailability v0.3.0
        appAvailability.check(
        twitter, // URI Scheme
        function() {  // Success callback
            window.open("twitter://user?screen_name="+userName);
        },
        function() {  // Error callback
            window.open("http://www.twitter.com/"+userName, "_system");
        });
    //}
}