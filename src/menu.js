const menuParent = document.createElement("div")
menuParent.className = "tab"
menuParent.id = "menu"

const menuHeading = document.createElement("h1")
menuHeading.textContent = "🍜🍦🍇 Menu 🍇🍦🍜"

const menuDiv1 = document.createElement("div")
menuDiv1.className = "centerDiv"
const menuPara1 = document.createElement("p")
menuPara1.textContent = `Drinks<br>
            Green Tea<br>
            Black Coffee
            Matcha Latte
            Lemonade
            Darjaleeng Tea
            Long Island Iced Tea`

const menuDiv2 = document.createElement("div")
menuDiv2.className = "bottomDiv"
const menuPara2 = document.createElement("p")
menuPara2.textContent = `Main Dishes<br>
            Pancakes
            Waffles
            Paneer sandwich
            Chicken fingers
            Fried Chicken (🔥)
            Thai inspired Salad (🍀)
            `

menuDiv1.appendChild(menuPara1)
menuDiv2.appendChild(menuPara2)

menuParent.appendChild(menuHeading)
menuParent.appendChild(menuDiv1)
menuParent.appendChild(menuDiv2)
menuParent.style.display = "none"

export { menuParent }