class DarkMode {
  constructor() {
    this.isDarkMode = false;
    this.init();
  }

  init() {
    this.detectSystemTheme();
    this.loadTheme();
    this.addToggleListener();
  }

  detectSystemTheme() {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = isSystemDark;
  }

  loadTheme() {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    this.saveThemePreference();
  }

  saveThemePreference() {
    localStorage.setItem('dark-mode', this.isDarkMode);
  }

  toggle() {
    this.isDarkMode = !this.isDarkMode;
    this.loadTheme();
  }

  addToggleListener() {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Dark Mode';
    toggleButton.onclick = () => this.toggle();
    document.body.appendChild(toggleButton);
  }
}

export default DarkMode;