// const head= document.querySelector("#header")
// console.log(head)
// head.innerHTML = head.innerHTML + " <i> my name is prit rajput </i>"

const texts = {
    "first":"<i>my name is prit</i>",
    "second":"i am from chikhli",
    "third":"my home town was amathara"
}
console.log(texts.first)
// const boxs = document.querySelectorAll(".box")
const h1 = document.querySelector("h1")
const div  = document.querySelector("div")
// div.style.backgroundColor = "yellow"
// div.style.color = "purple"
// div.innerHTML = "my anme is prit"
// div.style.fontSize = "40px"
// boxs[0].innerHTML = texts.first
// boxs[1].innerHTML = texts.second
// boxs[2].innerHTML = texts.third


// create button
const btn = document.createElement("button")
btn.innerText = "click me!"
btn.style.backgroundColor = "orange"

// add heading 
const heading = document.createElement("h1")
heading.innerHTML = "<i>@ hello guys kaise @  ho !!</i>"

div.after(btn)
h1.prepend(heading)

h1.remove(heading)

// add child of list
const li = document.createElement("li")
const addlist = document.createTextNode("blackbery")
li.appendChild(addlist)
document.getElementById("mylist").appendChild(li)

//js event handaler
const btn1 = document.querySelector("#btn1");


// btn1.onclick = () =>{
//     console.log("btn1 was clicked")
// }

const btn2 = document.querySelector("#btn2");
// btn2.ondblclick = () =>{
//     console.log("btn2 was clicked")
// }

// event object

// btn1.onclick = (e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX,e.clientY)

// }

// event listener
btn1.addEventListener("click",()=>{
    console.log("event 1 was run")
})

btn1.addEventListener("click",()=>{
    console.log("event 2 was run")
})

const rm = ()=>{
    console.log("event 3 was run")
}

btn1.removeEventListener("click",rm)

