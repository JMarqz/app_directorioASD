// SplashScreen Delay
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    setTimeout(function() {
        navigator.splashscreen.hide();
    }, 2000);
    // StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByHexString("#c69c6d");
    StatusBar.styleDefault();
}


/* CONFIGURACIONES GLOBALES DE JQUERY MOBILE */
$( document ).on( "mobileinit", function() {
    $.mobile.defaultPageTransition = 'none';
});


// Enviar correos
function enviarCorreo(correo, subject){
    var asunto = "";
    if (subject != null) { asunto = subject };

    window.plugin.email.open({
        to: [correo],
        subject: asunto
    });
}


// Abrir URL en navegador nativo
function abrirURL(url) {
    var ref = window.open(encodeURI(url), '_system');
}


// Abrir Twitter
function abrirTwitter(userName){
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
        if (plataforma == "Android") {
            window.open("http://www.twitter.com/"+userName, "_system");
        } else{
            window.open("twitter://user?screen_name="+userName);
        }
    },
    function() {  // Error callback
        window.open("http://www.twitter.com/"+userName, "_system");
    });
}