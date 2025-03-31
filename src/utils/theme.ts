interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}
export const ThemeScript = ()  => {
  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle") as HTMLButtonElement | null;
    const htmlElement = document.documentElement;

    if (!themeToggle) return;

    // Estado del tema
    const themeState: ThemeState = {
      isDark: localStorage.getItem("theme") === "dark",
      toggleTheme: () => {
        themeState.isDark = !themeState.isDark;
        localStorage.setItem("theme", themeState.isDark ? "dark" : "light");
        htmlElement.classList.toggle("dark", themeState.isDark);
        themeToggle.textContent = themeState.isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
      },
    };

    // Aplicar tema guardado
    htmlElement.classList.toggle("dark", themeState.isDark);
    themeToggle.textContent = themeState.isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

    // Evento de cambio de tema
    themeToggle.addEventListener("click", themeState.toggleTheme);
  });
};
