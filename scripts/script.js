// Seleciona o elemento <nav>
const navigation = document.querySelector("nav");

// Função que adiciona ou remove a classe 'scroll' no menu ao rolar a página
function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

// Adiciona o evento de scroll para chamar a função sempre que o usuário rolar a página
// window.addEventListener("scroll", onScroll);

ScrollReveal({
    origin: 'top', /* vai começar de cima para baixo */
    distance: '30px', /* distancia */
    duration: '700', /* duração de tempo na animação */
}).reveal(`
    #home,
    #home .wrapper-container h1,
    #home .wrapper-container p
    #cardsContainer
    #card
`);