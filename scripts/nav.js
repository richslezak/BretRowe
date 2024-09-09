document.addEventListener('DOMContentLoaded', function () {
  const navToggler = document.querySelector('.nav-toggler');
  const navClose = document.querySelector('.nav-close');
  const navLinks = document.querySelector('.nav-links');
  const backdrop = document.querySelector('.backdrop');

  // Toggle nav-links when clicking on nav-toggler
  if (navToggler) {
    navToggler.addEventListener('click', function (event) {
      event.stopPropagation();
      navLinks.classList.toggle('expanded');
      backdrop.classList.toggle('show');
    });
  }

  // Toggle nav-links when clicking on nav-close
  if (navClose) {
    navClose.addEventListener('click', function (event) {
      event.stopPropagation();
      navLinks.classList.toggle('expanded');
      backdrop.classList.toggle('show');
    });
  }

  // Close nav-links when clicking on the backdrop
  if (backdrop) {
    backdrop.addEventListener('click', function () {
      navLinks.classList.remove('expanded');
      backdrop.classList.remove('show');
    });
  }

  // Prevent closing when clicking inside the nav-links
  navLinks.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});
