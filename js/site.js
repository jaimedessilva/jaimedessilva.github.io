/**
 * Projeto Portifolio
 * Author: Jaime Dev
 * Repo: https://github.com/jaimedessilva
 */
 
const li = document.querySelector('.gallery')
const lk = document.querySelector('.lk')
const cards = document.querySelector('.cards')
const topnav = document.querySelector('.topnav')
const about = document.querySelector('.about')
const linksContato = document.querySelector('.links-contato')
const avatar = document.querySelector('.avatar')
const menu = document.querySelector('.menu-ul')
const list = []

let html = ''



//Menu Responsive     
const responsiveMenu = () => {
  if(menu.style.display == 'block'){
      menu.style.display = 'none'
  }
  else {
      menu.style.display = 'block'
   }
}

//Links Portifolio
for (let link of getLinks()) {

   html += `<div class="card">`
   html += `<div class="card-img">`
   html += `<div class="card-text">`
   html += `${link.img}`
   html += `</div>`
   html += `<h3>${link.title}</h3>`
   html += `<p><a href="${link.url}" alt="${link.title}">Link de Acesso</a></p>`
   html += `</div></div>`
}
cards.innerHTML = html

//Links de Tecnologias
let link = ''
for (let href of getLinkServicos()) {
   link += '<li>'
   link += href.link
   link += '</li>'
}
lk.innerHTML = link;

//Scroll Menu  
(window.onscroll = () => {
   if (window.pageYOffset > 100) {
      topnav.style.background = "#000"
      topnav.style.opacity = "0.5"
   }
   else {
      topnav.style.background = "#000"
      topnav.style.opacity = "1"
   }
})();

//About
(sobre = () => {
   avatar.innerHTML = `<img src="./images/avatar.jpg" alt="foto-autor">`
   about.innerHTML = `<h4 class="text-left">Sobre</h4><i>Sou Jaime</i>, 
formado em Analise e Desenvolvimento de Sistemas e apaixonado por tecnologia. 
Desenvolvi esse portfólio com o intuito de demonstrar alguns dos projetos que eu já desenvolvi e os que eu vier a
desenvolver posteriormente vou colocando aqui. Tenho experiência nas tecnologias e Linguagens: Java, Spring,
Spring-Boot, JEE, JPA, Hibernate, Bancos de dados Postgres, MySQL/Maria-DB e Oracle. Tenho também conhecimentos em
desenvolvimento Web com Tecnologias modernas tais como HTML5, CSS, Javascript ES6, Angular, AngularJS.`

})();

//Links de contato
(contatos = () => {
   html = ''                 
   for(link of getLinksContatos()){
      html += `<a href="${link.url}" class="${link.class}"></a>`
   }
   linksContato.innerHTML = html   
})()
