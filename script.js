let button = document.getElementById("fetch-data");
let showData = document.getElementById("data-container");
let result = document.getElementById("result");
let addNumbersButton = document.getElementById("add-numbers");

async function getData() {
    let response = await fetch("https://backend-server-ruddy-ten.vercel.app/api/online")
    let data = await response.json()
    showData.textContent = data.message

}

button.addEventListener("click", getData)

async function fetchData() {
    let number1 = document.getElementById("number1")
    let number2 = document.getElementById("number2")
    let number1Value = number1.value
    let number2Value = number2.value

    let response = await fetch("https://backend-server-ruddy-ten.vercel.app/api/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            a: Number(number1Value),
            b: Number(number2Value)
        })

    })

    let data = await response.json()
    result.textContent = data.result

}

addNumbersButton.addEventListener("click", fetchData)

