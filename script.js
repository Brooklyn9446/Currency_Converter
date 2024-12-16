let a= document.body.querySelector(".selector")
let data=[...a];


data.forEach(element => {
    addEventListener('click',()=>{
        console.log(element.innerText)
    })
});