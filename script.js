function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your table has been reserved! 🍽");
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your message has been sent! ✅");
});

