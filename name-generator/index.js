let maleNames=[Kwasi, Kwando, kwabena, Kwaku, Yaw, Kofi, Kwame];
let femaleNames=[Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama]


const btn = document.getElementById("submitButton")

const male = document.getElementById("radioMale").checked
const female = document.getElementById("radioFemale").checked

btn.addEventListener('click',(e) => {
    e.preventDefault()

    const date = document.getElementById("dateInput").value
    const newDate= date.toString()
    let CC = parseInt(newDate.slice(0,2));
    let YY = parseInt(newDate.slice(2,4));
    let MM = parseInt(newDate.slice(5,7));
    let DD = parseInt(newDate.slice(8,10));

     let dayOfTheWeek =(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7
     let d= dayOfTheWeek.toFixed();
 
     console.log(date);
    console.log(CC);
    console.log(YY);
    console.log(MM);
    console.log(d);

    
})


