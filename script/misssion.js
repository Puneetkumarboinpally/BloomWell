const missionProducts = [
  {
    img: "🔬",
    title: "Evidence-First",
    desc: "We cite sources, link to studies, and update articles when new research emerges. Science changes — our content keeps up.",
  },
  {
    img: "🤝",
    title: "Shame-Free",
    desc: "Wellness isn't a competition. We write for real people with real lives — not for athletes, influencer, or people with infinite time.",
  },
  {
    img: "🚫",
    title: "No Sponsored Content",
    desc: "We are entirely reader-supported. We never accept payment to recommend products, supplements, or services. Ever.",
  },
  {
    img: "💬",
    title: "Plain Language",
    desc: "We translate complex science into clear, friendly language — without dumbing it down. You deserve the full picture.",
  },
  {
    img: "🌍",
    title: "Accessible",
    desc: "Our core content is free, always. The newsletter is free. We believe health information should not be locked behind a paywall.",
  },
  {
    img: "🔄",
    title: "Kept Up to Date",
    desc: "Health advice that was correct five years ago may not be correct today. We review and revise our most-read pieces regularly.",
  },
];

const missionGrid = document.querySelector(".mission-grid");

missionProducts.forEach((mission) => {
  missionGrid.innerHTML += `<div class="mission-card">
              <span class="card-image">${mission.img}</span>
              <h2 class="mission-card-title">${mission.title}</h2>
              <p class="mission-card-desc">
                ${mission.desc}
              </p>
            </div>`;
});
