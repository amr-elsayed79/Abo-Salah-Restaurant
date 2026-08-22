/* ========================================
   Abo Salah Restaurant
   Menu & Offers Gallery
======================================== */


/* ========================================
   Gallery Elements
======================================== */

const viewer = document.createElement("div");

viewer.className = "image-viewer";

viewer.innerHTML = `
    <button class="close-viewer" aria-label="إغلاق">×</button>

    <button class="prev-image" aria-label="الصورة السابقة">❮</button>

    <img class="viewer-image" src="" alt="">

    <button class="next-image" aria-label="الصورة التالية">❯</button>

    <div class="image-counter"></div>
`;

document.body.appendChild(viewer);


/* ========================================
   Gallery Variables
======================================== */

let currentImages = [];
let currentIndex = 0;


/* ========================================
   Open Gallery
======================================== */

function openGallery(images) {

    if (!images || images.length === 0) {
        return;
    }

    currentImages = images;
    currentIndex = 0;

    showImage();

    viewer.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* ========================================
   Show Current Image
======================================== */

function showImage() {

    const image = viewer.querySelector(".viewer-image");
    const counter = viewer.querySelector(".image-counter");

    image.src = currentImages[currentIndex];

    image.alt = `صورة ${currentIndex + 1}`;

    counter.textContent =
        `${currentIndex + 1} / ${currentImages.length}`;
}


/* ========================================
   Close Gallery
======================================== */

function closeGallery() {

    viewer.classList.remove("active");

    document.body.style.overflow = "";

}


/* ========================================
   Next Image
======================================== */

function nextImage() {

    if (currentImages.length <= 1) {
        return;
    }

    currentIndex++;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    showImage();
}


/* ========================================
   Previous Image
======================================== */

function previousImage() {

    if (currentImages.length <= 1) {
        return;
    }

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    showImage();
}


/* ========================================
   Close Button
======================================== */

viewer
    .querySelector(".close-viewer")
    .addEventListener("click", closeGallery);


/* ========================================
   Next Button
======================================== */

viewer
    .querySelector(".next-image")
    .addEventListener("click", nextImage);


/* ========================================
   Previous Button
======================================== */

viewer
    .querySelector(".prev-image")
    .addEventListener("click", previousImage);


/* ========================================
   Click Outside Image
======================================== */

viewer.addEventListener("click", function (event) {

    if (event.target === viewer) {
        closeGallery();
    }

});


/* ========================================
   Keyboard Controls
======================================== */

document.addEventListener("keydown", function (event) {

    if (!viewer.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeGallery();
    }

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }

});



/* ========================================
   Menu Button
======================================== */

const menuButton = document.querySelector(
    '.main-button[href="#menu"]'
);

if (menuButton) {

    menuButton.addEventListener("click", function (event) {

        event.preventDefault();

        openGallery(menuImages);

    });

}


/* ========================================
   Offers Button
======================================== */

const offerButton = document.querySelector(
    '.offers-button'
);

if (offerButton) {

    offerButton.addEventListener("click", function (event) {

        event.preventDefault();

        openGallery(offersImages);

    });

}