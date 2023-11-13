document.getElementById('apiBtn').addEventListener('click', () => {
    // Element zum Anzeigen des Ergebnis holen
    const result = document.querySelector('#result');

    // Starten der Zeitmessung
    const timer = document.querySelector('#timer');
    timer.innerText = 'Zeit vergangen: 0';
    const start = performance.now();

    // Erzeugen eines synchronen API Aufrufes, welcher 3 Sekunden Verzögerung hat
    const request = new XMLHttpRequest();
    request.open('GET', 'https://reqres.in/api/users?delay=3', false);
    request.send(null);

    if (request.status === 200) {
        // Bei erfolgreichem Aufruf das Ergebnis anzeigen lassen
        result.innerText = request.responseText;
    }

    // Beenden der Zeitmessung und Anzeige der Dauer
    const end = performance.now();
    timer.textContent = `Zeit vergangen: ${end - start} ms`;
})
