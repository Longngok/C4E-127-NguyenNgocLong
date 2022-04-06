let btn = document.getElementById("button")
let backgroundcl = document.getElementById("backgroundcl")
function getRandomColor(){
    let r = parseInt(Math.random()*254)
    let g = parseInt(Math.random()*254)
    let b = parseInt(Math.random()*254)
    return ` rgb( ${r} , ${g}, ${b}) `
};

btn.addEventListener("click",()=>{
    let RandomColor = getRandomColor();
    console.log(RandomColor)
    backgroundcl.style.backgroundColor = RandomColor;
})