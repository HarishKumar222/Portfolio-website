function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openVideoModal() {
  document.getElementById("videoModal").style.display = "block";
}

function closeVideoModal() {
  document.getElementById("videoModal").style.display = "none";
  const video = document.getElementById("demoVideo");
  video.pause();
  video.currentTime = 0;
}

