let imageUrl = [
  "https://source.unsplash.com/collection/9",
  "https://source.unsplash.com/collection/10",
  "https://source.unsplash.com/collection/11",
  "https://source.unsplash.com/collection/12",
  "https://source.unsplash.com/collection/13",
  "https://source.unsplash.com/collection/14",
  "https://source.unsplash.com/collection/14"
];

let firstCollection = document.getElementById("firstCollection");
firstCollection.onclick = () => {
  location.href = imageUrl[0];
};

let images = document.querySelectorAll("img");
images[1].onclick = () => {
  location.href = imageUrl[1];
};

images[2].onclick = () => {
  location.href = imageUrl[2];
};

images[3].onclick = () => {
  location.href = imageUrl[3];
};

images[4].onclick = () => {
  location.href = imageUrl[4];
};

images[5].onclick = () => {
  location.href = imageUrl[5];
};

images[6].onclick = () => {
  location.href = imageUrl[6];
};

images[7].onclick = () => {
  location.href = imageUrl[7];
};

// ------------search query ------------------
