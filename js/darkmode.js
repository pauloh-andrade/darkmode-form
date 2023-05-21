'use strict'
const toggleMode = () => {
  const root = document.documentElement
  const trail = document.querySelector('.trail')
  const currentColor = getComputedStyle(root).getPropertyValue('--primary-background')

  if (currentColor === '#282a37') {
    trail.src = './img/trail-white.png'

    root.style.setProperty('--primary-background', '#ffffff')
    root.style.setProperty('--primary-background-grad', '#FFFFFF00')
    root.style.setProperty('--secundary-background', '#E6E6E6')
    root.style.setProperty('--primary-font', '#3d3d3d')
    root.style.setProperty('--secundary-font', '#737C88')
  } else {
    trail.src = './img/trail-large.png'
    root.removeAttribute('style')
  }
}

document.getElementById('change-mode-button').addEventListener('click', toggleMode)
