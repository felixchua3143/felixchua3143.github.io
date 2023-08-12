function changeBg() {

    const images = [
        'url("./images/130.webp")',
        'url("./images/139.webp")',
        'url("./images/144.webp")',
        'url("./images/148.webp")',
        'url("./images/152.webp")',
        'url("./images/IMG_5582.webp")',
        'url("./images/IMG_5646.webp")',
        'url("./images/IMG_5376.webp")',
        'url("./images/IMG_5842.webp")',
        'url("./images/IMG_8501.webp")',
    ]

    const imageWrapper = document.getElementById("image-wrapper");

    imageWrapper.style.backgroundImage = images[Math.floor(Math.random() * images.length)];

}

changeBg()