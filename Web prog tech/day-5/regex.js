let pattern = /\+[0-9]+[0-9]{10}$/
var phoneNo=['+15056463910','+13262901523','+8803724752250','+917869131856','+918939292382','6172367362388','728728','+2782992']

phoneNo.filter((element)=>{return element.match(pattern)}).forEach((element)=>{console.log(element)})
