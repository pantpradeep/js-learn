// js is dynamic type language

const score = 100 //we did not tell the type (so its dynamic type lang)

//primitive and non primitive

//primitive data types are(call by value)
//number
//string
//boolean
//null but gives typeof object(js error)
//undefined // means not defined
//symbol
//bigint

//non-primitive(call by reference type) 
//objects
//functions
//array

let state = null // null means empty
let accountName; // undefined

console.log(typeof accountName)


const heros = ['ironman', 'spiderman', 'locky'];
const person = {
    name:'pradeep',
    age:'32'
}
const myFunc = function(){
    return 'test'
}