(() => {
  let theHeader = document.querySelector(".main-heading"),
      theIcons = document.querySelectorAll(".icon");

  function logElement() {
    console.log("You clicked on the", this.id,"!");
  }

  theHeader.addEventListener("click", logElement);
  theIcons.forEach(icon => icon.addEventListener("click", logElement));
})();
