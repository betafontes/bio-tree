function toggleMode() {
  const darkMode = document.documentElement

  if (darkMode.classList.contains('dark-mode')) {
    darkMode.classList.remove('dark-mode')
  } else {
    darkMode.classList.add('dark-mode')
  }
}