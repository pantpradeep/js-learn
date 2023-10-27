let score = '43';

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

let score1 = '43abc';

let valueInNumberScore1 = Number(score1); //Nan 

console.log(typeof valueInNumberScore1, valueInNumberScore1);

let score2 = null;

let valueInNumberScore2 = Number(score2); //Nan 

console.log(typeof valueInNumberScore2, valueInNumberScore2);

//Number conversion
// "43"=> 33
// "43anc" => NaN
// true => 1
// Null => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log('boolean is logged in', booleanIsLoggedIn);

//1=> true
//"" => false
// "pradeep"=> true

let someNum = 33;
let stringSomeNum = String(someNum);
console.log(stringSomeNum, typeof stringSomeNum);



// ****** operations ******//
// if string first then all string
console.log("1" + 2) //12
console.log(2 + "1") //21
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "3") //33


let a = 1;
let b = a++;
console.log('a and b', a,b)

let c = 1;
let d= ++c; // c is pre-incremented by 1 (c becomes 2), and the new value of c (2) is assigned to d
console.log('c and d', c,d)