const creator = document.getElementById("create-poster");

creator.addEventListener("click", openCreator);

function openCreator(e) {
  window.location.href = "kreator.html";

  e.preventDefault();
}
