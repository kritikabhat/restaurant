import "./styles.css";
import content from "./initialPageLoad.js"

const nav = document.querySelector("nav")

nav.addEventListener("click", (e) => {
    if (e.target.textContent === "Home") {
        console.log("Home")

    }
    if (e.target.textContent === "Menu") {
        console.log("Menu")
        
    }
    if (e.target.textContent === "About") {
        console.log("About")
        
    }
})
