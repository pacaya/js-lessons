const selectors = ["form", ".todo-list", ".todo-app", "body"];

selectors.forEach((selector) =>
  document
    .querySelector(selector)
    .addEventListener("click", (e) =>{
      console.log(`${selector} event '${e.type}' on`, e.target)
    }
    )
);
