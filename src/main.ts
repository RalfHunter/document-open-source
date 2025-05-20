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

  app.appendChild(header)
  app.appendChild(main)
  main.appendChild(search)

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