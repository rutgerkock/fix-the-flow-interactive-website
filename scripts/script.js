const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const header = document.getElementById('header');
var stickyTitle = document.getElementById('sticky_titel');

menuButton.addEventListener('click', function () {
    toggleMenu();
});

const menuLinks = document.querySelectorAll('#dropdownMenu a');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        toggleMenu();
    });
});

function toggleMeerLezen1() {
    var button = document.querySelector('#meer_lezen_1');
    var buttonText = button.textContent.trim();
    var meerLezen = document.querySelector('#desktop_text_1');
    if (buttonText === 'Meer lezen') {
        button.textContent = 'Minder lezen';
    } else {
        button.textContent = 'Meer lezen';
    }
    meerLezen.style.display = (meerLezen.style.display === 'none' || meerLezen.style.display === '') ? 'inline' : 'none';
}

function toggleMeerLezen2() {
    var button = document.querySelector('#meer_lezen_2');
    var buttonText = button.textContent.trim();
    var meerLezen = document.querySelector('#desktop_text_2');
    if (buttonText === 'Meer lezen') {
        button.textContent = 'Minder lezen';
    } else {
        button.textContent = 'Meer lezen';
    }
    meerLezen.style.display = (meerLezen.style.display === 'none' || meerLezen.style.display === '') ? 'inline' : 'none';
}

function toggleMeerLezen3() {
    var button = document.querySelector('#meer_lezen_3');
    var buttonText = button.textContent.trim();
    var meerLezen = document.querySelector('#desktop_text_3');
    if (buttonText === 'Meer lezen') {
        button.textContent = 'Minder lezen';
    } else {
        button.textContent = 'Meer lezen';
    }
    meerLezen.style.display = (meerLezen.style.display === 'none' || meerLezen.style.display === '') ? 'inline' : 'none';
};

function toggleMenu() {
    if (!dropdownMenu.classList.contains('dropdownMenu-expanded')) {
        dropdownMenu.classList.add('dropdownMenu-expanded');
        menuButton.classList.add('expanded');
        header.classList.add('header-expanded');
    } else {
        dropdownMenu.classList.remove('dropdownMenu-expanded');
        menuButton.classList.remove('expanded');
        header.classList.remove('header-expanded');
    }
}

function showUpButton() {
    var upButton = document.getElementById("up_button");
    if (upButton) {
        upButton.style.opacity = "1"; 
        upButton.style.bottom = "20px"; 
    }
}

function hideUpButton() {
    var upButton = document.getElementById("up_button");
    if (upButton) {
        upButton.style.opacity = "0";
        upButton.style.bottom = "0";
    }
}

window.addEventListener("scroll", function() {
    var mainSection = document.getElementById("waarom_section");
    if (mainSection) {
        if (window.scrollY > mainSection.offsetTop) {
            showUpButton();
        } else {
            hideUpButton();
        }
    }
});

window.addEventListener("load", hideUpButton);


document.addEventListener('DOMContentLoaded', function () {
    var stickyTitle = document.getElementById('sticky_titel');
    var scrollTrigger = document.getElementById('scrolltrigger').offsetTop;
    function handleScroll() {
        if (window.scrollY >= scrollTrigger) {
            stickyTitle.classList.add('title_position');
        } else {
            stickyTitle.classList.remove('title_position');
        }
    }
    window.addEventListener('scroll', handleScroll);
});

function toggleMenu() {
    if (!dropdownMenu.classList.contains('dropdownMenu-expanded')) {
        dropdownMenu.classList.add('dropdownMenu-expanded');
        menuButton.classList.add('expanded');
        header.classList.add('header-expanded');
    } else {
        dropdownMenu.classList.remove('dropdownMenu-expanded');
        menuButton.classList.remove('expanded');
        header.classList.remove('header-expanded');
    }
}



function test() {
    const phonescreen = document.getElementById('phone-screen');
    const text = document.getElementById('text_container');
    const button = document.getElementById('button_phone_1');
    const text1 = document.getElementById('p_phone_1');

    phonescreen.classList.toggle('toggle_phone');
    text.classList.toggle('toggle_text');
    button.classList.add("pulse");
    text1.classList.toggle('show');
}