// words and key words

//
// var,let and consts = variable value we can change any time but constant value we can not change

// hoisting = variable and functions are hoisted which means there declaration is move on the top of code

//types in js
// primitive and reference
// primitive = number,string,null,undefined,boolean
// reference = [] () {}
// aisi koi bhi value jisko copy karne par rel copy nhi hota ,balki us main value ka reference pass hojaata hai,use ham referance value kahate 
// or jiska copy karne par real copy ho jaye use value primitive value kahte hai

// conditionals - if else else-if

// loops - for and while

// functions  = function ko ham tin tarikese use kar sakte hai
// 1) jab apka code app turant nahi chalana chahte future mai chalana chate ho
// 2) jab apka code app reuse karna chahte ho
// 3) jab app code chalana chahte ho har baar with different data
function p(a,b,d){         // a b d are parameters
    console.log(a,b,d)
}

p(12,14,15)   // 12 14 15 are arguments


// arrays = aek se jyada value store karne ke liye array use hota hai= group of values
var a = [12,"prit",p(13,14,15)]

// push pop shift unshift
var arr = [1,2,3,4,4,5]
console.log(arr.push(12)) // push given value
console.log(arr.pop())    // pop last value 
console.log(arr.unshift(1)) // add first position
console.log(arr)   
console.log(arr.shift())   // remove first position element
console.log(arr.splice(2,2))     // remove 2 position 2 elsement

// objects 

// forEach

var a = [1,2,3,4,5,6,7]

a.forEach(function(v){
    console.log(v+2)
})

// forin loop

var obj = {
"name":"prit",
"rollno":40,
"home":"amadhara"
}

for(var key in obj){
    console.log(key,obj[key])
}