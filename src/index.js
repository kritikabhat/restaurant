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
    if(!event.target.matches("button")) return
    workTabs(event)
})

function workTabs(event) {
    console.log(event.target.textContent)

    const tabs = document.getElementsByClassName("tab")
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"
    } 
    const buttons = document.getElementsByTagName("button")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#f3d9e5"
        buttons[i].style.color = "black"
    }
    event.target.style.backgroundColor = "#DE638A"
    event.target.style.color = "white"
    document.getElementById(`${event.target.textContent}`.toLowerCase()).style.display = "flex"
}