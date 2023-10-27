let accountState; //declare but undefined

if(true){
    let accountState = 'Login';
    console.log('accountState - inside Block',accountState)
}

//let accountState='test'; // can not redeclare block scoped variable

console.log('accountState - outside Block',accountState); //undefined because let is block scoped

var accountName;

if(true){
    var accountName = 'raj';// Redeclaring the same variable accountName
    console.log('accountName- inside block', accountName)
}

console.log('accountName- outside block',accountName); 
//var keyword does not have block scope but function scope. This means that variables declared with var are accessible throughout the whole function, regardless of the block in which they are declared.

const accountId = '123';

//accountId = '2323' //Assignment to constant variable is not allowed