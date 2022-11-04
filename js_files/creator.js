import { saveFile } from "./save-file.js";
import { Edit, posterUI } from "./creator-classes.js";

window.addEventListener("DOMContentLoaded", posterUI.loadImagesToSelect);

const WIDTH = 700;
const canvas = document.getElementById("poster-edit");
canvas.width = WIDTH;
canvas.height = WIDTH;
console.log(canvas.height);
const fabricCanvas = new fabric.Canvas(canvas);
document.getElementsByClassName("canvas-container")[0].style.width = "700px";
document.getElementsByClassName("canvas-container")[0].style.height = "700px";
document.getElementsByClassName("upper-canvas")[0].width = WIDTH;
document.getElementsByClassName("upper-canvas")[0].height = WIDTH;
document.getElementsByClassName("upper-canvas")[0].style.width = "700px";
document.getElementsByClassName("upper-canvas")[0].style.height = "700px";
const ctx = canvas.getContext("2d");
createBackgroundImage(fabricCanvas);

function createBackgroundImage(fabricCanvas) {
  const img = new Image();
  img.src = "../plakat/poster.png";
  img.width = WIDTH;
  img.height = WIDTH;

  let ratio = WIDTH / img.width;

  canvas.height = img.height * ratio;
  canvas.width = WIDTH;
  console.log(canvas.height);
  fabricCanvas.width = WIDTH;
  fabricCanvas.height = img.height * ratio;
  img.onload = () => {
    const newImg = new fabric.Image(img);
    newImg.scaleToWidth(WIDTH);
    fabricCanvas.setBackgroundImage(
      newImg,
      fabricCanvas.renderAll.bind(fabricCanvas)
    );
    fabricCanvas.selection = false;
    fabricCanvas.renderAll();
  };
}


// Writing name of your team

const yourTeamInput = document.getElementById("team");

yourTeamInput.addEventListener("keyup", (e) => {
  
  posterUI.writeYourTeamName(e, yourTeamInput, fabricCanvas, WIDTH);
});

// Setting color of your team text

const getColorInput = document.querySelector("#first-text-color")

getColorInput.addEventListener("change", (e) => {
  Edit.getFirstColor(e, fabricCanvas, yourTeamInput);
})
// Writing city, date and hour

const cityInput = document.getElementById("city");

cityInput.addEventListener("keyup", (e) => {
  posterUI.writeCity(e, cityInput, fabricCanvas, WIDTH);
});

// Writing opponents

const opponentInput = document.getElementById("opponent");

opponentInput.addEventListener("keyup", (e) => {
  posterUI.writeOpponentTeamName(e, opponentInput, fabricCanvas, WIDTH);
});

// More options
let showFirstOption = false;
const moreOptions1 = document.querySelector(".more-options1");
moreOptions1.addEventListener("click", (e) => {
  if (document.querySelector("#your-team-color").style.display == "none") {
    document.querySelector("#your-team-color").style.display = "initial";
    showFirstOption = true;
    console.log(showFirstOption);
  } else {
    document.querySelector("#your-team-color").style.display = "none";
    showFirstOption = false;
  }
});
  if(showFirstOption == true) {
    Edit.getFirstColor();
  }
const moreOptions2 = document.querySelector(".more-options2");
moreOptions2.addEventListener("click", (e) => {
  if (document.querySelector("#city-text-color").style.display == "none") {
    document.querySelector("#city-text-color").style.display = "initial";
  } else {
    document.querySelector("#city-text-color").style.display = "none";
  }
});

const moreOptions3 = document.querySelector(".more-options3");
moreOptions3.addEventListener("click", (e) => {
  if (document.querySelector("#opponent-team-text").style.display == "none") {
    document.querySelector("#opponent-team-text").style.display = "initial";
    
  } else {
    document.querySelector("#opponent-team-text").style.display = "none";
  }
});
  const opponentOption = document.querySelector("#opponent-team");

  opponentOption.addEventListener("change", (e) => {
    let opponentLogo = opponentOption.value;
    console.log(opponentLogo);
    Edit.addOpponentLogo(opponentLogo, fabricCanvas);
  });

  const yourPlayerImage = document.querySelector("#your-player");
  yourPlayerImage.addEventListener("change", (e) => {
    const playerImageSrc = yourPlayerImage.value;
    Edit.addYourPlayerImage(playerImageSrc, fabricCanvas);
  });
saveFile();
