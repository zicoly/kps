const sr = ScrollReveal({
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
  reset: false,
});

sr.reveal('.about', {
  origin: 'left',
  delay: 200,
  distance: '100px',
});

sr.reveal('.facilities', {
  origin: 'right',
  delay: 400,
  interval: 200,
});

sr.reveal('.cta', {
  origin: 'bottom',
  delay: 600,
  distance: '50px',
});

sr.reveal('.glance', {
  origin: 'top',
  delay: 800,
  distance: '100px',
  duration: 1500,
});

sr.reveal('.facilities:nth-of-type(2)', {
  origin: 'left',
  delay: 1000,
  interval: 300,
});

sr.reveal('.course', {
  origin: 'right',
  delay: 1200,
  distance: '50px',
});

sr.reveal('.campus', {
  origin: 'bottom',
  delay: 1400,
  distance: '80px',
  duration: 1200,
});

sr.reveal('.testimonials', {
  origin: 'top',
  delay: 1600,
  distance: '50px',
  interval: 400,
});

sr.reveal('.about .about-container', { interval: 200, origin: 'bottom' });
sr.reveal('.course .row-container .course-col', {
  interval: 200,
  origin: 'right',
});
sr.reveal('.campus .row-container .campus-col', {
  interval: 300,
  origin: 'bottom',
  distance: '40px',
});
sr.reveal('.testimonials .row-container .testimonial-col', {
  interval: 200,
  origin: 'top',
});

sr.reveal('.footer', {
  origin: 'left',
  distance: '50px',
  duration: 1500,
  delay: 300,
});

// About Us section reveal
sr.reveal('.about-us .row-container .about-col', {
  origin: 'left',
  interval: 300,
  distance: '50px',
  delay: 200,
});

// About Banner section reveal
sr.reveal('.about__banner', {
  origin: 'bottom',
  delay: 400,
  distance: '50px',
});

// Vision section reveal
sr.reveal('.vision__container .vision__left', {
  origin: 'left',
  delay: 600,
  distance: '50px',
});

sr.reveal('.vision__container .vision_right', {
  origin: 'right',
  delay: 600,
  distance: '50px',
});

// Footer reveal
sr.reveal('.main-footer', {
  origin: 'bottom',
  distance: '50px',
  duration: 1500,
  delay: 200,
});

sr.reveal('.aims', {
  origin: 'top',
  delay: 800,
  distance: '100px',
  duration: 1500,
});

sr.reveal('.curriculum', {
  origin: 'right',
  delay: 400,
  interval: 200,
});

sr.reveal('.blog-content', {
  origin: 'top',
  delay: 800,
  distance: '100px',
  duration: 1500,
});

sr.reveal('.blog-content-1', {
  origin: 'right',
  delay: 1000,
  distance: '100px',
  duration: 1500,
});

sr.reveal('.admission', {
  origin: 'top',
  delay: 800,
  distance: '100px',
  duration: 1500,
});

sr.reveal('.contact-us', {
  origin: 'top',
  delay: 800,
  distance: '100px',
  duration: 1500,
});
