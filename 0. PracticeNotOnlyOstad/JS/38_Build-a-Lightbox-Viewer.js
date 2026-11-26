const gallery = document.querySelector(".gallery");
const galleryItem = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const button = document.getElementById("close-btn");
const lightboxImage = document.getElementById("lightbox-image");

gallery.addEventListener("click", (event) => {
  lightbox.style.display = "flex";
  lightboxImage.src = event.target.src.replace("-thumbnail", "");
});

if (lightbox.style.display !== "none") {
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}
