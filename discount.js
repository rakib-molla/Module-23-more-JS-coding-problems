
/* 
    1. if ticket numbers is less than 100, per ticket price :100
    2. if ticket numbers is more than 100,b ut less than 200, first 100 tickets will be 100/ticket rest tickets will be 90 taka per piece 
        first 100 n --> 100 taka
        rest ---> 90 taka
    3. if you purchase more than 200 tickets

    first 100 --> 100 taka
    101-200 --> 90 taka
    200+ ---> 70 taka
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if( ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }else if ( ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(201);
console.log(price);