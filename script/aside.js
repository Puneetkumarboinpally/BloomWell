import { browseTags } from "./featureCard.js";

const browseTagsContainer = document.querySelector(".browse-grid");

browseTags.forEach((tag) => {
  const button = document.createElement("button");
  button.textContent = tag;
  button.classList.add("tag-btn");

  browseTagsContainer.appendChild(button);
});
