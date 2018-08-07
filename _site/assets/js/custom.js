


// Scrollspy
$('body').scrollspy({ 
  target: '.list-group'
})


// Sticky
var sticky = new Sticky('#list-group-work, #list-group-process, #list-group-services, #list-group-portfolio, #list-group-team');


// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 2000, 
	clip: true,
	easing: 'easeInOutCubic'
});
