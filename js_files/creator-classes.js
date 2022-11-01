export class poster {
  constructor(
    yourTeamName,
    yourTeamLogo,
    yourTeamPlayer,
    opponentTeamName,
    opponentTeamLogo
  ) {
    this.yourTeamName = yourTeamName;
    this.yourTeamLogo = yourTeamLogo;
    this.yourTeamPlayer = yourTeamPlayer;
    this.opponentTeamName = opponentTeamName;
    this.opponentTeamLogo = opponentTeamLogo;
  }
}
export class posterUI {
  static writeYourTeamName(e, yourTeamInput, fabricCanvas, WIDTH) {
    const yourTeamValue = yourTeamInput;
    let objects = fabricCanvas._objects;
    objects.forEach((element, i) => {
      if (fabricCanvas.item(i).className == "yourTeam") {
        fabricCanvas.remove(fabricCanvas.item(i));
        fabricCanvas.renderAll();
      }
    });

    const shadow = new fabric.Shadow({
      color: "black",
      blur: 20,
    });

    const text = new fabric.Text(yourTeamValue.value, {
      fontFamily: "Montserrat",
      fill: Edit.getFirstColor(e, fabricCanvas),
      shadow: shadow,
      textAlign: "center",
      top: 250,
      className: "yourTeam",
    });
    text.width = 300;
    text.left = WIDTH / 2 - text.width / 2;
    fabricCanvas.add(text);
    fabricCanvas.renderAll();
  }
  static writeCity(e, cityInput, fabricCanvas, WIDTH) {
    const cityInputValue = cityInput;
    let objects = fabricCanvas._objects;
    console.log(objects);
    fabricCanvas._objects.forEach((element, i) => {
      console.log(fabricCanvas.item(i).className);
      if (fabricCanvas.item(i).className == "city") {
        fabricCanvas.remove(fabricCanvas.item(i));
        console.log(i);
      }
    });

    const shadow = new fabric.Shadow({
      color: "black",
      blur: 20,
    });

    const text = new fabric.Text(cityInput.value, {
      fontFamily: "Montserrat",
      fill: "yellow",
      fontSize: 20,
      shadow: shadow,
      textAlign: "center",
      top: 300,
    });
    text.width = 300;
    text.left = WIDTH / 2 - text.width / 2;
    text.className = "city";

    fabricCanvas.add(text);
    fabricCanvas.renderAll();
  }
  static writeOpponentTeamName(e, opponentInput, fabricCanvas, WIDTH) {
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
      fill: "white",
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

  static uploadYourLogo() {}
  static loadImagesToSelect() {
    // Loading players of selected team

    const playerImage = document.querySelector("#your-player");
    const blankOption = document.createElement("option");
    blankOption.textContent = "";
    playerImage.append(blankOption);
    const getPlayers = JSON.parse(localStorage.getItem("players"));
    const checkId = JSON.parse(localStorage.getItem("chosenTeam"));
    getPlayers.forEach((player) => {
      const option = document.createElement("option");
      if (player.id == checkId) {
        option.innerHTML = `${player.number} ${player.firstPlayerName} ${player.lastPlayerName}`;
        playerImage.append(option);
      }
    });

    // Loading opponents of selected team

    const opponents = document.querySelector("#opponent-team");
    const secondBlankOption = document.createElement("option");
    secondBlankOption.textContent = "";
    opponents.append(secondBlankOption);
    const getOpponent = JSON.parse(localStorage.getItem("opponents"));
    getOpponent.forEach((opponent) => {
      const option = document.createElement("option");
      option.innerHTML = `${opponent.firstOpponentName} ${opponent.secondOpponentName}`;
      opponents.append(option);
    });
  }
  changeYourTeamNameColor() {}
}
export class Edit {
  static getFirstColor(e, fabricCanvas, yourTeamInput) {
    const WIDTH = 700;
    const getColor = document.querySelector("#first-text-color").value;
    console.log(fabricCanvas);
    let objects = fabricCanvas._objects;
    objects.forEach((object, i) => {
      if (fabricCanvas.item(i).className == "yourTeam") {
        fabricCanvas.remove(fabricCanvas.item(i));
        posterUI.writeYourTeamName(e, yourTeamInput, fabricCanvas, WIDTH);
      }
    });
    return getColor;
  }
}
