const validate = (e) => {
  const value = e.target.value
  const min = 5
  const max = e.target.type === 'password' && 8
  const isEmail = e.target.id === 'input-email'
  const allowEmpty = false

  if (value < min) {
    console.log('Este campo deve conter no minino 5 caracteres')
  } else if (max) {
  }
}

document.querySelectorAll('input[name="create-account"]').forEach((input) => {
  input.addEventListener('input', validate)
})
