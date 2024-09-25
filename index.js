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

