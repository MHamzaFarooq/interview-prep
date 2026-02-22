document
  .querySelector("#openModalButton1")
  .addEventListener("click", function () {
    document.querySelector("#modal1").style.display = "block";
    document.querySelector("body").style.backgroundColor = "lightgray";
  });
document.querySelector("#closeModal").addEventListener("click", function () {
  document.querySelector("#modal1").style.display = "none";
  document.querySelector("body").style.backgroundColor = "white";
});
