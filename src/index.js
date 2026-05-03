import "./styles.css";
// import content from "./initialPageLoad.js"
import { homeParent } from "./home.js"
import { menuParent } from "./menu.js"
import { contactParent } from "./contact.js"

const nav = document.querySelector("nav")
const tabContainer = document.querySelector(".tabContainer")
tabContainer.appendChild(homeParent)
tabContainer.appendChild(menuParent)
tabContainer.appendChild(contactParent)

nav.addEventListener("click", (event) => {
    workTabs(event)
})

function workTabs(event) {
    console.log(event.target.textContent)
    // need to put this into :active CSS or something
    // event.target.style.backgroundColor = "#DE638A"
    // event.target.style.color = "white"

    const tabs = document.getElementsByClassName("tab")
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"
    } 
    document.getElementById(`${event.target.textContent}`.toLowerCase()).style.display = "block"
}