const themeToggle = document.getElementById("theme-toggle");

if (document.documentElement.classList.contains("light")) {
    themeToggle.textContent = "🌙 Dark Mode";
} else {
    themeToggle.textContent = "☀️ Light Mode";
}

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");

    if (document.documentElement.classList.contains("light")) {
        themeToggle.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    }

    // Update card backs
    document.querySelectorAll(".card-back img").forEach(img => {
        img.src = document.documentElement.classList.contains("light")
            ? "images/back_light.png"
            : "images/back_dark.png";
    });
});