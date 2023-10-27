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