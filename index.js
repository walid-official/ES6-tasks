// task-1
//********

const multiply = (num1,num2,num3) => num1 * num2 * num3;
console.log(multiply(2,3,4))

// task-2
//********

let templates = `
I'm a web developer
I love to code
I love to eat biriyani
`
console.log(templates);


// task-3
//********

const defaultM = (number1, number2 = 20) => number1 + number2;
console.log(defaultM(5));


// task-4
//********

const friends = ['walid','nafis',"saif","mahmud","rasel","rouf"];

const allFriends = friends => {
    const friendArray = [];
    for(const friend of friends){
        if(friend.length % 2 === 0){
            friendArray.push(friend);
        }
    }
    return friendArray;
}

console.log(allFriends(friends));


// task-5
//********

const sqrNumbers = [2,3,4,7,5,8,10];
let squareCollection = squares => {
let sum = 0;
   for(let square of squares){
    sum += (square * square);
   }
   return sum / squares.length;
}
console.log(squareCollection(sqrNumbers));


// task-6
//*******


const margeNumber1 = [2,3,4,5,6,7,8];
const margeNumber2 = [9,10,11,12,13,14];

const marge = (marNum1,marNum2) => {
    let allNumbers =  [...marNum1,...marNum2];
    return Math.max(...allNumbers)
}

console.log(marge(margeNumber1,margeNumber2))