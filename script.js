let a= document.body.querySelectorAll(".selector")
let data=[...a];
let BASE_URL ="https://v6.exchangerate-api.com/v6/e323786b061de16089f986ef/latest";
let from=document.body.querySelector('.From select')
from.default='IS'
let to=document.body.querySelector('.To select')


for( let select of data){
   
    for(country in countryList){
        let option=document.createElement('option');
        if (select.name === "From" && country === "USD") {
            option.selected = "selected";
          } else if (select.name === "To" && country === "INR") {
            option.selected = "selected";}
        option.innerText=country;
        select.append(option)
    }
    select.addEventListener("change",(event)=>{
        let change=countryList[event.target.value]
        let flag=`https://flagsapi.com/${change}/flat/64.png`
        let flagurl=select.parentElement.firstElementChild.nextElementSibling
        flagurl.src=flag
        
    })
}

let submit=document.body.querySelector(".submit")
console.log(submit)
submit.addEventListener("click",async ()=>{
    let box=document.body.querySelector('.input_box')
    let amount=box.value
    let val=to.value
    let newurl=`${BASE_URL}/${from.value}`
    let result =await fetch(newurl)
    let data= await result.json()
    let rate=data.conversion_rates[val]

    let converted= document.body.querySelector(".message")
    converted.innerText=`${amount} ${from.value} = ${(amount*rate).toFixed(2)} ${to.value}`
    box.value=''
})

