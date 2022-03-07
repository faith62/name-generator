let maleNames=["Kwasi", "Kwando", "kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames=["Akosua", "Adwoa", "Abenaa"," Akua", "Yaa", "Afua", "Ama"]

const btn = document.getElementById("submitButton")

btn.addEventListener('click',(e) => {
    e.preventDefault()
    const male = document.getElementById("radioMale").checked
    const female = document.getElementById("radioFemale").checked
    let result = document.getElementById("result")
     
    const dateInput = document.getElementById("dateInput").value
    let date= new Date(dateInput)
     let dayOfTheWeek =date.getDay();
    // const newDate= date.toString()
    // let CC = parseInt(newDate.slice(0,2));
    // let YY = parseInt(newDate.slice(2,4));
    // let MM = parseInt(newDate.slice(5,7));
    // let DD = parseInt(newDate.slice(8,10));

    //  let dayOfTheWeek =(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7
    //  let d= dayOfTheWeek.toFixed();
 
    

    if(male){
       result.innerHTML= `Your Akan name is: ${maleNames[dayOfTheWeek]} .`;
    }
    else if(female)
    {
        result.innerHTML= `Your Akan name is: ${femaleNames[dayOfTheWeek]} .`;
    }
})
 function clearResult(){
     document.getElementById("result").innerHTML = " ";
 }
 

