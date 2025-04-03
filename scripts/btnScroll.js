// Botão Voltar ao Topo
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTopButton');
    
    // Mostrar/ocultar botão baseado na posição de rolagem
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Ação de clique para voltar ao topo
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});