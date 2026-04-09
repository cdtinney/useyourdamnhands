const scenarios = [
  {
    title: "Lettuce Knife",
    toolImage: "images/lettuce-knife.svg"
  },
  {
    title: "The Herb Scissors",
    toolImage: "images/herb-scissors.svg"
  },
  {
    title: "The Strawberry Huller",
    toolImage: "images/strawberry-huller.svg"
  },
  {
    title: "The Letter Opener",
    toolImage: "images/letter-opener.svg"
  },
  {
    title: "The Sock Folder",
    toolImage: "images/sock-folder.svg"
  },
  {
    title: "The Toothpaste Squeezer",
    toolImage: "images/toothpaste-squeezer.svg"
  },
  {
    title: "The Book Page Holder",
    toolImage: "images/book-page-holder.svg"
  },
  {
    title: "The Package Opener",
    toolImage: "images/package-opener.svg"
  },
  {
    title: "The Can Crusher",
    toolImage: "images/can-crusher.svg"
  }
];

const HANDS_IMAGE = "images/human-hands.jpg";

const main = document.getElementById("scenarios");

scenarios.forEach(s => {
  const section = document.createElement("section");
  section.className = "scenario";
  section.innerHTML = `
    <h2 class="scenario-title">${s.title}</h2>
    <div class="comparison">
      <div class="panel wrong">
        <div class="image-wrapper">
          <img src="${s.toolImage}" alt="${s.title}">
          <svg class="overlay-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="20" y1="20" x2="80" y2="80" stroke="#e53e3e" stroke-width="12" stroke-linecap="round"/>
            <line x1="80" y1="20" x2="20" y2="80" stroke="#e53e3e" stroke-width="12" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
      <div class="panel right">
        <div class="image-wrapper">
          <img src="${HANDS_IMAGE}" alt="Your bare hands">
          <svg class="overlay-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polyline points="20,55 40,75 80,25" fill="none" stroke="#38a169" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  `;
  main.appendChild(section);
});
