// add button in stating of the 
const btn = document.createElement("button")
btn.innerText = "click me"
btn.style.backgroundColor = "red"
btn.style.color = "white"

document.getElementById("box").before(btn)

// create p tag and append  add new class
const p = document.createElement("p")
p.innerText = "hello wold how are you"
p.style.color = "white"

document.getElementById("box").append(p)

p.classList.add("newclass")
p.classList.remove("newclass")