// this is a self-invoking anonymous function
// it's called the module pattern
// this is how you will start every js file
// all js will be written inside the curly brackets
// it encapsulates all of your custom code and makes it private
(() => {
  // go into html and make a reference to an element that you want to work with
  let theHeader = document.querySelector(".main-heading"),
      theIcons = document.querySelectorAll(".icon");
  // script behaviour with functions
  function logElement() {
    console.log("You clicked on the", this.id,"!");
  }
  // listen for a user event, and then do something
  // the "do something" is the function we run when the element is clicked
  theHeader.addEventListener("click", logElement);
  // loop through all the icons and add event handling to them
  // process each icon one at a time and add behaviour
  theIcons.forEach(icon => icon.addEventListener("click", logElement));
})();
