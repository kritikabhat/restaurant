const homeParent = document.createElement("div")
homeParent.className = "tab"
homeParent.id = "home"

const homeHeading = document.createElement("h1")
homeHeading.textContent = "Welcome to my restaurant! 🌻"

const homeDiv1 = document.createElement("div")
homeDiv1.className = "centerDiv"
const homePara1 = document.createElement("p")
homePara1.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean et justo laoreet, consectetur nulla commodo, mollis 
            nulla. Ut non purus quis elit aliquam mollis. Quisque odio 
            nisl, cursus non ornare nec, dapibus eget nunc. Sed at metus
             in quam facilisis ornare sit amet sit amet leo.`

const homeDiv2 = document.createElement("div")
homeDiv2.className = "bottomDiv"
const homePara2 = document.createElement("p")
homePara2.textContent = `Hours<br>
        Sunday: 8am - 8pm<br>
        Monday: 6am - 6pm<br>
        Tuesday: 6am - 6pm<br>
        Wednesday: 6am - 6pm<br>
        Thursday: 6am - 10pm<br>
        Friday: 6am - 10pm<br>
        Saturday: 8am - 10pm`

homeDiv1.appendChild(homePara1)
homeDiv2.appendChild(homePara2)

homeParent.appendChild(homeHeading)
homeParent.appendChild(homeDiv1)
homeParent.appendChild(homeDiv2)

export { homeParent }

// h1, div1 and div2 will be appended to tabContainer div when Home is clicked
// each tab will have a centerDiv and bottomDiv