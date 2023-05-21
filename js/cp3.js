const validate = (e) => {
  const value = e.target.value
  const min = 5
  const max = e.target.type === 'password' ? 8 : null
  const isEmail = e.target.id === 'input-email'
  const isConfirmPass = e.target.id === 'input-confirm'

  const inputContainer = document.querySelector(`#${e.target.name}-row .error-label`)

  if (value.length < min) {
    inputContainer.innerHTML = `*O campo ${e.target.name} deve conter no minimo 5`
  } else if (max && value.length > max) {
    inputContainer.innerHTML = '*A senha deve conter no maximo 8 caracteres'
  } else if (isEmail && !value.includes('@')) {
    inputContainer.innerHTML = 'O email deve conter @'
  } else if (value.length < 1) {
    inputContainer.innerHTML = `O campo ${e.target.name} é obrigatório`
  } else if (isConfirmPass) {
    const passInput = document.getElementById('input-pass')
    inputContainer.innerHTML = ''
    if (passInput.value != value) {
      inputContainer.innerHTML = '*Senhas incompatíveis'
    }
  } else {
    inputContainer.innerHTML = ''
  }
}

const alertError = (e) => {
  const errorLabels = [...document.querySelectorAll('.error-label')]
  errorLabels.map((label) => label.innerHTML)
  //   console.log(errorLabels)
  //   const errors = errorLabels.map((label) => label.innerHTML)
  //   console.log(errors)
}
document.getElementById('btn-new-account').addEventListener('click', alertError)
document.querySelectorAll('.text-field').forEach((input) => {
  input.addEventListener('input', validate)
})
