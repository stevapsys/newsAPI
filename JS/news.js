//selecionando a div ROW
let containerDeNoticias = document.querySelector('#listaDeNoticias')


//async avisa que é uma função assíncrona - SEM O ASYNC NÃO PODE USAR O AWAIT

async function pegarNoticias() {
    //fetch é o AJAX, serve para pegar os dados da API
 /* let noticias = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=b9c05a0178324683919b680134f0fb45')  
    .then((resposta)=> {
       return resposta.json()
    })
    .then((dadosEmJson)=> {
        dadosEmJson.articles.forEach((noticia, index) => {
            console.log("---------------------------")
            console.log("Título: " + noticia.title)
            console.log("Descrição: " + noticia.description)
            console.log("Link da imagem: " + noticia.urlToImage)


        });

      
    })  */

    //await espera a promessa terminar
    let noticias = await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=b9c05a0178324683919b680134f0fb45')
    
    
    let listaDeNoticias = await noticias.json()

    listaDeNoticias.articles.forEach((noticia, index) => {

        //criando a coluna 
        let coluna = document.createElement('div')
        coluna.setAttribute('class', 'col-3')

        //criando o card 
        let card = document.createElement('div')
        card.setAttribute('class', 'card')

        //criando a imagem do card 
        let imgCard = document.createElement('img')
        imgCard.setAttribute('class', 'card-img-top')
        imgCard.setAttribute('src', noticia.urlToImage)

        //criando a div bodyCard 
        let bodyCard = document.createElement('div')
        bodyCard.setAttribute('class', 'card-body')

        //criando elementos do card  - H5, P, link 
        let titleCard = document.createElement('h5')
        titleCard.setAttribute('class', 'card-title')
        titleCard.textContent = noticia.title  

        let pCard = document.createElement('p')
        pCard.setAttribute('class', 'card-text')
        pCard.textContent = noticia.description
        
        let linkDaImagem = document.createElement('a')
        linkDaImagem.setAttribute('class', 'btn btn-secondary')
        linkDaImagem.setAttribute('href', noticia.url)
        linkDaImagem.textContent = "Ir para noticia"
        
        //console.log("---------------------------")
        //console.log("Título: " + noticia.title)
        //console.log("Descrição: " + noticia.description)
        //console.log("Link da imagem: " + noticia.urlToImage)

        //organizando a ordem dos elementos  - seguindo a sequencia do index.html
        card.appendChild(imgCard)
        card.appendChild(bodyCard)
        card.appendChild(titleCard)
        card.appendChild(pCard)
        card.appendChild(linkDaImagem)

        coluna.appendChild(card)

        containerDeNoticias.appendChild(coluna)

    });

    console.log(listaDeNoticias)
}

