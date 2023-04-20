// Datei: index.js
// Initialisieren der Daten
let start = 0;
// Transferable Datentyp ArrayBuffer verwenden
let buffer = new ArrayBuffer(80_000_000);
let bufferData = new Uint32Array(buffer);
let x = new ArrayBuffer(1);
let y = new ArrayBuffer(4);
let z = new Uint16Array(y);
let a = new Uint8Array(y);
let min = 0;
let max = 20_000_000;
for (let i = 0; i < max; i++) {
    // Es werden 20 Millionen zufällige natürliche Zahlenwerte erzeugt
    bufferData[i] = Math.round(Math.random() * (max - min)) + min;
}

// Erzeugen des Web Worker
const sortWebWorker = new Worker('worker.js');

sortWebWorker.onmessage = (event) => {
    // Beenden der Zeitmessung nachdem die Werte sortiert wurden und Anzeige der Dauer
    const end = performance.now();
    timer.textContent = `Zeit vergangen: ${end - start} ms`;

    // Anzeigen der ersten und letzten Elemente des Arrays
    const sortedData = event.data.sortedData;
    document.getElementById('result').innerText =
        'Die sortierten Elemente: ' +
        `${sortedData[0]}, ${sortedData[1]}, ${sortedData[2]}` +
        ' ... ' +
        `${sortedData[19_999_997]}, ${sortedData[19_999_998]}, ${sortedData[19_999_999]}`
}

// Starten der Sortierung sobald der Knopf gedrück wird
document.getElementById('sortBtn').addEventListener('click', () => {
    // Starten der Zeitmessung
    start = performance.now();
    // Nachricht an WebWorker mit unsortierten Daten
    // Daten werden aus Effizienzgründen übertragen und nicht kopiert
    sortWebWorker.postMessage({ cmd: 'sort', bufferData: buffer }, [buffer]);
})

// Starten der Animation der Progressbar zur Visualisierung des UI Hauptthreads
document.getElementById('startAnimationBtn').addEventListener('click', () => {
    const element = document.getElementById("progressBar");
    let width = 0;
    const id = setInterval(() => {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }, 100);
})