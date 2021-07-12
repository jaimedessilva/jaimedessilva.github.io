/** Projeto Portifolio Classe Modelo Url */
class Url {
    constructor(url, title, thumb, description) {
        this.url = url
        this.title = title
        this.thumb = thumb
        this.description = description
        this.link = `<a href="${url}">${title}</a>`
        //Image Default
        if(this.thumb === undefined){
            this.thumb = './images/default1.png'
        }
        this.img = `<img src="${this.thumb}" class="img-size">`
        let obj = {
            url: this.url,
            title: this.title,
            thumb: this.thumb,
            description: this.description,
            link: this.link
        }
    }
    getThis() {
        console.log(this)
    }
}