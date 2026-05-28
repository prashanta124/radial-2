const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

document.getElementById("year").textContent = new Date().getFullYear();


// Research Network clickable cards
const networkTabs = document.querySelectorAll(".network-tab");
const networkDetails = document.querySelectorAll(".network-detail");

networkTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.network;

    networkTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    networkDetails.forEach((detail) => {
      detail.classList.remove("active");
    });

    const activeDetail = document.getElementById(`network-${target}`);
    if (activeDetail) {
      activeDetail.classList.add("active");
    }
  });
});


// Radial Research Network interaction
const radialNodes = document.querySelectorAll(".radial-node");
const radialDetails = document.querySelectorAll(".radial-detail");

radialNodes.forEach((node) => {
  node.addEventListener("click", () => {
    const target = node.dataset.network;

    radialNodes.forEach((item) => item.classList.remove("active"));
    node.classList.add("active");

    radialDetails.forEach((detail) => detail.classList.remove("active"));

    const activeDetail = document.getElementById(`radial-${target}`);
    if (activeDetail) {
      activeDetail.classList.add("active");
    }
  });
});
