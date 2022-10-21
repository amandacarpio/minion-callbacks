const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

// forEach
  minions.forEach(minion => {
    console.log(minion);
})

let capitalizedMinions = minions.map((element) => {
    if (element === 'kevin'){
        return element;
    }
    else {
        return element[0].toUpperCase() + element.slice(1) 
    }
})

console.log(capitalizedMinions)

// filter
let actuallyCapitalizedMinions = capitalizedMinions.filter((element) => {
    if(element[0] === element[0].toUpperCase()){
        return element;
    }
})
console.log(actuallyCapitalizedMinions)

// every 

let result = actuallyCapitalizedMinions.every((element) => {
    return element
})
console.log(result)