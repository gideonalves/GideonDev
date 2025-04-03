window.addEventListener("scroll", onScroll);
// Seleciona o botão "Voltar para o topo"

onScroll();
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home) 
  activateMenuAtCurrentSection(portfolio) 
  activateMenuAtCurrentSection(sobreMim)
  activateMenuAtCurrentSection(contato)
}

function activateMenuAtCurrentSection(section) { 
  const targetLine = scrollY + innerHeight / 2; 
  const sectionTop = section.offsetTop; 
  const sectionHeight = section.offsetHeight; 
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop; // Verifica se a linha alvo atingiu ou passou o topo da seção


  const sectionEndsAt = sectionTop + sectionHeight; // Calcula o final da seção

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine; // Verifica se o final da seção passou a linha alvo
    

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine; // Verifica se a seção está dentro da linha alvo

  const sectionId = section.getAttribute('id'); // Pega o id da seção
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`); // Seleciona o elemento do menu correspondente à seção

  menuElement.classList.remove('active'); // Remove a classe 'active' de todos os elementos do menu
  if(sectionBoundaries) {
    menuElement.classList.add('active'); // Adiciona a classe 'active' ao elemento do menu
  }


}

function showNavOnScroll() { 
  const navigation = document.querySelector("nav");

     if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}

function showBackToTopButtonOnScroll() { 
  const backToTopButton = document.querySelector("#backToTopButton");
     if (scrollY > 550) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
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

