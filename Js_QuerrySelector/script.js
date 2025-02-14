// console.log("Hello heooo")

// let b = document.getElementsByClassName("box");
// console.log(b)

// when we add more elem then style will apply on the new elem on 2 index
// b[2].style.backgroundColor = "purple";


// to select elem by id
// document.getElementById("yellowBox").style.backgroundColor = "purple";

// querry selector- select the first elem with .-- class name
// document.querySelector(".box").style.backgroundColor = "purple"

// querry selector all - select all elem with .box class name
// this will not work
// document.querySelectorAll(".box").style.backgroundColor = "purple"

// we have to select each elem and then style them. coz it return an array

// console.log(document.querySelectorAll(".box")) //return all nodes

// document.querySelectorAll(".box").forEach((e)=>{  //can use normal for loop instead
//     // console.log(e);
//     e.style.backgroundColor = "yellow";
// })


// select all div including container
// console.log(document.getElementsByTagName("div"));


// let e = document.getElementsByTagName("div");
// console.log(e[3].matches("#yellowBox")); //false //check elem mathes with given selector

// console.log(e[3].closest("#yellowBox"))
// console.log(e[3].closest(".container"))
// console.log(e[3].closest("html"))


// let cont = document.querySelector(".container").contains (e[8])
// console.log(cont)
