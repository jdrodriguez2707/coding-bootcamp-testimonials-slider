"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#slider");
  slider.addEventListener("click", changeTestimonial);
  document.addEventListener("keydown", changeTestimonial);

  let currentIndex = 0;
  const testimonials = [
    {
      profileImage: document.querySelector("#tanya-profile-image"),
      testimonial: document.querySelector("#tanya-testimonial"),
      name: document.querySelector("#tanya-name"),
      role: document.querySelector("#tanya-role"),
    },
    {
      profileImage: document.querySelector("#john-profile-image"),
      testimonial: document.querySelector("#john-testimonial"),
      name: document.querySelector("#john-name"),
      role: document.querySelector("#john-role"),
    },
  ];

  let changeSliderInterval;

  function changeTestimonial(event) {
    // Check if the event is a click on the next or prev button
    const isNext = event?.target.id === "next" || event?.key === "ArrowRight";
    const isPrev = event?.target.id === "prev" || event?.key === "ArrowLeft";

    if (isNext || isPrev || event === undefined) {
      // Hide the current testimonial and show the next or previous one on the slider
      testimonials[currentIndex].profileImage.classList.add("inactive");
      testimonials[currentIndex].testimonial.classList.add("inactive");
      testimonials[currentIndex].name.classList.add("inactive");
      testimonials[currentIndex].role.classList.add("inactive");

      // Calculate the index of the next or previous testimonial
      if (isNext || event === undefined) {
        currentIndex = (currentIndex + 1) % testimonials.length;
      } else if (isPrev) {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      }

      // Show the next or previous testimonial on the slider
      testimonials[currentIndex].profileImage.classList.remove("inactive");
      testimonials[currentIndex].testimonial.classList.remove("inactive");
      testimonials[currentIndex].name.classList.remove("inactive");
      testimonials[currentIndex].role.classList.remove("inactive");

      // Add fade-in class to animate the testimonial just after it's shown
      testimonials[currentIndex].profileImage.classList.add("fade-in");
      testimonials[currentIndex].testimonial.classList.add("fade-in");
      testimonials[currentIndex].name.classList.add("fade-in");
      testimonials[currentIndex].role.classList.add("fade-in");
    }

    resetInterval();
  }

  function resetInterval() {
    clearInterval(changeSliderInterval);
    changeSliderInterval = setInterval(changeTestimonial, 12000);
  }

  // Configure the interval to change the testimonial automatically
  resetInterval();
});


