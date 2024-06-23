document.getElementById('table').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-icon')) {
        const tableElement = e.target.closest('tr');
        document.querySelector('.popup p').textContent = `Вы действительно хотите удалить операцию?`;
        document.getElementById('overlay').style.display = 'flex';
    } else if (e.target.classList.contains('edit-icon')) {
        window.location.href = 'edit-income-expense.html';
    }
});

document.getElementById('yesBtn').addEventListener('click', function() {
    console.log('Удалено');
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});