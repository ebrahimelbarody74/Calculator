let numberButtons = document.querySelectorAll('[data-number]')
let previous = document.querySelector('.previous-operation')
let current = document.querySelector('.current-operation')
let clear=document.querySelector("[data-all-clear]")
let del=document.querySelector("[data-delete]")
let operationButtons=document.querySelectorAll("[data-operation]")
let equal=document.querySelector("[data-equal]")
let dark=document.querySelector("body")
let sun=document.querySelector(".sun")
let night=document.querySelector(".night")
let ul=document.querySelectorAll("ul li")
let button=document.querySelectorAll("button")
let copyright=document.querySelector(".copyright a")

let a=""
let b=""
numberButtons.forEach((e)=>{
    e.onclick=function(){
        current.innerHTML+=e.textContent
        
    }
})

clear.onclick=()=>{
    current.innerHTML=""
    previous.innerHTML=""
}
del.onclick=()=>{
    current.innerHTML=current.textContent.slice(0,-1)

}

operationButtons.forEach((e)=>{
    e.onclick=()=>{
        previous.innerHTML+=current.textContent
        a=current.textContent
        b=e.textContent
        previous.innerHTML+=e.textContent
        current.innerHTML=""
    }
})
equal.onclick=()=>{


    switch(b){
        case "+":
            current.innerHTML=Number(a) + Number(current.textContent);break;
        case "-":
            current.innerHTML=Number(a) - Number(current.textContent);break;
        case "*":
            current.innerHTML=Number(a) * Number(current.textContent);break;
        case "/":
            current.innerHTML=Number(a) / Number(current.textContent);break;
    }
    previous.innerHTML=""
}


night.onclick=()=>{
    dark.classList.add("dark")
    night.classList.remove("active")
    sun.classList.add("active")
}
sun.onclick=()=>{
    dark.classList.remove("dark")
    night.classList.add("active")
    sun.classList.remove("active")
}

ul.forEach((ele)=>{
    ele.onclick=function(e){
        ul.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        button.forEach((e)=>{
            e.style.color=ele.dataset.color
            copyright.style.color=ele.dataset.color
            copyright.onmouseover=function(){
                copyright.style.color="yellow"
            }
            copyright.onmouseout=function(){
                copyright.style.color=ele.dataset.color
            }
        })
    }
    
})

