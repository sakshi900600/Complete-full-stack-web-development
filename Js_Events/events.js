let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     alert("Hey the button is clicked")
// })

// button.addEventListener("dblclick", ()=>{
//     document.querySelector(".box").innerHTML = "<b> Hey u double clicked the button </b>"
// })

button.addEventListener("contextmenu", ()=>{
    // document.querySelector(".box").innerHTML = "<b> Hey u are using context menu </b>"
    // alert("Hey u are using context menu")
})

button.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})