let menu = document.getElementById('menu');

let open_menu = document.getElementById('open-menu');

let close_menu = document.getElementById('close-menu')

open_menu.addEventListener('click', abrirMenu)
close_menu.addEventListener('click', abrirMenu);

function abrirMenu(){
    menu.classList.toggle('show-menu');
    if(menu.classList.contains('show-menu')){
        open_menu.style.display = 'none';
        close_menu.style.display= 'block';
    }else{
        open_menu.style.display = 'block';
        close_menu.style.display= 'none';
    }
};

