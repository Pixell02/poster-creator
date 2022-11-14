import { teamUI, Team , StoreTeam } from "./teamES6.js";

const store = new StoreTeam();

document.addEventListener("DOMContentLoaded",StoreTeam.displayTeams)
 
document.querySelector(".down-container").addEventListener("click", (e) => {
   
    let chosenTeam = e.target.id;
    localStorage.setItem("chosenTeam", JSON.stringify(chosenTeam));
   
});

const addBtn = document.querySelector(".add-Btn");
addBtn.addEventListener("click", (e) => {
  const teamUi = new teamUI();
  teamUi.openModal(e);

  // Uploading logo

  const uploadField = document.getElementById("upload");
  uploadField.addEventListener("click", (e) => {
    teamUi.uploadFile(e);
    e.preventDefault();
  });

  // Deleting logo

  document.getElementById("holder").addEventListener("click", (e) => {
    teamUi.deleteItem(e.target);
    e.preventDefault();
  });

  // Closing modal window

  const closeBtn = document.querySelector(".closeBtn");
  closeBtn.addEventListener("click", (e) => {
    teamUi.clearFields(e);
    teamUi.closeModal(e);
    e.preventDefault();
  });

  // Saving team

  const saveTeam = document.querySelector("#addTeam");
  saveTeam.addEventListener("click", (e) => {
    const firstTeamName = document.querySelector("#first-club-name").value;
    const secondTeamName = document.querySelector("#second-club-name").value;
    const logo = document.querySelector(".uploaded-file").src;
    console.log(logo);
    const team = new Team(firstTeamName, secondTeamName, logo);
    console.log(team);
    StoreTeam.addTeams(team);
    teamUi.addTeamToMainContent(team);
    teamUi.clearFields();
    teamUi.closeModal();
  });
});
