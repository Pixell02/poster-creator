import { saveFile } from "./save-file.js";
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
  img.src = "/plakat/poster.png";

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

yourTeamInput.addEventListener("keyup", writingYourTeam);

function writingYourTeam(e) {
  let objects = fabricCanvas._objects;
  console.log(objects);

  fabricCanvas._objects.forEach((element, i) => {
    if (fabricCanvas.item(i).className == "yourTeam") {
      fabricCanvas.remove(fabricCanvas.item(i));
      console.log(i);
      fabricCanvas.renderAll();
    }
  });

  const shadow = new fabric.Shadow({
    color: "black",
    blur: 20,
  });

  const text = new fabric.Text(yourTeamInput.value, {
    fontFamily: "Montserrat",
    width: 150,
    fill: "#fff",
    shadow: shadow,
    textAlign: "center",
    top: 250,
  });
  text.width = 300;
  text.left = WIDTH / 2 - text.width / 2;
  text.className = "yourTeam";

  fabricCanvas.add(text);
  // fabricCanvas.add(text);
  fabricCanvas.renderAll();
}

// Writing city, date and hour

const cityInput = document.getElementById("city");

cityInput.addEventListener("keyup", writingcity);

function writingcity(e) {
  let objects = fabricCanvas._objects;
  console.log(objects);

  fabricCanvas._objects.forEach((element, i) => {
    if (fabricCanvas.item(i).className == "city") {
      fabricCanvas.remove(fabricCanvas.item(i));
      console.log(i);
      fabricCanvas.renderAll();
    }
  });

  const shadow = new fabric.Shadow({
    color: "black",
    blur: 20,
  });

  const text = new fabric.Text(cityInput.value, {
    fontFamily: "Montserrat",
    width: 150,
    fill: "yellow",
    shadow: shadow,
    textAlign: "center",
    fontSize: 20,
    top: 300,
  });
  text.width = 300;
  text.left = WIDTH / 2 - text.width / 2;
  text.className = "city";

  fabricCanvas.add(text);
  // fabricCanvas.add(text);
  fabricCanvas.renderAll();
}

// Writing opponents

const opponentInput = document.getElementById("opponent");

opponentInput.addEventListener("keyup", writingOpponent);

function writingOpponent(e) {
  let objects = fabricCanvas._objects;
  console.log(objects);

  fabricCanvas._objects.forEach((element, i) => {
    if (fabricCanvas.item(i).className == "opponent") {
      fabricCanvas.remove(fabricCanvas.item(i));
      console.log(i);
      fabricCanvas.renderAll();
    }
  });
  const shadow = new fabric.Shadow({
    color: "black",
    blur: 20,
  });

  const text = new fabric.Text(opponentInput.value, {
    fontFamily: "Montserrat",
    width: 150,
    fill: "#fff",
    shadow: shadow,
    textAlign: "center",
    top: 325,
  });
  text.width = 300;
  text.left = WIDTH / 2 - text.width / 2;
  text.className = "opponent";

  fabricCanvas.add(text);
  fabricCanvas.renderAll();
}


saveFile();