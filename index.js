function writeCards(friendsNames, birthdayMessage) {
    let newArray = [];
    let outPutMessage = "";
    for (let i = 0; i < friendsNames.length; i++) {        
        outPutMessage = `Thank you, ${friendsNames[i]}, for the wonderful ${birthdayMessage} gift!`;
        newArray.push(outPutMessage);
    }
    return newArray;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(number){
    let countDown = number;
    while (countDown >= 0){  
        console.log(countDown);      
        countDown--;
    }    
}

console.log(countDown(10));
