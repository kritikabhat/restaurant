const contactParent = document.createElement("div")
contactParent.className = "tab"
contactParent.id = "contact"

const contactHeading = document.createElement("h1")
contactHeading.textContent = "Contact us! 🌸"

const contactDiv1 = document.createElement("div")
contactDiv1.className = "centerDiv"
const contactPara1 = document.createElement("p")
contactPara1.textContent = `Peter Potter<br>
                            Owner,
                            123-456-7890
                            some-email@email.com`

const contactDiv2 = document.createElement("div")
contactDiv2.className = "bottomDiv"
const contactPara2 = document.createElement("p")
contactPara2.textContent = `Duis sed 
             suscipit metus. Vivamus vestibulum, tellus non tristique 
             malesuada, ligula nisi cursus tortor, in aliquet nisl libero 
             id mauris. Ut ac neque justo. Praesent et ultrices eros, nec 
             fringilla dui.`

contactDiv1.appendChild(contactPara1)
contactDiv2.appendChild(contactPara2)

contactParent.appendChild(contactHeading)
contactParent.appendChild(contactDiv1)
contactParent.appendChild(contactDiv2)
contactParent.style.display = "none"

export { contactParent }