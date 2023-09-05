//menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    navbar.classList.toggle('active');
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

//active menu
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os elementos <a> dentro da lista
    var navLinks = document.querySelectorAll("nav ul li a");
  
    // Itera sobre cada link
    navLinks.forEach(function(link) {
      // Adiciona um evento de clique a cada link
      link.addEventListener("click", function() {
        // Remover a classe "active" de todos os links
        navLinks.forEach(function(link) {
          link.classList.remove("active");
        });
      
        // Adicionar a classe "active" apenas ao link clicado
        this.classList.add("active");
      
        // Fechar o menu se estiver aberto
        if (navbar.classList.contains("open")) {
          menu.classList.toggle("bx-x");
          navbar.classList.remove("open");
        }
      });
      
    });
  });