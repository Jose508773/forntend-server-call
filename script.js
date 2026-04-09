let button = document.getElementById("fetch-data");
let showData = document.getElementById("data-container");



async function getData() {
    let response = await fetch("https://backend-server-ruddy-ten.vercel.app/api/online")
    let data = await response.json()
    showData.textContent = data.message

}

button.addEventListener("click", getData)















/*
async function fetchData() {

    let response = await fetch("/api/online", {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({

        })


    })




    let data = await response.json()

    showData.textContent = data.message



*/