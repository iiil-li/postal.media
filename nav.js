window.onload = (event) => {toggleSimple()};
document.getElementById("no").addEventListener("click", toggleSimple);
document.getElementById("q").addEventListener("click", toggleInfo);
document.addEventListener('keydown', function(event) {
	if (event.key === '?' || event.key === 'q') {
	toggleInfo();
	}
	else if (event.key === '0' || event.code === 'Space' ) {
		toggleSimple();
}});
function scroll() {
  const phot = document.getElementById("phot");
  phot.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}

let infoStatus = 0;

function toggleInfo() {
  if (infoStatus == 0) {
    document.getElementById("footie").style.opacity = 1;
    document.getElementById("q").style.textShadow = ".2vw .2vw .5vw  #3F5787";

    infoStatus++;
  } else {
    document.getElementById("footie").style.opacity = 0;
 document.getElementById("q").style.textShadow = ".2vw .2vw .2vw black";
 ;
    infoStatus--;
  }
};


let simpleStatus = 0;

function toggleSimple() {
  if (simpleStatus == 0) {
    document.getElementById("horn").style.opacity = 0;
    document.getElementById("pathy").style.opacity = 0;
    document.getElementById("phot").style.backgroundColor = "white";

    document.getElementById("phot").style.opacity = 1;
    document.getElementById("phot").style.zIndex = 0;
    document.getElementById("phot").style.backgroundRepeat = "no-repeat";
    document.getElementById("phot").style.backgroundPosition = "center";
    document.getElementById("phot").style.backgroundSize = "contain";
    document.getElementById("phot").style.width = "100%";
    document.getElementById("phot").style.height = "100%";
    document.getElementById("noiseFilter").style.display = "none";
    document.getElementById("no").style.textShadow = ".2vw .2vw .5vw #610D0D";
    simpleStatus++;
  } else {
    document.getElementById("horn").style.opacity = 0.1;
    document.getElementById("phot").style.backgroundColor = "none";
    document.getElementById("phot").style.opacity = .5;
    document.getElementById("phot").style.zIndex = -4;
    document.getElementById("phot").style.backgroundRepeat = "repeat";
    document.getElementById("phot").style.width = "400%";
    document.getElementById("phot").style.height = "400%";
    document.getElementById("pathy").style.opacity = .5;
    document.getElementById("noiseFilter").style.display = "block";
    document.getElementById("phot").style.backgroundSize= "";
    scroll();
    document.getElementById("no").style.textShadow = ".2vw .2vw .2vw black";
    simpleStatus--;
  }
}

