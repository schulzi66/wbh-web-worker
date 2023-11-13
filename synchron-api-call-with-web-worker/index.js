// Datei index.js
// Starten der Zeitmessung
const timer = document.querySelector('#timer');
timer.innerText = 'Zeit vergangen: 0';
let start = 0;

// Erzeugen des Web Worker
const sortWebWorker = new Worker('worker.js');

sortWebWorker.onmessage = (event) => {
    // Element zum Anzeigen des Ergebnis holen
    const result = document.querySelector('#result');
    result.innerText = event.data;

    // Beenden der Zeitmessung und Anzeige der Dauer
    const end = performance.now();
    timer.textContent = `Zeit vergangen: ${end - start} ms`;
}

document.getElementById('apiBtn').addEventListener('click', () => {
    start = performance.now();
    sortWebWorker.postMessage('start');
})

