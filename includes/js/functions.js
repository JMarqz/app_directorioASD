// FUNCIONES A UTILIZAR

function abrirURL(url) {
    // Esperar a que Cordova cargue.
    document.addEventListener('deviceready', onDeviceReady, false);
    // Cordova está listo
    function onDeviceReady() {
        var ref = window.open(encodeURI(url), '_system', 'closebuttoncaption=Cerrar');
    }
}