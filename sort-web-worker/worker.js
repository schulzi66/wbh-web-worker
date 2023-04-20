// Datei: worker.js
onmessage = (event) => {
    // Zugriff auf die übertragenen Daten 
    let data = new Uint32Array(event.data.bufferData);
    // Sortieren des Arrays
    data.sort((a, b) => a - b);
    // Nachricht zurück an den Hauptthread mit den sortierten Daten
    // Daten werden aus Effizienzgründen übertragen und nicht kopiert
    postMessage({cmd: 'result', sortedData: data }, [event.data.bufferData]);
}