console.log("Js for exercise 12")

// notes-------------
// 1. if u want do generate random numbers b/n (a&b) 
// formula = a + r(b-a) ,r = random num
// rgb lies b/n 0-255 so a=0 & b=255
// 0 + Math.random()*255  
// it will return value like this 13.274535560190252
// to convert it into integer -
// Math.ceil( 0 + Math.random()*255 )


// notes-------------

let boxes = document.querySelector(".container").children

function getRandomColor(){
    let val1 = Math.ceil( 0 + Math.random()*255 );
    let val2 = Math.ceil( 0 + Math.random()*255 );
    let val3 = Math.ceil( 0 + Math.random()*255 );
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})





















// let clr = prompt("Enter a color");
// let bgclr = prompt("Enter a background color");

// document.body.style.backgroundColor = "gray"

// let elem1 = document.body.children[0].firstElementChild;
// elem1.style.backgroundColor = bgclr;
// elem1.style.color = clr;

// let elem2 = document.body.children[0].children[1];
// elem2.style.backgroundColor = bgclr;
// elem2.style.color = clr;

// let elem3 = document.body.children[0].children[2];
// elem3.style.backgroundColor = "purple"

// let elem4 = document.body.children[0].children[3];
// elem4.style.backgroundColor = "green"

// let elem5 = document.body.children[0].children[4];
// elem5.style.backgroundColor = "pink"

