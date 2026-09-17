document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const year = document.querySelector("#year");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const closeNav = () => {
    if (!navToggle || !nav) return;
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("nav-open");
  };

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const willOpen = !nav.classList.contains("open");
      nav.classList.toggle("open", willOpen);
      navToggle.setAttribute("aria-expanded", String(willOpen));
      navToggle.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
      document.body.classList.toggle("nav-open", willOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeNav();
        navToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        nav.classList.contains("open") &&
        !nav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        closeNav();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeNav();
    });
  }

  const projectVideos = document.querySelectorAll(".project-video");

  const applyMotionPreference = () => {
    projectVideos.forEach((video) => {
      if (reducedMotion.matches) {
        video.pause();
        video.removeAttribute("autoplay");
      } else if (video.hasAttribute("muted")) {
        video.setAttribute("autoplay", "");
        video.play().catch(() => {
          // Autoplay may be blocked; the poster and controls remain available.
        });
      }
    });
  };

  applyMotionPreference();

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", applyMotionPreference);
  }

  const copyEmailButton = document.querySelector("#copy-email");

  if (copyEmailButton) {
    copyEmailButton.addEventListener("click", async () => {
      const email = copyEmailButton.dataset.email;

      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const fallback = document.createElement("textarea");
        fallback.value = email;
        fallback.setAttribute("readonly", "");
        fallback.style.position = "absolute";
        fallback.style.left = "-9999px";
        document.body.appendChild(fallback);
        fallback.select();
        document.execCommand("copy");
        document.body.removeChild(fallback);
      }

      copyEmailButton.textContent = "Copied!";
      setTimeout(() => {
        copyEmailButton.textContent = "Copy email";
      }, 1600);
    });
  }

});
