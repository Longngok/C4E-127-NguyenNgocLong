const buttonC = document.getElementById("btnt")
const bodyChange = document.getElementById("BodyC")

function getRandomcolor (){
    let r = parseInt(Math.random() * 254 )
    let g = parseInt(Math.random() * 254 )
    let b = parseInt(Math.random() * 254 )
    return `rgb(${r},${g},${b})`
}

buttonC.addEventListener("click",()=>{
    let randomColor = getRandomcolor()
    console.log(randomColor)
    bodyChange.style.backgroundColor = randomColor
})

const buttonUp = document.getElementById("btn")


buttonUp.addEventListener("click",()=>{
    buttonUp.innerHTML = parseInt("+1")
})