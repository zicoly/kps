(function ($) {
  // Begin jQuery
  $(function () {
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery

// Image Viewer
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openfullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}
function closeFullImg() {
  fullImgBox.style.display = "none";
}

// BACK TO TOP MENU

// const backToTopBtn = document.getElementById("backToTopBtn");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     backToTopBtn.style.display = "block";
//   } else {
//     backToTopBtn.style.display = "none";
//   }
// });

// backToTopBtn.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

document.addEventListener('DOMContentLoaded', function () {
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// POPUP COVER
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("close-button");

  // Function to open the popup
  function openPopup() {
    overlay.style.display = "block";
    popup.style.display = "block";
  }

  // Function to close the popup
  function closePopup() {
    overlay.style.display = "none";
    popup.style.display = "none";
  }

  // Event listener for opening the popup
  openPopup();

  // Event listener for closing the popup when the close button is clicked
  closeButton.addEventListener("click", closePopup);

  // Event listener for closing the popup when the overlay is clicked
  overlay.addEventListener("click", closePopup);
});
