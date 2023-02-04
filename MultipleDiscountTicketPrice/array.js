function totalQuantity(ticketQuantity) {
    let first100 = 100;
    let second100 = 90;
    let restTicket = 70;

    if(ticketQuantity <= 100) {
        let price = ticketQuantity * first100;
        return price;
    }

    else if(ticketQuantity <= 200) {
        let first100Price = 100 * first100;
        let restTicketQuantity = ticketQuantity - 100;
        let restPrice = restTicketQuantity * second100;
        let total2nd = first100Price + restPrice;

        return total2nd;
    }

    else {
        let first100Price = 100 * first100;
        let second100Price = 100 * second100;
        let rest3rdTicket = ticketQuantity - 200;
        let rest3rdTicketPrice = rest3rdTicket * restTicket;
        let totalCost = first100Price + second100Price + rest3rdTicketPrice;

        return totalCost;
    }
}

var total = totalQuantity(201);

console.log(total);