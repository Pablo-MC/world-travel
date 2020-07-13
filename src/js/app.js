// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('.tours-animation-left', {
   duration: 4000
});

sr.reveal('.tours-animation-right', {
   duration: 3000,
   origin: 'rigth',
   distance: '300px'
});


// delay: 1000    -> produce un retraso de 1segundo.
// viewFactor: 0.2  -> ???




// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
      });
   });
});
