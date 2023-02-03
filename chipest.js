const phones =[
    {name: 'samsung', camera: '32gn', price:20000,  color:'silver' },
    {name: 'walton', camera: '10gn', price:17000,  color:'silver' },
    {name: 'iphone', camera: '8gn', price:16000,  color:'silver' },
    {name: 'Xiomi', camera: '7gn', price:15000,  color:'silver' },
    {name: 'oppo', camera: '6gn', price:14000,  color:'silver' },
    {name: 'nokia', camera: '5gn', price:13000,  color: 'silver' },
    {name: 'HTC', camera: '4gn', price:12000,  color: 'silver' },
];

function cheapestPhone(phones){
    let cheapest = 0;
    for( let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if( phone.price < phones.price);
        cheapest = phone;           
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);