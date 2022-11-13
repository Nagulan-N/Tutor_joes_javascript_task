var nav_button = document.querySelectorAll('.btn');
var search = document.querySelector('#search');
var boxes = document.querySelectorAll('.box');

nav_button.forEach((x) => {
    x.addEventListener('click', (e) => {
        select(e.target);
    })
})

search.addEventListener('keyup', (e) => {
    let search_value = e.target.value.toLowerCase().trim();
    nav_button.forEach((x) => {
        x.classList.remove('btn-clicked');
    })
    nav_button[0].classList.add('btn-clicked');
    boxes.forEach((box) => {
        if (box.dataset.items.includes(search_value) || search_value.includes('all')) {
            box.style.display = 'block';
        }
        else {
            (search_value == '') ? box.style.display = 'block' : box.style.display = 'none';
        }
    })
})

function select(e) {
    nav_button.forEach((x) => {
        x.classList.remove('btn-clicked');
    })
    e.classList.add('btn-clicked');
    let filter_value = e.dataset.filter;
    boxes.forEach((box) => {
        if (filter_value == box.dataset.items) {
            box.style.display = 'block';
        }
        else {
            (filter_value == 'all') ? box.style.display = 'block' : box.style.display = 'none';
        }
    })
}