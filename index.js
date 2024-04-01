document.getElementById('botao-navegar').onclick = function() {
    window.location.href = 'verdadeiro.html';
};

// Quando o botão "Mover este botão" é clicado
document.getElementById('botao-mover').onclick = function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * window.innerHeight + 'px';
    this.style.left = Math.random() * window.innerWidth + 'px';
};