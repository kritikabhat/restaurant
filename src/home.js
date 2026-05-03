const homeParent = document.createElement("div")
homeParent.className = "tab"
homeParent.id = "home"
homeParent.style.display = "flex"

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
homePara2.textContent = `Morbi placerat erat non elit finibus, id eleifend
                 ipsum sodales. Duis vitae ipsum est. Cras mollis, nulla 
                 quis suscipit tincidunt, mauris nisi gravida sem, vitae 
                 varius ipsum erat vel nulla. Quisque auctor dapibus sem 
                 eget vulputate. Sed vel ipsum eget elit scelerisque 
                 accumsan. Integer vitae mollis nisi. Mauris ligula tortor, 
                 posuere a feugiat sed, dignissim vitae dui.`

homeDiv1.appendChild(homePara1)
homeDiv2.appendChild(homePara2)

homeParent.appendChild(homeHeading)
homeParent.appendChild(homeDiv1)
homeParent.appendChild(homeDiv2)

export { homeParent }
