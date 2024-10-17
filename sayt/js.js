// let menu = document.querySelector('#menu-btn');
// let header = document.querySelector('.header');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     menu.classList.toggle('active');
// }

// let themeToggler = document.querySelector('#theme-toggler');

// themeToggler.onclick = () =>{
//     themeToggler.classList.toggle('fa-sun');
//     if(themeToggler.classList.toggle(fa-sun)){
//         document.body.classList.add('active');
//     }else
//     document.body.classList.remove('active');
// }

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    
    // 'fa-sun' classini mavjudligini tekshirish
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}
