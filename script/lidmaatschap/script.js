

// Selecteer alle benodigde elementen
const groupItems = document.querySelectorAll('.group-item');
const title = document.getElementById('group-title');
const info = document.getElementById('group-info');
const hiddenInput = document.getElementById('lidmaatschapstype');

groupItems.forEach(item => {
    item.addEventListener('click', () => {
        // Verwijder 'selected' class van alle items
        groupItems.forEach(i => i.classList.remove('selected'));

        // Voeg 'selected' class toe aan het aangeklikte item
        item.classList.add('selected');

        // Haal de data attributen op
        const newTitle = item.getAttribute('data-title');
        const newInfo = item.getAttribute('data-info');

        // Pas de content van de h2, p en hidden input aan
        title.textContent = newTitle;
        info.textContent = newInfo;
        hiddenInput.value = newTitle;
    });
});