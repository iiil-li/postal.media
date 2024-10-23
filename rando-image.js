//grab a random
//collections we have so far
const npmScrapes = "https://api.postal.media/api/npm-scrapes";
const pmScrapes = "https://api.postal.media/api/pm-scrapes";
const iaScrapes = "https://api.postal.media/api/ia-scrapes";
const bnfScrapes = "https://api.postal.media/api/bnf-scrapes";
const ddbScrapes = "https://api.postal.media/api/ddb-scrapes";
const eurScrapes = "https://api.postal.media/api/eur-scrapes";
const nlScrapes = "https://api.postal.media/api/nl-scrapes";
const nzScrapes = "https://api.postal.media/api/nz-scrapes";
const nyplScrapes = "https://api.postal.media/api/nypl-scrapes";
const bplScrapes = "https://api.postal.media/api/bpl-scrapes"
const m4d = "https://api.postal.media/api/marked4dels";

let collections = [
  npmScrapes,
  pmScrapes,
  iaScrapes,
  bnfScrapes,
  ddbScrapes,
  eurScrapes,
  nlScrapes,
  nzScrapes,
  nyplScrapes,
	bplScrapes
];

function getRandomCollection(collections) {
  return collections[Math.floor(Math.random() * collections.length)];
}

//making a placeholder string to pass to a mark4del func
let imObj = "";

function retrieveRandImage(collections) {
  let collection = getRandomCollection(collections);
  fetch(collection + "?fields=id")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //random page
      let randomPage = Math.floor(
        Math.random() * data.meta.pagination.pageCount,
      );
      //random of the items on page
      let randomIndex = Math.floor(
        Math.random() * data.meta.pagination.pageSize,
      );
      fetch(collection + "?pagination[page]=" + randomPage + "&?fields=image")
        .then((imageObj) => {
          return imageObj.json();
        })
        .then((imageURL) => {
          //
          const img = new Image();
          img.src = imageURL.data[randomIndex].attributes.image;
          imObj = img.src;
          document.getElementById("phot").style.backgroundImage =
            `url("${imageURL.data[randomIndex].attributes.image}"`;
          const phot = document.getElementById("phot");
          phot.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
          document.getElementById("footie").innerHTML =
            `<a target="_blank" href=${imageURL.data[randomIndex].attributes.link}> "${imageURL.data[randomIndex].attributes.title}" </a>`;
          img.onload = function () {
            document.getElementById("new").style.animation = "blink 0s linear";
          };
        });
    });
}

//sends the thing and starts the blink
function fireOff() {
  document.getElementById("new").style.transform = "";
  document.getElementById("new").style.animation = "blink .3s linear infinite";
  retrieveRandImage(collections);

  noising();
}

//lil flash for mousedown
function tempt() {
  document.getElementById("new").style.transform = "rotateZ(90deg)";
}

async function markForDel(object) {
  try {
    const rawResponse = await fetch(m4d, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: { object: object },
      }),
    });

    const content = await rawResponse.json();
    console.log(content);
  } catch (error) {
    console.error('Error:', error);
  }
}

retrieveRandImage(collections);

document.getElementById("new").addEventListener("mouseup", fireOff);
document.getElementById("new").addEventListener("mousedown", tempt);
document.addEventListener("keydown", function (event) {
  if (event.code === "Enter" || event.key === "n" || event.key === "r" || event.key === "R") {
    fireOff();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "X") {
    markForDel(imObj);
    fireOff();
  }
});
