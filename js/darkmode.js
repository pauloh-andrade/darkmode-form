'use strict'
const changeImages = (isDarkMode) => {
  const trail = document.querySelector('.trail')
  const footerLogo = document.querySelector('.footer-logo')
  const mode = document.querySelector('#change-mode-button img')

  if (isDarkMode) {
    trail.src = './img/trail-white.png'
    footerLogo.src = './img/footer-logo-b.png'
    mode.src = './img/mode-dark.svg'
  } else {
    trail.src = './img/trail-large.png'
    footerLogo.src = './img/footer-logo.png'
    mode.src = './img/mode-light.svg'
  }
}
const toggleMode = () => {
  const root = document.documentElement
  const isDarkMode = !root.classList.contains('light')

  if (isDarkMode) {
    root.classList.toggle('light')
    changeImages(isDarkMode)
  } else {
    root.classList.remove('light')
    changeImages(isDarkMode)
  }
}

document.getElementById('change-mode-button').addEventListener('click', toggleMode)
