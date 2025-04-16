/* Lidmaatschap Page Script */

// Check of de benodigde elementen bestaan voordat we de logica uitvoeren
const groupItems = document.querySelectorAll('.group-item');
const title = document.getElementById('group-title');
const info = document.getElementById('group-info');
const hiddenInput = document.getElementById('lidmaatschapstype');

// Nieuw: check of alle belangrijke elementen aanwezig zijn
if (groupItems.length > 0 && title && info && hiddenInput) {
    groupItems.forEach(item => {
        // Nieuw: maak items ook via toetsenbord selecteerbaar
        item.setAttribute('tabindex', '0'); // maakt item focusbaar

        // Nieuw: voeg ondersteuning toe voor keyboard input
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                item.click(); // simuleer klik bij Enter of spatie
            }
        });

        item.addEventListener('click', () => {
            // Verwijder 'selected' class van alle items
            groupItems.forEach(i => i.classList.remove('selected'));

            // Voeg 'selected' class toe aan het aangeklikte item
            item.classList.add('selected');

            // Nieuw: controleer of de data-attributen bestaan
            const newTitle = item.getAttribute('data-title') || 'Geen titel';
            const newInfo = item.getAttribute('data-info') || 'Geen info beschikbaar';

            // Pas de content van de h2, p en hidden input aan
            title.textContent = newTitle;
            info.textContent = newInfo;
            hiddenInput.value = newTitle;
        });
    });
} else {
    // Nieuw: console-waarschuwing als iets ontbreekt
    console.warn('Lidmaatschap-script: een of meer vereiste elementen ontbreken.');
}
