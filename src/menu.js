const menuParent = document.createElement("div")
menuParent.className = "tab"
menuParent.id = "menu"

const menuHeading = document.createElement("h1")
menuHeading.textContent = "🍜🍦🍇 Menu 🍇🍦🍜"

const menuDiv1 = document.createElement("div")
menuDiv1.className = "centerDiv"
const menuPara1 = document.createElement("p")
menuPara1.textContent = `Cras rhoncus, nisi eu porta congue, risus metus 
        finibus risus, a laoreet ex urna id lectus. Aliquam vitae ultricies
         sapien. Morbi pulvinar porta volutpat. Aenean ultrices sit amet 
         leo sit amet porta. Fusce id diam varius, venenatis risus a, 
         consectetur erat. Mauris ultrices sapien felis, sit amet facilisis
          leo rutrum vel. Etiam nec luctus justo, et varius lorem.`

const menuDiv2 = document.createElement("div")
menuDiv2.className = "bottomDiv"
const menuPara2 = document.createElement("p")
menuPara2.textContent = `Vestibulum ante ipsum primis in faucibus orci 
        luctus et ultrices posuere cubilia curae; Mauris efficitur orci 
        condimentum, congue lacus id, pharetra magna. Curabitur at nisi 
        placerat, porttitor sapien consequat, fermentum sapien. Integer 
        quis sollicitudin elit. Suspendisse fermentum efficitur lacus vitae
         aliquet.`

menuDiv1.appendChild(menuPara1)
menuDiv2.appendChild(menuPara2)

menuParent.appendChild(menuHeading)
menuParent.appendChild(menuDiv1)
menuParent.appendChild(menuDiv2)
menuParent.style.display = "none"

export { menuParent }