document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stats-number");
  const speed = 500; // Szybkość animacji (im większa wartość, tym wolniejsza animacja)

  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace("+", "").replace("K", ""); // Usunięcie "+" i "K" dla obliczeń
      const increment = target / speed; // Obliczenie wartości przyrostu

      if (count < target) {
        counter.innerText =
          Math.ceil(count + increment) + (target === 17 ? "K" : "+");
        setTimeout(updateCounter, 20); // Odświeżanie co 20ms
      } else {
        counter.innerText = target + (target === 17 ? "K" : "+"); // Dodanie odpowiedniego sufiksu
      }
    };

    // IntersectionObserver - uruchamianie animacji tylko wtedy, gdy element jest widoczny
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(counter); // Przestanie obserwować po uruchomieniu animacji
          }
        });
      },
      { threshold: 0.5 } // Animacja rozpoczyna się, gdy element jest w 50% widoczny
    );

    observer.observe(counter);
  });
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

document.addEventListener("DOMContentLoaded", () => {
  // Pobranie elementów do animacji
  const elements = document.querySelectorAll(".fade-in, .card, .hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("scrollToOffer");
  const offerSection = document.getElementById("offer");

  button.addEventListener("click", () => {
    offerSection.scrollIntoView({
      behavior: "smooth", // Płynne przewijanie
      block: "start", // Przewinięcie do początku sekcji
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".contact-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "kontakt.html"; // Przekierowanie
    });
  });
});
