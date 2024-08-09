// arrorw function
 const addition =  (a,b) =>{
    c = a + b;
    return c;
 }

 const add = addition(1,2)
 console.log(add)



 const returnVowel = (arg) =>{
    let count = 0;
   for(const car of arg){
    if(car === "A" ||car === "E" ||car === "I" ||car === "O" ||car === "U" ||car === "a" ||car === "e" ||car === "i" ||car === "o" ||car === "u"  ){
       count++;
    }
   
   }
return count;
 }

 let ans = returnVowel("i love my india")
 console.log(ans)


 // give an array of number ,print the squire of each value using the forEach loop

 const arr = [1,2,3,4,5,5]

 arr.forEach((val,inx,arr)=>{
    console.log(val ** 2, inx ,arr)
 })
 
 //map  = it gives the new array

 const ans_map = arr.map((val)=>{
    return val * 2;
 })
 console.log(ans_map)

 //filter = use to filter the elements
 const arr_filter = arr.filter((val)=>{
    return val > 1;
 })
 console.log(arr_filter)


 //reduce = it give two parameters pre=1 cur=2
 const arr_reduce = arr.reduce((pre,cur)=>{
    return pre + cur;
 }) 
 console.log(arr_reduce)

 const arr_reduce_1 = arr.reduce((pre,cur)=>{
    return pre > cur ? pre : cur ;
 })
 console.log(arr_reduce_1)

 // practice 

 // Q-1 we are given array of mark of student .filter out the mark of student thst scored 90+
 const arr_1 = [55,90,45,97,99,14,55,77]
const arr_filter_student_mark = arr_1.filter((val)=>{
    return val > 90;
})

console.log(arr_filter_student_mark)

// Q-2 take a number n as input from user .Create an array of number from 1 to n.
    //    use the reduce method to calculate sum of all number in Array.
    //    use thr reduce method to calculate product of all numbers in arrray

const number = prompt("enter the number : ")
 const arr_2 = []

 for(let i = 1;i<=number;i++){
    arr_2[i-1]= i;
 }

 console.log(arr_2)

 const arr_reduce_2 = arr_2.reduce((pre,cur)=>{
    return pre + cur ;
 })

 console.log(arr_reduce_2)

 const arr_reduce_3 = arr_2.reduce((pre,cur)=>{
    return pre * cur;
 })

 console.log(arr_reduce_3)

