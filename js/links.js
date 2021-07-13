/**
 * Projeto Portifolio
 * Author: Jaime Dev
 * Repo: https://github.com/jaimedessilva
 */

const getLinkServicos = () => {
    //links dos Serviços    
    let list = []
    
    list.push(new Url("https://github.com/", "GitHub","../icons/github-brands.svg"))
    list.push(new Url("https://www.netlify.com/", "Netlify", "../icons/netlify-icon.svg"))
    list.push(new Url("https://www.heroku.com/", "Heroku Cloud", "../icons/heroku-icon.svg"))
    list.push(new Url("https://www.themoviedb.org/", "TMDB Api","../icons/server-solid.svg"))
    list.push(new Url("https://superheroapi.com/", "Super Hero Api", "../icons/server-solid.svg"))
    list.push(new Url("https://developer.marvel.com/", "Marvel API","../icons/laptop-solid.svg"))
    
    return list
}
//List Links Rodapé
const getLinksContatos = () => {
    
    let listLinksContatos = []
    
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