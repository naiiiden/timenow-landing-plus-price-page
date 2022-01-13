document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");
});

document.getElementById("toggle").addEventListener("change", () => {
    document.getElementById("change").classList.toggle("change_prices");
})