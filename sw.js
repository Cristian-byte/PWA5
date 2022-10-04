
// Ciclo de vida del SW

self.addEventListener('install', event => {
    
    //Descargamos assets
    //Cremos cache

    console.log('SW: Instalando SW');

    self.skipWaiting();
});

//Cuando el SW toma el control de la plicacion 

self.addEventListener('activate', event => {

    //Borrar cache viejo
    console.log('SW: Activo y Listo para controlar la app');
});