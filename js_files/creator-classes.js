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
      selectable: false
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
      selectable: false
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
      selectable:false
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
  static addOpponentLogo(opponentLogo, fabricCanvas) {
    fabricCanvas._objects.forEach((images, i) => {
      if (fabricCanvas.item(i).className == "opponent-logo") {
        fabricCanvas.remove(fabricCanvas.item(i));
      }
    });
    const getLogo = JSON.parse(localStorage.getItem("opponents"));
    console.log(getLogo[0].id);
    getLogo.forEach((logo, i) => {
      console.log(logo.id);
      
      if ( logo.firstOpponentName + " " + logo.secondOpponentName == opponentLogo) {
        let opponentImageLogo = new Image();
        opponentImageLogo.src = logo.logo;
        opponentImageLogo.width = 150;
        opponentImageLogo.height = "auto";
        console.log(opponentImageLogo.width);
        const fabricOpponentLogo = new fabric.Image(opponentImageLogo , {
          left: fabricCanvas.width/2,
          top: 400,
          originX: "center",
          originY: "center",
          selectable: false,
          className: "opponent-logo"
        }); 
        console.log(fabricOpponentLogo);
        fabricOpponentLogo.scaleToWidth(150);
        if(fabricOpponentLogo.height > 350) {
         fabricOpponentLogo.scaleToHeight(150); 
        }
        
        fabricCanvas.add(fabricOpponentLogo);  
        fabricCanvas.renderAll();
      }
    });
  }
  static addYourPlayerImage(playerImageSrc, fabricCanvas) {
    console.log(playerImageSrc);
    fabricCanvas._objects.forEach((images, i) => {
      if (fabricCanvas.item(i).className == "your-playerImage") {
        fabricCanvas.remove(fabricCanvas.item(i));
      }
    });
    const getPlayers = JSON.parse(localStorage.getItem("players"));
    console.log(getPlayers[0].id);
    getPlayers.forEach((players, i) => {
      console.log(players);
      if (players.number + " "+ players.firstPlayerName + " " + players.lastPlayerName == playerImageSrc) {
        let playerImage = new Image();
        playerImage.src = players.image;
        playerImage.width = 150;
        playerImage.height = "auto";
        console.log(playerImage.width);
        const fabricPlayerImage = new fabric.Image(playerImage , {
          left: 525,
          top: 500,
          originX: "center",
          originY: "center",
          selectable: false,
          className: "your-playerImage"
        }); 
        console.log(fabricPlayerImage);
        fabricPlayerImage.scaleToWidth(150);
        if(fabricPlayerImage.height > 350) {
         fabricPlayerImage.scaleToHeight(150); 
        }
        fabricCanvas.add(fabricPlayerImage);  
        fabricCanvas.renderAll();
      }
    });
  }
}
