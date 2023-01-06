/*var d1=new Date()
console.log(d1)

var d2=new Date("2022-12-31")
console.log(d2.getMonth()+1)
*/

var d1=new Date()
var d2=new Date(1998,1,9)
let diff=d1-d2
let raw=(diff)/1000/60/60/24/365
let years=Math.round(raw)
let months=Math.round((raw-years)*12)
console.log("Your Age is:-",years," years ",months, " months")



