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

//const entryPoint = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
   

.then(response => {
    console.log('response for articles', response)

    response.data.articles.bootstrap.forEach(url => {
        const newCardContainer = document.querySelector(".cards-container")
        console.log(newCardContainer)
    
        const newBootstrap = document.createElement("div")
        newBootstrap.className = "card";
        newCardContainer.appendChild(newBootstrap);

        const headline = document.createElement("div")
        headline.className = "headline";
        headline.textContent = (url);
        newBootstrap.appendChild(headline);

        const authorDiv = document.createElement("div")
        authorDiv.className = "author";
        newCardContainer.appendChild(authorDiv);
        
        const imgDiv = document.createElement("div")
        imgDiv.className = "img-container";
        authorDiv.appendChild(imgDiv);

        const img = document.createElement("img")
        img.src = "";
        imgDiv.appendChild(img);
    
        const authorName = document.createElement("span")
        authorDiv.appendChild(authorName)
        authorName.textContent = url.authorName;
        img.src = url.authorPhoto;
        headline.textContent = url.headline;
   
    })
})

.catch(error => {
    console.log("Something is wrong with the article cards", error)
})


// function cardMaker(url){
//     })
