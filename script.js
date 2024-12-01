const searchInput = document.getElementById('searchInput');
const itemCards = document.querySelectorAll('.item-card');

searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    itemCards.forEach(card => {
        const itemName = card.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
