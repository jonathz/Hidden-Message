document
  .querySelector("#button_flip")
  .addEventListener("click", firstButtonPressed);
document
  .querySelector("#button_decypher")
  .addEventListener("click", secondButtonPressed);
function firstButtonPressed() {
  if (
    document.querySelector("#riddleId").style.transform == "rotateY(180deg)"
  ) {
    console.log("entro en condicional");
    document.querySelector("#riddleId").style.transform = "none";
  } else {
    document.querySelector("#riddleId").style.transform = "rotateY(180deg)";
  }
  document.querySelector(".message1").style.display = "none";
  document.querySelector(".message2").style.display = "block";
}
function secondButtonPressed() {
  document.querySelector(".message2").style.display = "none";
  document.querySelector(".message3").style.display = "block";
  document.querySelector(".message4").style.display = "block";
  document.querySelector(".buttonContainer").style.display = "none";
}
