let pattern=/ab/
var arr=['vowels','wswgswgab','abcdee','hjyj']

arr.filter((element)=>{ element.match(pattern)}).forEach((element)=>{console.log(element)})
