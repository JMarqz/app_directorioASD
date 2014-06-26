
//Abrir URL en navegador nativo
function abrirURL(url) {
    document.addEventListener('deviceready', onDeviceReady, false); // Esperar a que Cordova cargue.
    
    function onDeviceReady() {
        var ref = window.open(encodeURI(url), '_system');
    }
}

//Abrir Twitter
function abrirTwitter(userName){
	document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        var plataforma = device.platform;
        var twitter;

        //Saber si es Android o iOS
        if (plataforma == "Android") {
            twitter = "com.twitter.android";
        } else if(plataforma == "iOS"){
            twitter = "twitter://";
        };

        //Checar Twitter v0.2.1
        appAvailability.check(twitter, function(availability) {
            // availability is either true or false
            if(availability) {
                window.open("twitter://user?screen_name="+userName);
            } else{
                window.open("http://www.twitter.com/"+userName, "_system");
            }
        });
    }  
}