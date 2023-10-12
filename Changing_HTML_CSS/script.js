let animalImg = document.querySelector("#animal");

console.log(animalImg)

function pickCat() {
    animalImg.src = "images/cat.jpeg";
    console.log(animalImg.src);
}

function pickDog() {
    animalImg.src = "images/dog.jpeg";
    console.log(animalImg.src);
}
