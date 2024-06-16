const year = 2010;
const month = 3; 
const day = 21;

const dob = new Date(year, month - 1, day);

const dobYear = dob.getFullYear();
const dobMonth = dob.getMonth() + 1; 
const dobDay = dob.getDate();

console.log(dobYear);  
console.log(dobMonth); 
console.log(dobDay);     

