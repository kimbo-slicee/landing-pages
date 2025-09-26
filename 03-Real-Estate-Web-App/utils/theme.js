// utils/theme.js
export function initTheme() {
    const themeBtn = document.querySelector(".theme-btn");
    const body = document.body;

    // Apply stored mode
    const mode = localStorage.getItem("mode");
    body.classList.add(mode === "dark" ? "dark-theme" : "light-theme");

    // Toggle theme
    themeBtn?.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.removeItem("mode");
        }
    });
}
