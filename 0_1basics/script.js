// console.log("JavaScript");
function name(userName) {
    return `${userName} just logged in`
}
// console.log(name("hashim"))
function name(userName) {
    if(userName===undefined){
        // console.log("Pleass enter a userName")
        return
    }
    return `${userName} just logged in`
}
// console.log(name())

// rest operator
function calcutateCartPrice(...num1) {
    return num1  
}
// console.log(calcutateCartPrice(255,566, 800,3456,))
function calcutateCartPrice(val1, val2,...num1) {
    return num1  
}
// console.log(calcutateCartPrice(255,566, 800,3456,))

student = {
    name: "Ayyan",
    email: "122@gmail.com",
}
function studentDetail(anyStudent){
//  console.log(`student Name: ${anyStudent.name} Email: ${anyStudent.email} `)
}
studentDetail(student)

