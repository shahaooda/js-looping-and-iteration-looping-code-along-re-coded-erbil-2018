
/ Code your solutions in this file
let emp = ['Lisa', 'Kaitlin', 'Jan']
function printBadges(emp) {
 for (let i=0; i<emp.length; i++){
   console.log (`Welcome ${emp[i]}! You are employee #${i+1}.`)
 }
 return emp
}

function flip() {
 let flips = ''
 if (Math.random() >= 0.5){
   flips = 'Tails'
 }else{
   flips = 'Heads'
 }
return flips
 }

 function tailsNeverFails() {
let counter = 0
   while (flip() ==='Tails'){
     counter++}
       return (`You got ${counter} tails in a row!`)
}