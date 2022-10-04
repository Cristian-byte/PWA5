
// Ciclo de vida del SW

self.addEventListener('install', event => {
    
    //Descargamos assets
    //Cremos cache

    console.log('SW: Instalando SW');

    //self.skipWaiting();

    const instalacion = new Promise((resulve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadass');
            self.skipWaiting();
            resolve();
        }, 1000);

    });

    event.waitUntil(instalacion);

});

//Cuando el SW toma el control de la plicacion 

self.addEventListener('activate', event => {

    //Borrar cache viejo
    console.log('SW2: Activo y Listo para controlar la app');

});