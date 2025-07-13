export function Header(pic_url){
    return `<header class="header">
        <div class="logo-container">
            <img src="./src/img/done-logo.svg" alt="" class="logo">
        </div>

        <div class="user">
            <input type="text" class="search" id="search-field" placeholder="Pesquisar">
            <img src="${pic_url}" alt="" class="user-pic">
        </div>
    </header>`
};
