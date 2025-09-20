const departTripTicket = {
    name: "John Doe",
    from: "New York",
    to: "Los Angeles",
    businessClass: false,
    leaveTime: 17,
    arriveTime: 23,
    flightTime () {
        return departTripTicket.arriveTime - departTripTicket.leaveTime;
    },
    upgrade () {
        if (departTripTicket.businessClass) {
            console.log("Your ticket is already business class!")
        } else {
            departTripTicket.businessClass = true;
            console.log("Your ticket has been upgraded to business class!")
        }
    }
}

const returnTripTicket = {
    name: "John Doe",
    from: "New York",
    to: "Los Angeles",
    businessClass: false,
    leaveTime: 11,
    arriveTime: 17,
    flightTime () {
        return returnTripTicket.arriveTime - returnTripTicket.leaveTime;
    },
    upgrade () {
        if (returnTripTicket.businessClass) {
            console.log("Your ticket is already business class!")
        } else {
            returnTripTicket.businessClass = true;
            console.log("Your ticket has been upgraded to business class!")
        }
    }
}

console.log(departTripTicket);
departTripTicket.upgrade();
console.log(departTripTicket);
console.log(returnTripTicket);
returnTripTicket.upgrade();
console.log(returnTripTicket);

console.log(`Your flight time from ${departTripTicket.from} to ${departTripTicket.to} is ${departTripTicket.flightTime()} hours.`);
console.log(`Your flight time from ${returnTripTicket.to} to ${returnTripTicket.from} is ${returnTripTicket.flightTime()} hours.`);