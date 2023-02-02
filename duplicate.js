
const names = ['abul', 'babaul', 'cabul', 'ebul', 'babul', 'abul', 'kabul', 'gapul', 'cabul', 'abul', 'abul', 'abul', 'rakib','rakib'];

// remove duplicate name in array 
// function removeDuplicate(names){
//     const unique = [];
//     for(let i= 0; i< names.length; i++){
//         const name = names[i];
//         if( unique.includes(name) == false ){
//             unique.push(name);
//         }
//     }
//     return unique;
// }
// const uniqueNmaes = removeDuplicate(names);
// console.log(uniqueNmaes);

function removeDuplicate(names){
    const unique = [];
    for( let i = 0; i < names.length; i++){
        const name = names[i];
        if( unique.includes(name) == false){
            unique.push(name);
        }
    }
    return unique;
}
const nameList = removeDuplicate(names);
console.log(nameList);