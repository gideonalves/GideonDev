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

// texto digitando
document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.getElementById("typing-text");
    const text = typingElement.innerHTML.trim(); // Pega o texto já existente no elemento
    typingElement.innerHTML = ""; // Limpa o conteúdo para iniciar a animação
    let index = 0;

    function type() {
        if (index < text.length) {
            const currentChar = text[index];
            typingElement.innerHTML += currentChar === "\n" ? "<br>" : currentChar;
            index++;
            setTimeout(type, 100); // Ajuste o tempo para controlar a velocidade
        }
    }

    type();
});

// Contador de visualizações usando CountAPI
document.addEventListener("DOMContentLoaded", function () {
    const viewCounterElement = document.getElementById("view-counter");

    // Substitua 'gideondev-portfolio' por um namespace único para o seu site
    const namespace = "gideondev-portfolio";
    const key = "page-views";

    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
        .then(response => response.json())
        .then(data => {
            if (viewCounterElement) {
                viewCounterElement.textContent = `Visualizações: ${data.value}`;
            }
        })
        .catch(error => console.error("Erro ao obter o contador de visualizações:", error));
});

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