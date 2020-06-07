// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

let headerContainer = document.querySelector(".header-container")

function Header() {
    const div = document.createElement("div")
    div.className = "header"

    const span1 = document.createElement("span")
    span1.className = "date"
    span1.textContent = "MARCH 28, 2019"

    const h1 = document.createElement("h1")
    h1.textContent = "Lambda Times"

    const span2 = document.createElement("span")
    span2.className = "temp"
    span2.textContent = "98°"

    headerContainer.appendChild(div)
    div.appendChild(span1)
    div.appendChild(h1)
    div.appendChild(span2)

return div;
}

Header();
console.log(headerContainer)


//cannot figure out how to make this code work, but keeping here for reference:

//     const headerContainer = document.querySelector(".header-container");
//     const div = document.createElement("div");  
//     const spanDate = document.createElement("span");
//     const h1 = document.createElement("h1");
//     const spanTemp = document.createElement("temp");

    
//     spanDate.textContent = "SMARCH 28, 2019"
//     h1.textContent = "Lambda Times";
//     spanTemp.textContent = "98°"

//     headerContainer.appendChild(headerDiv);
//     headerContainer.appendChild(spanDate);
//     header.appendChild(h1);
//     header.appendChild(spanTemp);

// return headerDiv;
// }

// console.log(Header());

//console.log(header)

// function addToDOM(){
//     const body = document.querySelector('body')

//     const header = Header();

//     body.appendChild(header);
// }

// addToDOM();
