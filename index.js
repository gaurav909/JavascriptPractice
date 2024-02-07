//logical and or operator

// function getName(){
//     return 'Gaurav Singh'
// }

// let a=false;
// let b=true;

// console.log(a||getName())

//Template Literals
// let firstName='Gaurav'
// let secondName='Singh'
// let prefix='Mr'

// console.log(`${prefix} ${firstName} ${secondName}`)

//ternary Operator

let returnage=false;

function getAgeInfo(age){
    return `This Person is ${age} Year  old`
}

function getCity(){
    return 'This person is from USA'

}
// if(returnage){
//     console.log(getAgeInfo(30))
// }else{
//     console.log(getCity())
// }

returnage?console.log(getAgeInfo(50)):console.log(getCity())
