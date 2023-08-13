function changeBg() {

    const images = [
        'url("./images/130.webp")',
        'url("./images/139.webp")',
        'url("./images/144.webp")',
        'url("./images/148.webp")',
        'url("./images/152.webp")',
        'url("./images/IMG_5376.webp")',
        'url("./images/IMG_5842.webp")',
        'url("./images/IMG_8501.webp")',
    ]

    const imageWrapper = document.getElementById("image-wrapper");

    newBg = images[Math.floor(Math.random() * images.length)];

    imageWrapper.style.backgroundImage = newBg;

}

function changeShiftDirection(){
    const directions = [
        'Shift-LR 1s',
        'Shift-RL 1s',
        'Shift-UD 1s',
        'Shift-DU 1s'
    ]

    const imageWrapper = document.getElementById("image-wrapper");

    newDirection = directions[Math.floor(Math.random() * directions.length)];

    imageWrapper.style.animation = newDirection;
}


changeBg()
changeShiftDirection()