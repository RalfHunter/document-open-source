import './style.css'

interface Card {
  id:number,
  icone:       string,
  cor:         string,
  titulo:      string,
  descricao:   string,
  tecnologias: string[],
  link:        string
}

const app = document.querySelector<HTMLDivElement>('#app')!

// app.innerHTML = "<h1 class='titulo'>Olá mundo criar um app</h1>"

function tecCards( cards:string[]):string{
  let html:string = ""
  for(const card of cards){
    html += `<div>${card}</div>`
  }
 return html
}

async function carregarCards() {

  const response = await fetch('http://localhost:5173/cards.json')
  const cards:Card[] = await response.json()
  console.log(cards)

  const header = document.createElement('header')
  header.innerHTML = `
  <div class='topo'>
      <div class='topo-filtro'>
        <h1>Open Source Projects</h1>
      </div>
  </div>`
  const main = document.createElement('main')

  const search = document.createElement('div')
  search.className = 'search-container'
  search.innerHTML = `
  <div class='box-input'>
    <input type='text' placeholder='Buscar projetos'>
      <button class='search-button'>
        <img src='/Frame.svg'> 
      </button>
  </div>`

  const _cards = document.createElement('div')
  _cards.className = `cards`
  cards.forEach(card => {
    const carDiv = document.createElement('div')
    carDiv.className = `card`
    carDiv.innerHTML =`
    <div class='card-topo'>
      <div class='icone ${card.icone.slice(0, -4)}' style='background-color: ${card.cor}'>
        <img src='/${card.icone}' alt=''>
      </div>
      <div class='margin'>
        <h4>${card.titulo}</h4>
        <p>${card.descricao}</p>
      </div>
      </div>
      <div class='card-base margin'>
        <div class='sub-cards'>
          ${tecCards(card.tecnologias)}
        </div>
        <div class='botao'>
          <a href='${card.link}'>Ver mais</a>
        </div>
      </div>
    </div>
    `
    _cards.appendChild(carDiv)
  })
  
  const footer = document.createElement(`footer`)

  footer.innerHTML = `
  <div class='footer'>
      <div class='texto-rodape'>
        <p>Código aberto (do inglês Open Source) é o <a href="https://pt.wikipedia.org/wiki/C%C3%B3digo-fonte">código-fonte</a> que é disponibilizado gratuitamente para consulta, examinação, modificação e redistribuição. Os produtos incluem permissão para usar o <a href="https://pt.wikipedia.org/wiki/C%C3%B3digo-fonte">código-fonte</a>, documentos de design ou conteúdo do produto.</p>
        <p>Fonte: <a href="https://pt.wikipedia.org/wiki/Código_aberto">https://pt.wikipedia.org/wiki/Código_aberto</a></p>
        <br>
        <p>Software livre é o <a href="https://pt.wikipedia.org/wiki/Software">software</a> que concede <a href="https://pt.wikipedia.org/wiki/Liberdade">liberdade</a> ao usuário para executar, acessar e modificar o <a href="https://pt.wikipedia.org/wiki/C%C3%B3digo-fonte">código-fonte</a>, e redistribuir cópias com ou sem modificações. Sua definição é estabelecida pela <a href="https://pt.wikipedia.org/wiki/Free_Software_Foundation">Free Software Foundation</a> em conjunto com o projeto <a href="https://pt.wikipedia.org/wiki/GNU">GNU</a>.</p>
        <p>Fonte: <a href="https://pt.wikipedia.org/wiki/Software_livre">https://pt.wikipedia.org/wiki/Software_livre</a></p>
      </div>
      <div class='footer-logos'>
        <div>
          <img src='/image\ 1.svg'>
        </div>
        <div>
          <img src='/Group\ 58.svg'>
        </div>
      </div>
  </div>
  `

  app.appendChild(header)
  app.appendChild(main)
  app.appendChild(footer)
  main.appendChild(search)
  main.appendChild(_cards)

  // app.innerHTML = `
  // <h1>Projetos Open Source:</h1>
  // <div id='cards' class='cards'></div>`

  // const cardsContainer = document.querySelector<HTMLDivElement>("#cards")!
  // cardsContainer.innerHTML = `<div>Card 1</div><div>Card 2</div>`

  // cards.forEach(card => {
  //   const carDiv = document.createElement('div')
  //   carDiv.innerHTML = `
  //     <div>${card.titulo}</div>
  //     <div>${card.descricao}</div>
  //   `
  //   cardsContainer.appendChild(carDiv)
  // })

}

carregarCards()