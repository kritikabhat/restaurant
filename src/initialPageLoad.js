const h1 = document.createElement("h1")
h1.textContent = `Welcome to El Paso Mexican restaurant`

const p1 = document.createElement("p")
p1.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean et justo laoreet, consectetur nulla commodo, mollis 
            nulla. Ut non purus quis elit aliquam mollis. Quisque odio 
            nisl, cursus non ornare nec, dapibus eget nunc. Sed at metus
             in quam facilisis ornare sit amet sit amet leo. Duis sed 
             suscipit metus. Vivamus vestibulum, tellus non tristique 
             malesuada, ligula nisi cursus tortor, in aliquet nisl libero 
             id mauris. Ut ac neque justo. Praesent et ultrices eros, nec 
             fringilla dui. Sed purus odio, convallis ac aliquet consequat,
              scelerisque a ex. Donec ultrices blandit magna, eget vulputate
               magna sodales quis.`

const p2 = document.createElement("p")
p2.textContent = `Dapibus eget nunc. Sed at metus
             in quam facilisis ornare sit amet sit amet leo. Duis sed 
             suscipit metus. Vivamus vestibulum, tellus non tristique 
             malesuada, ligula nisi cursus tortor, in aliquet nisl libero 
             id mauris. Ut ac neque justo. Praesent et ultrices eros, nec 
             fringilla dui. Sed purus odio, convallis ac aliquet consequat,
              scelerisque a ex. Donec ultrices blandit magna, eget vulputate
               magna sodales quis.`

const content = document.querySelector("#content")
content.appendChild(h1)
content.appendChild(p1)
content.appendChild(p2)

export default content