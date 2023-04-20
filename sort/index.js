// Initialisieren der Daten
let data = [];
let min = 0;
let max = 20_000_000;
for (let i = 0; i < max; i++) {
    // Es werden 20 Millionen zufällige natürliche Zahlenwerte erzeugt
    data[i] = Math.round(Math.random() * (max - min)) + min;
}

// Starten der Sortierung sobald der Knopf gedrück wird
document.getElementById('sortBtn').addEventListener('click', () => {
    // Starten der Zeitmessung
    const start = performance.now();
    // Sortieren des Arrays
    data.sort((a, b) => a - b);
    // Beenden der Zeitmessung und Anzeige der Dauer
    const end = performance.now();
    timer.textContent = `Zeit vergangen: ${end - start} ms`;
    // Anzeigen der ersten und letzten Elemente des Arrays
    document.getElementById('result').innerText =
        'Die sortierten Elemente: ' +
        `${data[0]}, ${data[1]}, ${data[2]}` +
        ' ... ' +
        `${data[19_999_997]}, ${data[19_999_998]}, ${data[19_999_999]}`
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