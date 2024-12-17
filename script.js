let a= document.body.querySelectorAll(".selector")
let data=[...a];



for( let select of data){
    console.log(select)
    for(country in countryList){
        let option=document.createElement('option');
        option.innerText=country;
        select.append(option)
    }
    select.addEventListener("change",(event)=>{
        console.log(event.target.value)
    })
}

console.log(12)
