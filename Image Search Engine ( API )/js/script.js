const enteredKeyword = document.getElementById("enteredKeyword");
const searchBtn = document.getElementById("searchBtn");
const images = document.getElementById("images");
const showMoreBtn = document.getElementById("showMoreBtn");
let page = 1;
let imageNumber = 6;

searchBtn.addEventListener("click", () => {
  images.innerHTML = "";
  fetchData();
  page = 1;
});

function fetchData() {
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${enteredKeyword.value}&client_id=0bfSL85VzADUlzmFEQxxS0UyV-bcM8gR2cklX8G_kEo&per_page=${imageNumber}`;

  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      getImages(data);
    });
}

const getImages = (data) => {
  const result = data.results;
  result.forEach((imageURL) => {
    console.log(imageURL.links.html);
    const image = document.createElement("img");
    image.src = imageURL.urls.raw;

    const a = document.createElement("a");
    a.href = imageURL.links.html;
    a.target = "_blank";
    a.appendChild(image);

    images.appendChild(a);
  });

  showMoreBtn.style.display = "block";
};

showMoreBtn.addEventListener("click", () => {
  page++;
  fetchData();
});
