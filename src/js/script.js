// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('.tours-animation-left', {
   duration: 3000
});

sr.reveal('.tours-animation-right', {
   duration: 4000,
   origin: 'rigth',
   distance: '300px'
});

sr.reveal('.button-animation', {
   duration: 3000
});

sr.reveal('.testimonial-animation', {
   duration: 4000,
   origin: 'rigth',
   distance: '300px'
});


// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
      });
   });
});


// SCROLL TOP
window.addEventListener('scroll', function () {
   var scroll = document.querySelector('.scrollTop');
      scroll.classList.toggle('active', window.scrollY > 500)
});

function scrollToTop () {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}
