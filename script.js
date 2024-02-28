function showImage(imageSrc) {
    document.getElementById('enlargedImg').src = imageSrc
    document.querySelector('.enlarged-image-container').style.display = 'flex'
}

function hideImage() {
    document.querySelector('.enlarged-image-container').style.display = 'none'
}

let slideIndex = 0
showSlides()

function showSlides() {
    let slides = document.getElementsByClassName('slide')
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = 'block'
    setTimeout(showSlides, 1000)
}
