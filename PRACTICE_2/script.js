const cng_mode = document.querySelector("#btn")
const body = document.querySelector("body")


var current_state = "light"

// 1) way

// cng_mode.addEventListener("click",()=>{
//      if(current_state === "light"){
//         current_state = "dark"
//         document.querySelector("#btn").innerHTML = "light"
//         document.querySelector("body").style.backgroundColor = "black"
//      }
//      else{
//         current_state = "light"
//         document.querySelector("#btn").innerHTML = "dark"
//         document.querySelector("body").style.backgroundColor = "white"
//      }
//      console.log(current_state)
     
// })

// 2) way

cng_mode.addEventListener("click",()=>{
    if(current_state === "light"){
        current_state = "dark"
        document.querySelector("#btn").innerHTML = "light"
        body.classList.add("bg1")
        body.classList.remove("bg2")
    }
    else{
        current_state = "light"
        document.querySelector("#btn").innerHTML = "dark"
        body.classList.add("bg2")
        body.classList.remove("bg1")
    }

})