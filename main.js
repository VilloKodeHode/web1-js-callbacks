function greet(name, callback) {
    console.log(`Hello, ${name}`)
    callback()
}

function sayGoodbye() {
    console.log("Goodbye!")
}

function sayWelcome() {
    console.log("Welcome!")
}

greet("John", sayGoodbye)
greet("John", sayWelcome)


const numbers = [1, 2, 3, 4, 5]

// numbers.forEach((num)=> console.log(num*2))


numbers.forEach(function (num) {
    console.log(num * 2)
})

function multiply(a, b, callback) {
    const result = a * b;
    callback(result)
}

function logResult(result) {
   console.log("The result is:", result) 
}

function putIntoSite(result) {
    const target = document.getElementById("resultArea")
    target.textContent = "The result is: " + result
}

multiply(3,4, logResult)
multiply(3,4, putIntoSite)


// function fetchData(callback) {
//     fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json()).then(data => callback(data))
// }

// function prosessData(data) {
//     console.log("Data:", data)
// }
// fetchData(prosessData)

// API fetch:
function fetchDataTwo() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
}

fetchDataTwo()