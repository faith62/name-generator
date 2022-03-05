const btn= document.getElementById("submitButton");

btn.addEventListener("click",(e) => {
    e.preventDefault()

    const date = document.getElementById("dateInput").value

    console.log(date);
})