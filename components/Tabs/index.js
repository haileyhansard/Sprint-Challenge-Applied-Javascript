// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>



//send get request to address given above
axios.get("https://lambda-times-backend.herokuapp.com/topics")

//iterate over topics creating a new tab for each topic, and appending it to the DOM, under the div.topics element

.then(response => {
    console.log('response array', response)
    
    response.data.topics.forEach(url => {
        const newTopicTab = document.createElement("div")
        newTopicTab.className = "tab"

        const newTab = document.querySelector(".tabs .topics")

        newTab.appendChild(newTopicTab)

        newTopicTab.textContent = (url)

        return newTab
    })
})

.catch(err => {
    console.log('something is wrong')
})






