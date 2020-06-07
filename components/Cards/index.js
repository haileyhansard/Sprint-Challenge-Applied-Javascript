// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


//this is my attempt to make an article card for the Bootsrap category
const newCardBootstrap = (article)=>{
const newCard = document.createElement("div")
const headline = document.createElement("div")
const authorDiv = document.createElement("div")
const imgDiv = document.createElement("div")
const img = document.createElement("img")
const authorName = document.createElement("span")

headline.textContent = response.data.articles.bootstrap
img.src = article

newCard.classList.add("card")
headline.classList.add("headline")
authorDiv.classList.add("author")
imgDiv.classList.add("img-container")

newCard.appendChild(headline)
newCard.appendChild(authorDiv)
authorDiv.appendChild(imgDiv)
authorDiv.appendChild(authorName)
imgDiv.appendChild(img)


return newCard
}

console.log(newCardBootstrap);




const entryPoint = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
   

.then(response => {
    console.log('response for articles', response.data.articles.bootstrap)

    response.data.articles.bootstrap.forEach(article => {
        const newCardBootsrap = card(article)
        entryPoint.appendChild(newCardBootstrap)
    })

// function cardMaker(url){
//     // const newCard = document.createElement("div")
//     // const headline = document.createElement("div2")
//     // const authorDiv = document.createElement("div3")
//     // const imgDiv = document.createElement("div4")
//     // const img = document.createElement("img")
//     // const authorName = document.createElement("span")

//     response.data.articles.bootstrap.forEach(item => {
//         const newCard = document.createElement("div")
//         const headline = document.createElement("div2")
//         const authorDiv = document.createElement("div3")
//         const imgDiv = document.createElement("div4")
//         const img = document.createElement("img")
//         const authorName = document.createElement("span")
//         headline.textContent = (item);

//     })

// }    
})

.catch(error => {
console.log("There is something wrong with the articles")
})

//cardMaker(url);