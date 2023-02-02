const firends = [0,1,2,3,4,5,6,7,8,9];
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// will change the original array
const partial = firends.splice(2, 5, 111,555,999);
console.log(partial);
console.log(firends);