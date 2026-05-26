const teamProducts = [
  {
    icon: "🌱",
    imgBg: "var(--green-100)",
    bdColor: "var(--green-300)",
    name: "Priya Sharma",
    designation: "Editor in Chief",
    desc: "Former health journalist at The Guardian. Nutritional science degree, 12 years writing about wellness.",
  },
  {
    icon: "🧠",
    imgBg: "var(--sky-bg)",
    bdColor: "var(--sky-bd)",
    name: "Dr. James Okafor",
    designation: "Medical Reviewer",
    desc: "GP and integrative medicine specialist. Reviews all health and medical content before publication.",
  },
  {
    icon: "🥗",
    imgBg: "var(--peach-bg)",
    bdColor: "var(--peach-bd)",
    name: "Lena Fischer",
    designation: "Nutrition Editor",
    desc: "Registered dietitian with a focus on gut health and sports nutrition. Based in Berlin.",
  },
  {
    icon: "🏃",
    imgBg: "var(--sun-bg)",
    bdColor: "var(--sun-bd)",
    name: "Marcus Tay",
    designation: "Movement Editor",
    desc: "Certified personal trainer and physiotherapist. Specialises in accessible fitness for all abilities.",
  },
  {
    icon: "😌",
    imgBg: "var(--rose-bg)",
    bdColor: "var(--rose-bd)",
    name: "Aoife Brennan",
    designation: "Mind Editor",
    desc: "MSc Clinical Psychology, accredited CBT therapist. Translates mental health research into everyday tools.",
  },
  {
    icon: "✍️",
    imgBg: "var(--lilac-bg)",
    bdColor: "var(--lilac-bd)",
    name: "Tom Reeves",
    designation: "Senior Writer",
    desc: "Science communicator and former NHS comms lead. Makes complex topics genuinely enjoyable to read.",
  },
];

const teamsGrid = document.querySelector(".teams-grid");

teamProducts.forEach((team) => {
  teamsGrid.innerHTML += `  <div class="teams-card">
              <div
                class="teams-icon"
                style="
                  background-color: ${team.imgBg};
                  border-color: ${team.bdColor};
                ">
                ${team.icon}
              </div>
              <h2 class="teams-name">${team.name}</h2>
              <h3 class="teams-design">${team.designation}</h3>
              <p class="teams-desc">${team.desc}
              </p>
            </div>`;
});
