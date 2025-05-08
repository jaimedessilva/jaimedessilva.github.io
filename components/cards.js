const api = '../cards.json'

carregarCards();

function carregarCards(){
    fetch(api)
    .then(response => {
        if (!response.ok) throw new Error("Erro ao buscar dados.");
        return response.json()
    })
    .then(
        data => {
            renderCards(data)
    }).catch( error => console.error(error))
}


function renderCards(data) {
    const container = document.getElementById("container-cards");
    container.innerHTML = ''  
    
    data.map(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.thumb}" alt="Imagem do Card">
        <b>${item.title}</b>
        <p>${item.description}</p>
        <a href="${item.url}"><button>Acessar</button></a><p></p>
      ${item.icon.map(ico => `<img src="${ico.url}" style="width: 25px">`)}
      `;
      container.appendChild(card);
    });
}