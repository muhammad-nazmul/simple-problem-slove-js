//Problem 1
function seerToMon(seer) {
    const mon  = seer / 40;
   return mon;
}
// Output
const seerToMonResult = seerToMon(80);
console.log(seerToMonResult);


//Problem 2
function totalSales( shirt, pant, shoes){
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoesPrice = 500;
    //price culculation
    const shirtTotalPrice = shirt * shirtPrice;
    const pantTotalPrice = pant * pantPrice;
    const shoesTotalPrice = shoes * shoesPrice
    //total price culculation
    const totalPrice = shirtTotalPrice + pantTotalPrice + shoesTotalPrice;
    return totalPrice;
}
//output
const totalPriceCulculate = totalSales(2, 4, 4,);
console.log(totalPriceCulculate);


// Problem 3
function deliveryCost(tShirtQuantity){
    const firstDeliveryCost = 100;
    const secondDelivaryCost = 80;
    const restDelivaryCost = 50;
    //culculation
    if(tShirtQuantity <= 100){
        const totalCost = firstDeliveryCost * tShirtQuantity;
        return totalCost;
    }
    if(tShirtQuantity <= 200){
        const firstHunderedCost = firstDeliveryCost * 100;
        const secondHunderedCost = secondDelivaryCost *(tShirtQuantity - 100);
        const totalCost = firstHunderedCost + secondHunderedCost;
        return totalCost;
    }
    if (tShirtQuantity > 200){
        const firstHunderedCost = firstDeliveryCost * 100;
        const secondHunderedCost = secondDelivaryCost * 100;
        const restConst = restDelivaryCost * (tShirtQuantity - 200);
        const totalCost = firstHunderedCost + secondHunderedCost + restConst;
        return totalCost;
    }
    else if(typeof tShirt == "Price"){
        //Error
        return 'error :( Please pay your tshirt bill ;) Thank You :_)';
    }
}
//output
const totalTshirt = 201;
const totalDeliveryCost = deliveryCost(totalTshirt);
console.log(totalDeliveryCost);


// problem 4
function  perfectFriend(friends){
    let largeName = friends[0];
    for(let i = 0; i < friends.length; i++){
        if(friends[i].length == 5){
            return friends[i];
        }
        else if(typeof friends == "Number"){
            //Error
            return 'error :( Type your string as input value';
        }
    }
    return largeName;
};
//output
const friendsName = ['Rohim', 'Kalam', 'ShakibHasn', 'Nasir', 'KarimMolla'];
const friendsLargeName = perfectFriend(friendsName);
console.log(friendsLargeName);