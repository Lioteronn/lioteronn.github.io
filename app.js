// SLIDERS

const sliderCards = document.querySelectorAll(".slider");
const leftSliderButton = document.querySelector(".left-slider-button");
const rightSliderButton = document.querySelector(".right-slider-button");

sliderCards.forEach(element => {
    console.log(element);
});

let sliderIndex = 2;

let translateIndex = [-100, 0, 100];

function moveSlider(direction) {
    if (direction == "right" && updateSliderIndex("right")) {
        for (i = 0; i < sliderCards.length; i++) {
            sliderCards[i].style.transform = "translateX(" + (translateIndex[i] - 100) + "%)";
        }
        updateInitialTranslate("right");
    } else if (direction == "left" && updateSliderIndex("left")) {
        for (i = 0; i < sliderCards.length; i++) {
            sliderCards[i].style.transform = "translateX(" + (translateIndex[i] + 100) + "%)";
        }
        updateInitialTranslate("left");
    }
}

function updateInitialTranslate(direction) {
    if (direction == "right") {
        for (i = 0; i < translateIndex.length; i++) {
            translateIndex[i] -= 100;
        }
    } else if (direction == "left") {
        for (i = 0; i < translateIndex.length; i++) {
            translateIndex[i] += 100;
        }
    }
}

function updateSliderIndex(direction) {
    if (direction == "right" && sliderIndex - 1 > 0) {
        sliderIndex -= 1;
        return true;
    } else if (direction == "left" && sliderIndex + 1 <= sliderCards.length) {
        sliderIndex += 1;
        return true;
    }

    return false;
}

leftSliderButton.addEventListener("click", function() {
    moveSlider("left");
});

rightSliderButton.addEventListener("click", function() {
    moveSlider("right");
});
