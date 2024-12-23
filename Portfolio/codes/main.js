// Toggle navigation menu
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  // Add or remove the "active" class
  menuBtn.classList.toggle("active");
}


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}


var typingEffect = new Typed(".typedText", {
  strings: ["Reneboy", "Mangaliwan"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
});

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name', {delay: 100})
sr.reveal('.featured-text-info', {delay: 200})
sr.reveal('.featured-text-btn', {delay: 200})
sr.reveal('.social_icons', {delay: 200})
sr.reveal('.featured-image', {delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 });

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', {delay: 100})
srRight.reveal('.form-control', {delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive);


/* ----- IMAGE CHANGE EVERY 3 SECONDS WITH TRANSITION ----- */

// Array of image sources


// Function to change the image every 3 seconds
function changeImage() {
  var imageElement = document.getElementById("image");

  // Fade out current image
  imageElement.classList.add("fade-out");

  // After fade-out completes, change the image and fade in
  setTimeout(function() {
    // Update the image src to the next one in the array
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    imageElement.src = imageSources[currentImageIndex];

    // Trigger the fade-in
    imageElement.classList.remove("fade-out");
    imageElement.classList.add("fade-in");
  }, 500); // Delay for fade-out before changing the image
}

// Change the image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);
