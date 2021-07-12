/**
 * Projeto Portifolio
 * Author: Jaime Dev
 * Repo: https://github.com/jaimedessilva/get-api
 */
 
let listLinksServ = []
let listLinks = []
let listLinksContatos = []

const getLinks = () => {
    
    //Links Portifolio
   
    listLinks.push(new Url("https://app-sgveiculos.herokuapp.com/", "SG Veiculos (Java)", './images/sg_veiculos.png'))
    listLinks.push(new Url("https://urna-eletronica.netlify.app/", "Urna eletronica (JS)", './images/urna_eletronica.png'))
    listLinks.push(new Url("http://open-movie.netlify.app/", "OpenMovie (JS)", './images/ssj_filmes.png'))
    listLinks.push(new Url("https://getapi.netlify.app/pages/pokemon.html", "Pokemon Api", './images/poke_api.jpg'))
    listLinks.push(new Url("https://app-login-security.herokuapp.com/", "Login Spring Security", "./images/springSecurity.jpg"))
    listLinks.push(new Url("https://getapi.netlify.app/", "GET APIS","./images/getapi.jpg"))
    listLinks.push(new Url("https://getapi.netlify.app/pages/superhero.html", "S.Hero", "./images/superhero.jpg"))

    return listLinks
}

const getLinkServicos = () => {
    //links dos Serviços    
    let list = []
    
    list.push(new Url("https://github.com/", "GitHub"))
    list.push(new Url("https://www.netlify.com/", "Netlify"))
    list.push(new Url("https://www.heroku.com/", "Heroku Cloud"))
    list.push(new Url("https://www.themoviedb.org/", "TMDB Api"))
    list.push(new Url("https://superheroapi.com/", "Super Hero Api"))
    list.push(new Url("https://developer.marvel.com/", "Marvel API"))
      
    listLinksServ = list

    return listLinksServ
}
//List Links Rodapé
const getLinksContatos = () => {
    
    listLinksContatos.push({ url: "https://github.com/jaimedessilva", title: "GitHub", class: "fa fa-github"})
    listLinksContatos.push({ url: "http://api.whatsapp.com/send?1=pt_BR&phone=5561995411760", title: "Whatsapp", class: "fa fa-whatsapp"})
    listLinksContatos.push({ url: "https://www.linkedin.com/in/jaimedessilva/", title: "Linkedin", class: "fa fa-linkedin"})
    listLinksContatos.push({ url: "https://www.youtube.com/channel/UCcPgsJPn7K4LxdRnOWunfPQ", title: "Youtube", class: "fa fa-youtube"})
    listLinksContatos.push({ url: "#google", title: "Google", class: "fa fa-google"})
    listLinksContatos.push({ url: "#reddit", title: "Reddit", class: "fa fa-reddit"})
    listLinksContatos.push({ url: "#rss", title: "RSS", class: "fa fa-rss"})
    listLinksContatos.push({ url: "#android", title: "Android", class: "fa fa-android"})
    
    return listLinksContatos

}