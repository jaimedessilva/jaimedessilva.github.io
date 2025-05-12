
/**
 * Projeto Portfolio
 * Author: Jaime Dev
 * Repo: https://github.com/jaimedessilva
 */
let menu = document.querySelector(".menu-ul");
let linkResponsive = document.querySelector(".fechar");


/* Menu Responsive */     
function responsiveMenu() {
  "use strict";
  if (menu.style.display === "block") {
      menu.style.display = "none";
  }
  else {
      menu.style.display = "block";
  }
}
function closeMenu() {
  "use strict";
  if (menu.style.display === "block") {
    //somente em enu mobile
    let mobile = menu.style.position = "absolute";
    //console.log("fechou menu")
    if(menu.style.position === "absolute"){
      menu.style.display = "none";
    }
  }
}

/* Elementos a serem substituidos */
function elementsSubscribe() {
"use strict";


const about = document.getElementById('about-text')

const resumo = document.getElementById('resumo')
const exp1 = document.getElementById('exp-1')
const exp2 = document.getElementById('exp-2')
const exp3 = document.getElementById('exp-3')
const menu = document.querySelector('.menu-ul')





  
    //Substituição
  about.innerHTML = `Desenvolvedor de software com mais de 6 anos de experiencia, tendo atuado em Projetos Back-End, Api 
                       Rest, Soap e Web , Conhecimentos sólidos em Java EE e Spring, Spring-Boot e Frameworks, 
                       Bancos de Dados relacionais e não-relacionais, Cloud, Docker, Integração de sistemas e 
                       migração. Vivencia com Linguagens: Java, Javascript, Gherkin, Groovy, Node, React JS, PHP 
                       dentre outras. Conhecimentos em processos de Desenvolvimento e integração de Dados, Teste
                       de Software e Qualidade, Automação de Cenários de Testes e processos de CI/CD e 
                       Observabilidade`
    
    

  exp1.innerHTML = `
                       <b>Desenvolvedor Back-end Java - 2021 – Atual</b><br>
                       Grande Empresa de Telecomunicações<br>
                      
                        <p><li>Desenvolvimento de Api’s utilizando Java e Spring-boot</li></p>
                        <li>Manutenção de códigos legados e correção de bugs
                        <li>Implementação de testes unitários, de integração e apoio na automação de testes
                        <li>Participação em projeto Cloud Native, migração de tecnologias monolíticas para microserviços e conteinerização<br/>
                        <li>Uso de Pipelines CI/CD com Jenkins para processo de Build, Test e Deploy</li></p>
                        <b>Tecnologias:</b> Java, Jakarta EE, Spring-Boot, JBOSS/Wildfly, JavaScript ,Postman,Oracle, 
                        Docker, Groovy, Cucumber (Gherkin), Selenium, Dev Container
                        `
    exp2.innerHTML = `<b>Desenvolvedor fullstack Java - 2020 – 2021</b><br>
                        Fabrica de Software 
                        <p><li>Suporte no desenvolvimento de funcionalidades em aplicações legadas</li>
                        <li>Realização de testes unitários e correções de bugs em ambiente de desenvolvimento</li> 
                        <li>Manutenção em relatórios JasperReport e iReport </li> 
                        <li>Consultas direto em base de dados (SQL), alteração e criação de relatórios</li>  
                        <li>Build de aplicação via Apache ANT</li></p>  
                        <b>Tecnologias:</b> Java, Struts, Spring, JSP, Hibernate, PostgreSQL, JBoss, Javascript, GitLab
                      `
    exp3.innerHTML = `<b>Desenvolvedor Web - 2018 – 2020</b><br>
                        Startup de Tecnologia  
                        <p><li>Desenvolvimento e manutenção de sistemas internos e portais da instituição com linguagem PHP e 
                        CMS wordpress</li>
                        <li>Desenvolvimento de sistemas internos com linguagem PHP e banco de dados MySql</li>  
                        <li>Administração de portais de noticias, controle de acesso, hospedagem e domínios</li>
                        <li>Suporte a usuários e manutenção de sistemas</li></p> 
                        <b>Tecnologias:</b> PHP, Javascript, Html, Css, JQuery, MySql, Wordpress, Apache, Linux, GitHub, GitLab.
                      ` 
}
elementsSubscribe()