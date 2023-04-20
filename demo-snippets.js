const myWebWorker = new Worker('./path/to/worker.js');


myWebWorker.postMessage({ text: 'Beispiel Objekt' });

myWebWorker.postMessage({ bufferData: arrayBuffer }, [arrayBuffer]);


onmessage = (event) => {
    console.log('Daten vom Hauptthread', event.data);
    const workerResult = { text: `Rückmeldung` };
    postMessage(workerResult);
};

myWebWorker.terminate();
self.close();

// Erzeugen einer Shared Web Worker Instanz
mySharedWorker = new SharedWorker('./path/to/shared-worker.js');
// .postMessage wird jetzt auf dem Port ausgeführt
mySharedWorker.port.postMessage('Nachricht an den Shared Worker');


onconnect = (event) => {
    let clientPort = event.ports[0];
    // EventListener für eingehende Nachrichten auf Message Port registrieren
    clientPort.onmessage = (e) => {
        const workerResult = { text: `Rückmeldung mit empfangenden Daten: ${e.data}` };
        // Nachricht wird über den Port an den Aufrufer gesendet 
        port.postMessage(workerResult);
    }
}


navigator.serviceWorker.register('./service-worker.js');



// Registriere einen EventListener für Netzwerkaufrufe via fetch
self.addEventListener('fetch', (event) => {
    event.respondWith(cacheFirst(event.request));
});

const cacheFirst = async (request) => {
    // Prüfen ob im cache bereits der Netzwerkaufruf enthalten ist
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
        return responseFromCache;
    }
    // Normaler Netzwerkaufruf für noch nicht bekannte Aufrufe
    return fetch(request);
};


// Registriere einen EventListener für Netzwerkaufrufe via fetch
self.addEventListener("fetch", (event) => {
    // Prüfen ob im cache bereits der Netzwerkaufruf enthalten ist
    event.respondWith(caches.match(event.request));
});


// Registriere einen EventListener für Netzwerkaufrufe via fetch
self.addEventListener("fetch", (event) => {
    event.respondWith(
        // Entweder aus dem Zwischenspeicher des Service Workers laden
        // Oder Netzwerkaufruf durchführen
    );
});