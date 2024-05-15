let themeNode = document.querySelector("#theme");
let bodyNode = document.querySelector("body");
let headerNode = document.querySelector(".sticky-header");
let imgHermitageNode = document.querySelector("#img-hermitage");
let imgSaviorNode = document.querySelector("#img-savior");
let imgFortressNode = document.querySelector("#img-fortress");
let count = 0;

themeNode.addEventListener("click", function () {
    bodyNode.classList.toggle("dark-body");
    headerNode.classList.toggle("dark-header");
    if (count % 2 == 0) {
        imgHermitageNode.innerHTML = `<img src="assets/hermitage-night.jpg" alt="Эрмитаж ночью" />`;
        imgSaviorNode.innerHTML = `<img src="assets/savior-night.jpg" alt="Спас на Крови ночью" />`;
        imgFortressNode.innerHTML = `<img src="assets/peter-pavel-fortress-night.jpg" alt="Петропавловская крепость ночью" />`;
    } else {
        imgHermitageNode.innerHTML = `<img src="assets/hermitage.jpeg" alt="Эрмитаж" />`;
        imgSaviorNode.innerHTML = `<img src="assets/savior.jpg" alt="Спас на Крови" />`;
        imgFortressNode.innerHTML = `<img src="assets/peter-pavel-fortress.jpg" alt="Петропавловская крепость" />`;
    }
    count++;
});

//anchor links
document.addEventListener("DOMContentLoaded", function () {
    // Select all anchor links with the class 'anchor-link'
    var anchorLinks = document.querySelectorAll(".anchor-link");

    // Loop through each anchor link
    anchorLinks.forEach(function (anchorLink) {
        // Add click event listener to each anchor link
        anchorLink.addEventListener("click", function (event) {
            // Prevent default anchor behavior
            event.preventDefault();

            // Get the target element's ID from the href attribute
            var targetId = anchorLink.getAttribute("href").substring(1);

            // Get the target element by ID
            var targetElement = document.getElementById(targetId);

            // If the target element exists
            if (targetElement) {
                // Calculate the offset by subtracting the height of the sticky header
                var offset =
                    targetElement.offsetTop -
                    document.querySelector(".sticky-header").offsetHeight;

                // Scroll to the target element with the offset
                window.scrollTo({
                    top: offset,
                    behavior: "smooth", // Smooth scroll animation
                });
            }
        });
    });
});
