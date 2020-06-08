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
        newBootstrap.appendChild(authorDiv);
        
        const imgDiv = document.createElement("div")
        imgDiv.className = "img-container";
        authorDiv.appendChild(imgDiv);

        const img = document.createElement("img")
        img.src = url.authorPhoto;
        imgDiv.appendChild(img);
    
        const authorName = document.createElement("span")
        authorDiv.appendChild(authorName)
        authorName.textContent = url.authorName;
        headline.textContent = url.headline;
    })

    response.data.articles.javascript.forEach(url => {
        const newCardContainer = document.querySelector(".cards-container")
        console.log(newCardContainer)
    
        const newJavascript = document.createElement("div")
        newJavascript.className = "card";
        newCardContainer.appendChild(newJavascript);

        const headline = document.createElement("div")
        headline.className = "headline";
        headline.textContent = (url);
        newJavascript.appendChild(headline);

        const authorDiv = document.createElement("div")
        authorDiv.className = "author";
        newJavascript.appendChild(authorDiv);
        
        const imgDiv = document.createElement("div")
        imgDiv.className = "img-container";
        authorDiv.appendChild(imgDiv);

        const img = document.createElement("img")
        img.src = url.authorPhoto;
        imgDiv.appendChild(img);
    
        const authorName = document.createElement("span")
        authorDiv.appendChild(authorName)
        authorName.textContent = url.authorName;
        
        headline.textContent = url.headline;
    })

    response.data.articles.jquery.forEach(url => {
        const newCardContainer = document.querySelector(".cards-container")
        console.log(newCardContainer)
    
        const newJquery = document.createElement("div")
        newJquery.className = "card";
        newCardContainer.appendChild(newJquery);

        const headline = document.createElement("div")
        headline.className = "headline";
        headline.textContent = (url);
        newJquery.appendChild(headline);

        const authorDiv = document.createElement("div")
        authorDiv.className = "author";
        newJquery.appendChild(authorDiv);
        
        const imgDiv = document.createElement("div")
        imgDiv.className = "img-container";
        authorDiv.appendChild(imgDiv);

        const img = document.createElement("img")
        img.src = url.authorPhoto;
        imgDiv.appendChild(img);
    
        const authorName = document.createElement("span")
        authorDiv.appendChild(authorName)
        authorName.textContent = url.authorName;
        headline.textContent = url.headline;
    })

    response.data.articles.node.forEach(url => {
        const newCardContainer = document.querySelector(".cards-container")
        console.log(newCardContainer)
    
        const newNode = document.createElement("div")
        newNode.className = "card";
        newCardContainer.appendChild(newNode);

        const headline = document.createElement("div")
        headline.className = "headline";
        headline.textContent = (url);
        newNode.appendChild(headline);

        const authorDiv = document.createElement("div")
        authorDiv.className = "author";
        newNode.appendChild(authorDiv);
        
        const imgDiv = document.createElement("div")
        imgDiv.className = "img-container";
        authorDiv.appendChild(imgDiv);

        const img = document.createElement("img")
        img.src = url.authorPhoto;
        imgDiv.appendChild(img);
    
        const authorName = document.createElement("span")
        authorDiv.appendChild(authorName)
        authorName.textContent = url.authorName;
        headline.textContent = url.headline;
    })

response.data.articles.technology.forEach(url => {
        const newCardContainer = document.querySelector(".cards-container")
        console.log(newCardContainer)
    
        const newTechnology = document.createElement("div")
        newTechnology.className = "card";
        newCardContainer.appendChild(newTechnology);

        const headline = document.createElement("div")
        headline.className = "headline";
        headline.textContent = (url);
        newTechnology.appendChild(headline);

        const authorDiv = document.createElement("div")
        authorDiv.className = "author";
        newTechnology.appendChild(authorDiv);
        
        const imgDiv = document.createElement("div")
        imgDiv.className = "img-container";
        authorDiv.appendChild(imgDiv);

        const img = document.createElement("img")
        img.src = url.authorPhoto;
        imgDiv.appendChild(img);
    
        const authorName = document.createElement("span")
        authorDiv.appendChild(authorName)
        authorName.textContent = url.authorName;
        headline.textContent = url.headline;
    })
})

.catch(error => {
    console.log("Something is wrong with the article cards", error)
})


// function cardMaker(url){
//     })
