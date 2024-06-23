document.getElementById('cardsContainer').addEventListener('click', function(e) {
    if (e.target.classList.contains('deleteBtn')) {
        const cardElement = e.target.closest('.card');
        const itemText = cardElement.querySelector('.card-title').textContent;
        document.querySelector('.popup p').textContent = `Вы действительно хотите удалить категорию ${itemText}? `;
        document.getElementById('overlay').style.display = 'flex';
    } else if (e.target.classList.contains('editBtn')) {
        window.location.href = 'edit-expenses.html';
    } else if (e.target.classList.contains('card-plus')) {
        window.location.href = 'create-expenses.html';
    }
});

document.getElementById('yesBtn').addEventListener('click', function() {
    console.log('Удалено');
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});