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

function Header() {
    const header = document.createElement("header-container");
    const spanDate = document.createElement("date");
    const h1 = document.createElement("h1");
    const spanTemp = document.createElement("temp");

    
    spanDate.textContent = "MARCH 28, 2019"
    h1.textContent = "Lambda Times";
    spanTemp.textContent = "98°"

    header.appendChild(spanDate);
    header.appendChild(h1);
    header.appendChild(spanTemp);

return header;
}
//console.log(header)

function addToDOM(){
    const body = document.querySelector('body')

    const header = Header();

    body.appendChild(header);
}

addToDOM();
