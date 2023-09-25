const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');}
    });
});


const hiddenElements = document.querySelectorAll('.hidden, .tersembunyi');
hiddenElements.forEach((el) => observer.observe(el));

// Nav Mobile
const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
} );

closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});

// Contact forn

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
    .then(()=> {
        window.location.href = './thankyou.html';
    })
    .catch((e) => alert("Error occured"));

});
