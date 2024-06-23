document.addEventListener('DOMContentLoaded', function () {
    const typeSelect = document.getElementById('type-select');
    const categorySelect = document.getElementById('category-select');

    let categories = {
        income: ['Депозиты','Зарплата', 'Сбережения', 'Инвестиции'],
        expense: ['Еда','Жильё', 'Здоровье', 'Кафе', 'Авто', 'Одежда', 'Развлечения', 'Счета', 'Спорт']
    }

    typeSelect.addEventListener('change', function () {
        categorySelect.innerHTML = '<option value="">Категория...</option>';
        let selectedType = this.value;
        let options = categories[selectedType];

        if (options) {
            options.forEach(function (category) {
                let option = new Option(category, category);
                categorySelect.add(option);
            });
        }
    });
});

