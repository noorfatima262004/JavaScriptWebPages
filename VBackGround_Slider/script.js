let slideContainer = document.querySelector(".backGround-slider");
let leftContainer = document.querySelector(".left-slide");
let rightContainer = document.querySelector(".right-slide");
let downButton = document.querySelector(".down-button");
let upButton = document.querySelector(".up-button");
let imageLength = rightContainer.querySelectorAll("div").length;

let slideNumber = 0;

rightContainer.style.top = `-${(imageLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide('up'));
downButton.addEventListener("click", () => changeSlide('down'));

function changeSlide(direction) {
    const height = slideContainer.clientHeight;

    if (direction === 'up') {
        slideNumber++;
        if (slideNumber > imageLength - 1) {
            slideNumber = 0;
        }
    } else if (direction === 'down') {
        slideNumber--;
        if (slideNumber < 0) {
            slideNumber = imageLength - 1;
        }
    }

    const rightTransformValue = `translateY(${slideNumber * height}px)`;
    const leftTransformValue = `translateY(-${slideNumber * height}px)`;

    console.log('Slide Number:', slideNumber);
    console.log('Right Container Transform:', rightTransformValue);
    console.log('Left Container Transform:', leftTransformValue);

    rightContainer.style.transform = rightTransformValue;
    leftContainer.style.transform = leftTransformValue;
}

