export class poster {
  constructor(
    yourTeamName,
    yourTeamLogo,
    yourTeamPlayer,
    opponentTeamName,
    opponentTeamlogo
  ) {
    this.yourTeamName = yourTeamName;
    this.yourTeamLogo = yourTeamLogo;
    this.yourTeamPlayer = yourTeamPlayer;
    this.opponentTeamName = opponentTeamName;
    this.opponentTeamLogo = opponentTeamLogo;
  }
}
export class posterUI {
  static loadData() {
    const WIDTH = 700;
    const canvas = document.getElementById("poster-edit");
    canvas.width = WIDTH;
    canvas.height = WIDTH;
    console.log(canvas.height);
    const fabricCanvas = new fabric.Canvas(canvas);
    document.getElementsByClassName("canvas-container")[0].style.width =
      "700px";
    document.getElementsByClassName("canvas-container")[0].style.height =
      "700px";
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
    
    // posterUI.choosePlayer(e);
    return fabricCanvas;
  }
   writeYourTeamName(e, yourTeamInput) {
    const WIDTH = 700;
    const yourTeamValue = yourTeamInput;
    const fabricCanvas = posterUI.loadData();
    let objects = fabricCanvas._objects;

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

    const text = new fabric.Text(yourTeamValue.value, {
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
  uploadYourLogo() {}
  choosePlayer() {}
  changeYourTeamNameColor() {}
  uploadOpponentTeamLogo() {}
}
