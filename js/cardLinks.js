/**
 * Projeto Portifolio
 * Author: Jaime Dev
 * Repo: https://github.com/jaimedessilva
 */
 
const getCardLinks = () => {

    let listLink = [
        {
            url: "https://app-sgveiculos.herokuapp.com/", 
            title: "SG Veiculos", 
            thumb: "./images/sg_veiculos.png", 
            icon: [
                { url: "./icons/java.svg" },
                { url: "./icons/spring-3.svg" },
                { url: "./icons/html5color.svg"},
                { url: "../icons/postgsql.svg"},
        ]},
        {
            url: "https://urna-eletronica.netlify.app", 
            title: "Urna eletronica", 
            thumb: "./images/urna_eletronica.png", 
            icon: [
                { url: "../icons/javascript.svg"},
                { url: "../icons/html5color.svg"},
                { url: "../icons/css3color.svg" }    
        ]},
        {
            url: "http://open-movie.netlify.app", 
            title: "OpenMovie", 
            thumb: "./images/ssj_filmes.png", 
            icon: [
                { url: "../icons/javascript.svg"},
                { url: "../icons/html5color.svg"},
                { url: "../icons/css3color.svg" }    
        ]},
        {
            url: "https://getapi.netlify.app/pages/pokemon.html", 
            title: "Pokemon Api", 
            thumb: "./images/poke_api.jpg", 
            icon: [
                { url: "../icons/javascript.svg"},
                { url: "../icons/html5color.svg"},
                { url: "../icons/css3color.svg" }    
        ]},
        {
            url: "https://app-login-security.herokuapp.com/", 
            title: "Login Spring Security", 
            thumb: "./images/springSecurity.jpg", 
            icon: [
                { url: "../icons/java.svg"},
                { url: "../icons/spring-3.svg"}    
                
        ]},
        {
            url: "https://getapi.netlify.app/", 
            title: "GET APIS", 
            thumb: "./images/getapi.jpg", 
            icon: [
                { url: "../icons/javascript.svg"},
                { url: "../icons/html5color.svg"},
                { url: "../icons/css3color.svg" }    
        ]},
        {
            url: "https://getapi.netlify.app/pages/superhero.html", 
            title: "S.Hero", 
            thumb: "./images/superhero.jpg", 
            icon: [
                { url: "../icons/javascript.svg"},
                { url: "../icons/html5color.svg"},
                { url: "../icons/css3color.svg" }    
        ]},
    ]
        return listLink   
}