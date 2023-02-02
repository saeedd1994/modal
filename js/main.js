function createModal(config) {
  //create modal
  const modal = document.createElement("div");
  modal.classList.add("modal");
  //create modal background
  const modalBg = document.createElement("div");
  modalBg.classList.add("background");
  modal.appendChild(modalBg);
  modalBg.onclick = () => modal.remove();
  //create modal container
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  //create modal header
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("header");
  modalHeader.innerHTML = config.title;
  modalContainer.appendChild(modalHeader);
  // create close btn
  const btn = document.createElement("button");
  btn.innerHTML = "&times;";
  btn.classList.add("pointer");
  modalHeader.appendChild(btn);
  // close modal functionality
  btn.onclick = () => {
    modal.remove();
  };
  //create modal body
  const modalBody = document.createElement("div");
  modalBody.classList.add("body");
  modalBody.innerHTML = config.message;
  modalContainer.appendChild(modalBody);
  modal.appendChild(modalContainer);
  document.body.appendChild(modal);
  //remove modal with escape
  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      modal.remove();
    }
  });
}

document.getElementById("modal-1").onclick = () =>
  createModal({
    title: "welcome",
    message: "hello from modal",
  });
