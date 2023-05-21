'use strict'
const toggleMode = () => {
  const root = document.documentElement
  const trail = document.querySelector('.trail')
  const footerLogo = document.querySelector('.footer-logo')
  const mode = document.querySelector('#change-mode-button img')
  const currentColor = getComputedStyle(root).getPropertyValue('--primary-background')

  if (currentColor === '#282a37') {
    trail.src = './img/trail-white.png'
    footerLogo.src = './img/footer-logo-b.png'
    mode.src = './img/mode-dark.png'

    root.style.setProperty('--primary-background', '#fff')
    root.style.setProperty('--primary-background-grad', '#FFFFFFCC')
    root.style.setProperty('--secundary-background', '#F0F0F0')
    root.style.setProperty('--primary-font', '#3d3d3d')
    root.style.setProperty('--secundary-font', '#737C88')
    root.style.setProperty('--primary-border', '#737C88')
  } else {
    trail.src = './img/trail-large.png'
    footerLogo.src = './img/footer-logo.png'
    mode.src = './img/mode-light.svg'

    root.removeAttribute('style')
  }
}

document.getElementById('change-mode-button').addEventListener('click', toggleMode)
