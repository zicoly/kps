document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav-list');
  const dropdownLinks = document.querySelectorAll('.nav-list > li > a');

  navToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
  });

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      const dropdown = link.nextElementSibling;
      if (dropdown && dropdown.classList.contains('nav-dropdown')) {
        event.preventDefault();
        if (dropdown.style.height && dropdown.style.height !== '0px') {
          dropdown.style.height = '0px';
        } else {
          dropdown.style.height = `${dropdown.scrollHeight}px`;
        }
      }
    });
  });
});
