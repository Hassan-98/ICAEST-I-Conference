// Window Load Scripts
window.onload = function(){
    var loader = document.querySelector('.loader'),
        heading1 = document.querySelector('.abbr'),
        heading2 = document.querySelector('.name'),
        heading3 = document.querySelector('.third'),
        button = document.querySelector('.mainButton'),
        logo = document.querySelector('.logo'),
        content = document.querySelector('.content');

    // Animations for Some Sections
    loader.style.display = 'none';
    heading1.classList.add('flipInX');
    heading2.classList.add('flipInX');
    heading3.classList.add('flipInX');
    button.classList.add('fadeInUp');
    logo.classList.add('bounceInDown');
    content.classList.add('fadeIn');

    heading1.style.animationDuration = '1.6s';
    heading2.style.animationDuration = '1.6s';
    heading3.style.animationDuration = '1.6s';
    logo.style.animationDuration = '1.4s';
    content.style.animationDuration = '2s';
    button.style.animationDuration = '1.7s';
    
    heading1.style.animationDelay = '1s';
    heading2.style.animationDelay = '1.4s';
    heading3.style.animationDelay = '1.8s';
    button.style.animationDelay = '2.2s';

}


// Owl Carousel Slider Scripts
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    smartSpeed: 900,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// Accordion Scripts
var acc = document.querySelectorAll(".accordion");
var a;

for (a = 0; a < acc.length; a++) {
  acc[a].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}