

let loading_txt = document.querySelector(".loading-txt")
let bg = document.querySelector(".bg")

let load = 0


let interval = setInterval(bluring,30)

function bluring(){
    load++
    if(load>99){
        clearInterval(interval)
    }
    loading_txt.innerText = `${load}%`,
    loading_txt.style.opacity = scale(load,0,100,1,0)
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)` 
    console.log(load)
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}