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




// task-1 && option-1
//********************

const odd1 = [3,5,7,9,11];
for(let i = 0; i < odd1.length; i++){
    let sum = odd1[i] + 1;
    // console.log(sum);
}


// task-1 && option-2
//********************

const odd2 = [3,5,7,9,11];
for(let singleOdd of odd2){
    // console.log(singleOdd + 1);
}


// task-1 && option-3
//********************
const odd3 = [3,5,7,9,11];
// odd3.forEach(oddNum => console.log(oddNum + 1));



// task-1 && option-4
//********************
const odd4 = [3,5,7,9,11];
const result = odd4.map(oddMap => oddMap + 1);
// console.log(result);
// result.forEach(evenToOdd => console.log(evenToOdd - 1));





//task-2
//**********
// const filterArray = [10,3,44,50,30,33,40];
// const filterResult = filterArray.filter(num => num % 10 === 0 ? num : null);
// console.log(filterResult);


//task-3
//**********

// const instructor = [
//     {name: "Nodi",age:28,position: "Senior"},
//     {name: "Akil",age:38,position: "Junior"},
//     {name: "Shobuj",age:30,position: "Senior"}
// ]

// const filterArray = instructor.filter(selectPosition => selectPosition.position.toLocaleLowerCase() === "senior")
// const mapArray = filterArray.map(mapName => mapName.name)
// console.log(mapArray);


//task-4
//**********

// const people = [
//     {name: "Nodi",age:28},
//     {name: "Akil",age:38},
//     {name: "Shobuj",age:30}
// ]
// sum = 0;
// people.forEach(ageCalc => {
//     sum += ageCalc.age; 
// });
// console.log(sum);


// const people = [
//     {name: "Nodi",age:28},
//     {name: "Akil",age:38},
//     {name: "Shobuj",age:30}
// ]
// const age = people.map(ageCalc => ageCalc.age);
// const sum = age.reduce((ageStart,ageEnd) => ageStart + ageEnd,0);
// console.log(sum);



const people = [
    {name: "Nodi",age:28},
    {name: "Akil",age:38},
    {name: "Shobuj",age:30}
]
const age = people.map(ageCalc => ageCalc.age);

function myFunction(start,end){
   return start + end;
}

console.log(age.reduce(myFunction));