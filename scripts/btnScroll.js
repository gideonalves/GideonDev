// Botão Voltar ao Topo
document.addEventListener('DOMContentLoaded', function() {
    const btnVoltarTopo = document.getElementById('btnVoltarTopo');
    
    // Mostrar/ocultar botão baseado na posição de rolagem
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btnVoltarTopo.classList.add('visible');
        } else {
            btnVoltarTopo.classList.remove('visible');
        }
    });
    
    // Ação de clique para voltar ao topo
    btnVoltarTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});