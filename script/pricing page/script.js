document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");
});

document.getElementById("toggle").addEventListener("click", () => {
    document.getElementById("change").classList.toggle("change_prices");
    if (document.querySelector(".sr-only").textContent == "Billed Yearly") {
        document.querySelector(".sr-only").textContent = "Billed Monthly";
    } else {
        document.querySelector(".sr-only").textContent = "Billed Yearly";
    }
})