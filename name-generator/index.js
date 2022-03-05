const btn = document.getElementById("submitButton")

btn.addEventListener('click',(e) => {
    e.preventDefault()

    const date = document.getElementById("dateInput").value
    const newDate= date.toString()
    let CC = newDate.slice(0,2);
    let YY = newDate.slice(2,4);
    let MM = newDate.slice(5,7);
    let DD = newDate.slice(8,10);

    console.log(date);
    console.log(CC);
    console.log(YY);
    console.log(MM);
    console.log(DD);

})

