document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".card");
    card.style.opacity = "0";
    card.style.transform = "translateY(-20px)";

    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        card.style.transition = "all 0.6s ease-out";
    }, 300);
});