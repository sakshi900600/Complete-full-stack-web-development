document.querySelector(".box")
document.querySelector(".box").innerHTML
document.querySelector(".container").innerHTML
document.querySelector(".box").outerHTML
document.querySelector(".container").outerHTML

document.querySelector(".box").tagName - 'DIV'
document.querySelector(".box").nodeName -  'DIV'
document.querySelector(".box").textContent -  'This is a box'
document.querySelector(".box").hidden - false
document.querySelector(".box").hidden = true

document.querySelector(".box").hasAttribute("style") - true
document.querySelector(".box").getAttribute("style")  - 'background-color: purple;'
document.querySelector(".box").setAttribute("style", "background-color: pink")
document.querySelector(".box").attributes
document.querySelector(".box").removeAttribute("style")


// data attribute
document.querySelector(".box").dataset


// className and classList
document.querySelector(".container").classList
document.querySelector(".container").className
document.querySelector(".container").classList.remove("red")
document.querySelector(".container").classList.add("red")
document.querySelector(".container").classList.add("red")
// toggle means - if color:red then change black otherwise red
document.querySelector(".container").classList.toggle("red")
document.querySelector(".container").classList.toggle("red")
