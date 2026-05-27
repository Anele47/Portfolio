// ===============================
// PORTFOLIO WEBSITE JAVASCRIPT
// ===============================

// Navbar scroll effect
//const navbar = document.querySelector(".navbar");

//window.addEventListener("scroll", () => {
  //if (window.scrollY > 1) {
   // navbar.style.background = "#000";
   // navbar.style.boxShadow = "0 2px 15px rgba(255,105,180,0.4)";
    //navbar.style.transition = "0.3s";
  //} else {
   // navbar.style.background = "#111";
    //navbar.style.boxShadow = "none";
 // }
//});


// ===============================
// SMOOTH SCROLL NAVIGATION
// ===============================

//const navLinks = document.querySelectorAll(".nav-links a");

//navLinks.forEach(link => {
  //link.addEventListener("click", function (e) {
    //e.preventDefault();

    //const targetId = this.getAttribute("href").replace("#", "");
    //const targetSection = document.getElementById(targetId);

   // if (targetSection) {
      //targetSection.scrollIntoView({
      //  behavior: "smooth"
      //});
   // }
  //});
//});


// ===============================
// DOWNLOAD CV BUTTON
// ===============================

const downloadBtn = document.querySelector(".download-btn");

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");

  // Replace with your CV file name
  link.href = "Anele_Lukhele_CV.pdf";

  // Download file name
  link.download = "Anele_Lukhele_CV.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


// ===============================
// VIEW PROJECT BUTTON
// ===============================

const projectButton = document.querySelector(".projects");

if (projectButton) {
  projectButton.addEventListener("click", () => {
    const projectsSection = document.querySelector(".projectcontainer");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}


// ===============================
// CONTACT BUTTON
// ===============================

const contactButton = document.querySelector(".contact");

if (contactButton) {
  contactButton.addEventListener("click", () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Message sent successfully!");

  contactForm.reset();
});


// ===============================
// SKILL BAR ANIMATION
// ===============================

window.addEventListener("load", () => {

  document.querySelector(".html").style.width = "85%";

  document.querySelector(".css").style.width = "75%";

  document.querySelector(".javascript").style.width = "45%";

  document.querySelector(".java").style.width = "50%";

  document.querySelector(".git").style.width = "40%";

});


// ===============================
// FADE IN ANIMATION
// ===============================

//const sections = document.querySelectorAll("section, .homesection, .aboutsection, .skillssection");

//window.addEventListener("scroll", () => {

  //sections.forEach(section => {

    //const sectionTop = section.getBoundingClientRect().top;

    //if (sectionTop < window.innerHeight - 100) {
      //section.style.opacity = "1";
     // section.style.transform = "translateY(0)";
     // section.style.transition = "all 1s ease";
    //}

 // });

//});


// Initial hidden state
//sections.forEach(section => {
  //section.style.opacity = "0";
  //section.style.transform = "translateY(50px)";
//});