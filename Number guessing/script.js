let input = document.querySelector("input")
let button = document.querySelector("button")
console.log(input.value)
let score = 99
function randomNumber(){
    let ran = Math.floor(1+Math.random()*100)
    return ran
}
function matchRandomNumber(){
    let r = randomNumber()
    if(r !== parseInt(input.value)){
        score = score - 1
        alert(`OOPS! you gussed the number Wrong`)
        if(parseInt(input.value) < r && parseInt(input.value) > 0 ){
            alert(`The number is greater than the number you enter`)
        }
        else if(parseInt(input.value) > r && parseInt(input.value) <100 ){
            alert(`The number is smaller than the number you enter`)
        }
        else{
            alert(`Enter a number between 1 and 100`)
        }
    }
    else if(r === parseInt(input.value)){
        alert(`Congratualtion! you gussed the number ${r} right \n Your gussed the number in ${100-score} attempts`)
    }
   
    
    
}
button.addEventListener("click",matchRandomNumber)