/*
==========================================================
STAVREV.SKI
Interaction Layer
Version 1.0
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const sections = document.querySelectorAll(".section, .hero, .contact");

  /* ======================================
     Reveal animations
  ====================================== */

  sections.forEach(section => {
    section.classList.add("fade-in");
  });

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },

    {
      threshold: 0.12
    }

  );

  sections.forEach(section => observer.observe(section));

  /* ======================================
     Navbar scroll state
  ====================================== */

  function updateHeader() {

    if (window.scrollY > 20) {

      header.style.borderBottomColor = "rgba(255,255,255,.08)";
      header.style.background = "rgba(9,9,11,.82)";

    } else {

      header.style.borderBottomColor = "transparent";
      header.style.background = "rgba(9,9,11,.70)";

    }

  }

  updateHeader();

  window.addEventListener("scroll", updateHeader);

  /* ======================================
     Mobile navigation
  ====================================== */

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      navLinks.classList.toggle("open");

    });

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

      });

    });

  }

});