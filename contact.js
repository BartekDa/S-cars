// Inicjalizacja EmailJS
emailjs.init("GLHXZvwwzzZRsCbzW"); // Twój Public Key

// Obsługa formularza
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Zatrzymaj domyślne działanie formularza

  emailjs.sendForm("service_1lyheom", "template_z90w3rg", this).then(
    function () {
      alert("Wiadomość została wysłana pomyślnie!");
      document.getElementById("contactForm").reset(); // Wyczyść formularz
    },
    function (error) {
      alert("Wystąpił błąd podczas wysyłania wiadomości: " + error.text);
    }
  );
});
document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".navbar-toggler");
  const menu = document.querySelector(".navbar-menu");

  if (toggler && menu) {
    toggler.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  } else {
    console.error("Navbar toggler or menu not found!");
  }
});
