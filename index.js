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


returnage?console.log(getAgeInfo(50)):console.log(getCity())
