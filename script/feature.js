import { productCards } from "./featureCard.js";

const featureCard = document.querySelector(".feature-card");
const categoryContainer = document.querySelector(".category-container");
const articleGrid = document.querySelector(".article-grid");

// ── RENDER FEATURE CARD ────────────────────────────────────
export function renderFeatureCard(card) {
  featureCard.innerHTML = `
    <div class="feature-card">
      <div class="feature-image-section" style="background-color:${card.imgBg};">
        <div class="feature-image-inner">${card.emoji}</div>
        <span class="feature-card-tag">${card.tag}</span>
      </div>
      <div class="feature-body-container">
        <h2 class="feature-header">${card.title}</h2>
        <p class="feature-desc">${card.excerpt}</p>
      </div>
      <div class="feature-meta-container">
        <div class="feat-author">
          <div class="meta-initials">${card.authorInitials}</div>
          <span class="meta-author-name">${card.authorName}</span>
        </div>
        <span class="meta-read-time">${card.readTime}</span>
        <span class="meta-date">${card.date}</span>
      </div>
    </div>`;
}

// show first card by default
renderFeatureCard(productCards[0]);

// ── CATEGORY PILLS ─────────────────────────────────────────
const categories = ["All Topics", ...new Set(productCards.map((p) => p.tag))];

categories.forEach((cat) => {
  const button = document.createElement("button");
  button.textContent = cat;
  button.classList.add("cat-pill");
  const match = productCards.find((p) => p.tag === cat);
  if (match) {
    button.style.backgroundColor = match.tagColors.bg;
    button.style.borderColor = match.tagColors.border;
    button.style.color = match.tagColors.text;
  }

  button.addEventListener("click", () => {
    renderFeatureCard();
  });

  categoryContainer.appendChild(button);
});

// ── ARTICLE GRID ───────────────────────────────────────────
productCards.forEach((article) => {
  const card = document.createElement("div");
  card.classList.add("article-card");
  card.innerHTML = `
    <div class="article-image-section"
      style="background-color:${article.tagColors.bg}; 
      border-color:${article.tagColors.border};">
      <div class="article-image-inner">${article.emoji}</div>
    </div>
    <div class="article-body-section">
      <h2 class="article-tag" 
      style="color:${article.tagColors.text};">${article.tag}</h2>
      <p class="article-title">${article.title}</p>
      <p class="article-read-time">${article.readTime}</p>
    </div>`;

  card.addEventListener("click", () => renderFeatureCard(article));

  articleGrid.appendChild(card);
});
