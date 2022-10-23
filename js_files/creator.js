import { saveFile } from "./save-file.js";
import {posterUI} from "./creator-classes.js";

window.addEventListener("DOMContentLoaded", posterUI.loadData);

// Writing name of your team

const yourTeamInput = document.getElementById("team");

yourTeamInput.addEventListener("keyup", (e) => {
  const yourTeam = new posterUI();
  yourTeam.writeYourTeamName(e, yourTeamInput);
  
  // const shadow = new fabric.Shadow({
  //   color: "black",
  //   blur: 20,
  // });

  // const text = new fabric.Text(yourTeamInput.value, {
  //   fontFamily: "Montserrat",
  //   width: 150,
  //   fill: "#fff",
  //   shadow: shadow,
  //   textAlign: "center",
  //   top: 250,
  // });
  // text.width = 300;
  // text.left = WIDTH / 2 - text.width / 2;
  // text.className = "yourTeam";

  // fabricCanvas.add(text);
  // // fabricCanvas.add(text);
  // fabricCanvas.renderAll();
});



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