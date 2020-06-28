function showMenuLinks(){
    document.querySelector(".block_menu_content").style.display = 'flex';
    document.querySelector(".content_links").style.display = 'flex';

}

function closeMenuLinks(){
    document.querySelector(".block_menu_content").style.display = 'none';
    document.querySelector(".content_links").style.display = 'none';
}

function changesOnNewDiv(){
    document.querySelector(".hover_block_film").style.display = 'flex';
    document.querySelector(".hover_block_serial").style.display = 'flex';
    document.querySelector(".hover_block_anime").style.display = 'flex';
}

function changesOnOldDiv(){
    document.querySelector(".hover_block_film").style.display = 'none';
    document.querySelector(".hover_block_serial").style.display = 'none';
    document.querySelector(".hover_block_anime").style.display = 'none';
}

function showBlockUserContent(){
    document.querySelector(".block_with_user_content").style.display = 'flex';
}

function closeBlockUserContent(){
    document.querySelector(".block_with_user_content").style.display = 'none';
}

let newFilms = document.querySelector(".new_films");
let imgNamedFilms = document.querySelector(".img_named_films");
let imgSlider = document.getElementById("imgSlider");
let namedFilm = document.querySelector(".named_film");

