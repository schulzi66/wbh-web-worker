// Datei: worker.js
onmessage = (event) => {
    if (event.data === 'start') {
        // Erzeugen eines synchronen API Aufrufes, welcher 3 Sekunden Verzögerung hat
        const request = new XMLHttpRequest();
        request.open('GET', 'https://reqres.in/api/users?delay=3', false);
        request.send(null);

        if (request.status === 200) {
            // Bei erfolgreichem Aufruf das Ergebnis an den Hauptthread zurück geben
            postMessage(request.responseText);
        }
    }
}