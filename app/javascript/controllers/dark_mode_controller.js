import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // Apply theme on page load
    const theme = localStorage.getItem("theme") || "light"
    this.applyTheme(theme)
  }

  toggle(event) {
    event.preventDefault()
    const currentTheme = localStorage.getItem("theme") || "light"
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    localStorage.setItem("theme", newTheme)
    this.applyTheme(newTheme)
  }

  applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }
}
