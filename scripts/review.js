document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;

    reviewCount += 1;
    localStorage.setItem("reviewCount", reviewCount);

    const countElement = document.getElementById("reviewCount");
    if (countElement) {
        countElement.textContent = reviewCount;
    }
});