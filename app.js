console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
printOdds(10);
printOdds(-10);

function printOdds(count){
if(count < 1){
for(i = 0; i < count; i++){
    if(i % 2 != 0){
        console.log(i + " is an odd");
    }
    else{
        continue;
    }
}}
else{
    console.log("The number is too low");
}
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
checkAge('billy', 21);
checkAge("becky", 14);
checkAge(null, 14);
checkAge(null, 18)
checkAge("dillan");

function checkAge(userName, age){
    if(age != null){
        if(userName != null){
        var above16 = `Congrats ${userName}, you can drive!`;
        var below16 = `Sorry ${userName}, but you need to wait until you're 16.`;
    }
    if(age >= 16){
        if(userName != null){
            console.log(above16);
        }
        else{
            console.log(`Congrats, you can drive!`);
        }
    }
    else{
        if(userName != null){
        console.log(below16);
        }
        else{
            console.log(`Sorry, but you need to wait until you're 16.`);
        }
    }
}
    else{
        console.log(`No age entered.`);
    }
}
//Ex3
console.log("EXERCISE 3:\n==========\n");
whichQuadrant(0, 2);
whichQuadrant(2,0);
whichQuadrant(1, 2);
whichQuadrant(-6, 18);

function whichQuadrant(x, y){
    if(x == 0 && y == 0){
        console.log("0,0 exception, no axis applicable.");
    }else if(x == 0){
        console.log("On the Y axis.");
    }else if(y == 0){
        console.log("On the X axis.");
    }else if(x > 0 && y > 0){
        console.log("In the first quadrant.");
    }else if(x < 0 && y > 0){
        console.log("In the second quadrant.");
    }else if(x < 0 && y < 0){
        console.log("In the third quardrant.");
    }else if(x > 0 && y < 0){
        console.log("In the fourth quadrant.");
    }else{
        console.log("Unhandled occurance.")
    }
}
//EX4
console.log("EXERCISE 4:\n==========\n");
triangleType(1,2,2);
triangleType(1,1,2);
function triangleType(sideOne, sideTwo, sideThree){
    if(sideOne + sideTwo > sideThree){
        if(sideOne == sideTwo && sideTwo == sideThree){
            console.log("Equilateral");
        }else if(sideOne == sideTwo || sideOne == sideThree || sideTwo == sideThree){
            console.log("Isosceles");
        }else{
            console.log("Scaline");
        }
    }else{
        console.log("Invalid Triangle");
    }
}
//EX5
console.log("EXERCISE 5:\n==========\n");
dataStatus(100, 15, 30, 56);
dataStatus(100, 15, 30, 45);
function dataStatus(planLimit, day, daysInMonth, usage){
    if(planLimit / daysInMonth < usage / day){
        console.log(`Data usage is too high. Daily average is ${usage/day}/day. To stay below the limit use ${(planLimit - usage) / (daysInMonth - day)}/day.`);
    }else{
        console.log(`Current usage (${usage/day}/day, ${usage} total) is within the the current limit (${planLimit}).`);
    }
}