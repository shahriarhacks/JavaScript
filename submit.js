/**********************************************************
---------------------------Problem Number-1
Convering Radian to Degree--------------------------------
***********************************************************/
function radianToDegree(radian) {
    if (typeof radian === "number") {
        const deg = radian * 180 / Math.PI;
        const degree = deg.toFixed(2);

        return parseFloat(degree);
    }
    else {
        return "Please Give a Number"
    }

}
/* ************************************************************* 
===========================Problem Number-2
//Finding the Javascript(.js) file=============================
****************************************************************/
function isJavaScriptFile(text) {
    if (typeof text === "string") {
        const check = text.endsWith(".js")
        return check;
    }
    else {
        return "Give a Valid String"
    }
}
/*================================================================
***********************************************Problem Number-3
Calculate the Oil Price***************************************
==================================================================*/
function oilPrice(diesel, petrol, octen) {
    if (typeof diesel === "number" && typeof petrol === "number" && typeof octen === "number") {
        const dieselPrice = 114 * diesel;
        const petrolPrice = 130 * petrol;
        const octenPrice = 135 * octen;
        const totalCost = dieselPrice + petrolPrice + octenPrice;
        return totalCost;
    }
    else {
        return "Please give valid input"
    }
}
/* **********************************************
----------------------Problem Number-4
Calcuate teh Public Bus fare------------
*************************************************/
function publicBusFare(num) {
    if (typeof num === "number") {
        const forMicroBus = num % 50;
        const forPublicBus = forMicroBus % 11;
        const busFare = forPublicBus * 250;
        return busFare;
    }
    else {
        return "Sir PLease give any Number"
    }
}

/* *******************************************************
===================================Problem Number-5
Finding Best friend===================================
**********************************************************/
function isBestFriend(friend1, friend2) {
    if (typeof friend1 === "object" && typeof friend2 === "object") {
        if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
            return true;
        }
        else {
            return false
        }
    }
    else {
        return "Please give us Valid Input Value"
    }
}
