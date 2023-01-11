const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac9600977cmshe5d5b77e40f2841p1ed098jsn16d5b028b56e",
    "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
  },
};

fetch("https://programming-memes-images.p.rapidapi.com/v1/memes", options)
  .then((response) => response.json())
  .then((response) => {
    const memeImgOne = document.querySelector(".img1");
    const memeImgTwo = document.querySelector(".img2");
    const memeImgThree = document.querySelector(".img3");
    const memeImgFour = document.querySelector(".img4");
    const memeImgFive = document.querySelector(".img5");
    const memeImgSix = document.querySelector(".img6");

    memeImgOne.src = response[0].image;
    memeImgTwo.src = response[1].image;
    memeImgThree.src = response[2].image;
    memeImgFour.src = response[3].image;
    memeImgFive.src = response[4].image;
    memeImgSix.src = response[5].image;
  })
  .catch((err) => console.error(err));

var imgs = document.querySelectorAll(".img img");

// Cacher toutes les images au démarrage
imgs.forEach(function (img) {
  img.style.display = "none";
});

// Fonction pour afficher une image aléatoire
function showRandomImage() {
  // Choisir une image aléatoire
  var randomIndex = Math.floor(Math.random() * imgs.length);
  var randomImage = imgs[randomIndex];

  // Cacher toutes les images
  imgs.forEach(function (img) {
    img.style.display = "none";
  });

  // Afficher l'image aléatoire
  randomImage.style.display = "block";
  button.style.transition = "1s";
  button.style.marginLeft = "-2000px";
}

// Bouton pour afficher une image aléatoire
var button = document.querySelector("#show-image-button");
button.addEventListener("click", showRandomImage);
