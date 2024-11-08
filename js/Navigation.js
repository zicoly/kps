document.addEventListener('DOMContentLoaded', function () {
  const navigation = document.getElementById('navigation');
  const navLists = document.querySelectorAll('.nav-list a');
  const scrollThreshold = 10;

  window.addEventListener('scroll', function () {
    if (window.scrollY > scrollThreshold) {
      navigation.classList.add('scrolled');
      setTimeout(() => {
        navigation.classList.add('show');
      }, 100);
      navLists.forEach((list) => {
        list.classList.add('scrolled');
      });
    } else {
      navigation.classList.remove('show');
      setTimeout(() => {
        navigation.classList.remove('scrolled');
      }, 100);
      navLists.forEach((list) => {
        list.classList.remove('scrolled');
      });
    }
  });
});

