console.log("hello js :)");
function createModal(config) {
  //create modal
  const modal = document.createElement("div");
  modal.classList.add("modal");
  //create modal container
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  modal.appendChild(modalContainer);
  //create modal header
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("header");
  modalHeader.innerHTML = config.title;
  modalContainer.appendChild(modalHeader);
  //create modal body
  const modalBody = document.createElement("div");
  modalBody.classList.add("body");
  modalBody.innerHTML = config.message;
  modalContainer.appendChild(modalBody);
  document.querySelector("body").appendChild(modal);
}

createModal({
  title: "welcome",
  message: "hello from modal, this is a test for modal message",
});
