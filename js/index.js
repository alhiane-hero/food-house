// dom elements:
const toggler = document.getElementById('toggler');
const navbar = document.getElementById('navbar');
const selectLang = document.getElementById('selectLang');

// toggle menu:
toggler.addEventListener('click', event => {
    event.preventDefault();
    navbar.classList.toggle('show');
});

// select language:
selectLang.addEventListener('input', ـ => {
    let pageName = selectLang.value;
    console.log(`${pageName}.html`);
    window.location.href = `${pageName}.html`;
});