const country = "bangladesh";
const age =52;
const isIdependent = true;
const student = {id: 121, class:11, name: 'Agun'};
const firends = [13,14,11,17,21,16,15,20];

function add(num1, num2){
    return num1+num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray(firends));
console.log(typeof add);

// ================

console.log(firends.includes(21));

if( firends.indexOf(19) !== -1 ){

}
// concat : put to array together 
const newFriendsAge = [12,13,11,13];
const allFriends = newFriendsAge.concat(firends);
console.log(allFriends);