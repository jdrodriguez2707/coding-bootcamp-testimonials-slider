"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#slider");
  slider.addEventListener("click", changeTestimonial);
  document.addEventListener("keydown", changeTestimonial);
});

function changeTestimonial(event) {
  const tanyaProfileImage = document.querySelector("#tanya-profile-image");
  const tanyaTestimonial = document.querySelector("#tanya-testimonial");
  const tanyaName = document.querySelector("#tanya-name");
  const tanyaRole = document.querySelector("#tanya-role");

  const johnProfileImage = document.querySelector("#john-profile-image");
  const johnTestimonial = document.querySelector("#john-testimonial");
  const johnName = document.querySelector("#john-name");
  const johnRole = document.querySelector("#john-role");

  if (
    (event.target.id === "next" || event.key === "ArrowRight") &&
    !tanyaProfileImage.classList.contains("inactive")
  ) {
    tanyaProfileImage.classList.add("inactive");
    johnProfileImage.classList.remove("inactive");
    johnProfileImage.classList.add("fade-in");

    tanyaTestimonial.classList.add("inactive");
    johnTestimonial.classList.remove("inactive");
    johnTestimonial.classList.add("fade-in");

    tanyaName.classList.add("inactive");
    johnName.classList.remove("inactive");
    johnName.classList.add("fade-in");

    tanyaRole.classList.add("inactive");
    johnRole.classList.remove("inactive");
    johnRole.classList.add("fade-in");
  } else if (
    (event.target.id === "prev" || event.key === "ArrowLeft") &&
    !johnProfileImage.classList.contains("inactive")
  ) {
    johnProfileImage.classList.add("inactive");
    tanyaProfileImage.classList.remove("inactive");
    tanyaProfileImage.classList.add("fade-in");

    johnTestimonial.classList.add("inactive");
    tanyaTestimonial.classList.remove("inactive");
    tanyaTestimonial.classList.add("fade-in");

    johnName.classList.add("inactive");
    tanyaName.classList.remove("inactive");
    tanyaName.classList.add("fade-in");

    johnRole.classList.add("inactive");
    tanyaRole.classList.remove("inactive");
    tanyaRole.classList.add("fade-in");
  }
}
