"use strict";

// use document.querySelectorAll to select multiple elements with same class name

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

/**
 * Working with classes
 * Use .classList.(action) to perform certain action on an element's class
 * such as add class, remove class, etc
 * example: .classList.remove(className)
 * In practice, developers add and remove classes all the time in order to change the appearance of elements on our page.
 * In essence, you can activate or deactivate styles at the same time
 * Classes allow use to aggregate multiple CSS property just like a container
 */

// You can treat variables set with document.querySelectorAll as an array

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

/**
 * Handling Keyboard events
 * Keyboard presses are global events because they do not happen on one specific element
 * For global events, we listen on the whole document thus we have to use
 * document.addEventListener
 */
/**
 * There are 3 types of key events for the keyboard
 * 1) keydown (when clicking the button)
 * 2) keypress (when holding the button)
 * 3) keyup (when letting go of the button)
 */
/**
 * The information about which key was pressed will be stored in the event that is gonna occur as soon
 * as any key is pressed. Any time an event occurs, JS generates an object and that object contains all
 * the information about the event itself and we can access that object in the event handler function.
 * This is how we will know which key is pressed
 */

// JS will call the function with the event object as an argument

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
