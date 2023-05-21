const validate = (e) => {
  const value = e.target.value
  const min = 5
  const max = e.target.type === 'password' ? 8 : null
  const isEmail = e.target.id === 'input-email'
  const isConfirmPass = e.target.id === 'input-confirm'

  const inputContainer = document.querySelector(`#${e.target.name}-row .error-label`)

  if (value.length < min) {
    inputContainer.innerHTML = `*${e.target.name} deve conter no minimo 5 caracteres`
  } else if (max && value.length > max) {
    inputContainer.innerHTML = '*A senha deve conter no maximo 8 caracteres'
  } else if (isEmail && !value.includes('@')) {
    inputContainer.innerHTML = '*O email deve conter @'
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

const createNewUser = (e) => {
  const errorLabels = [...document.querySelectorAll('.error-label')]

  let errors = []
  errorLabels.forEach((label) => {
    label.innerHTML && errors.push(label.innerHTML)
  })

  if (errors.length > 0) {
    alert('Erros:\n' + errors.join('\n'))
    e.preventDefault()
  } else {
    alert('Usuário cadastrado com sucesso')
  }
}
document.getElementById('btn-new-account').addEventListener('click', createNewUser)
document.querySelectorAll('.text-field').forEach((input) => {
  input.addEventListener('input', validate)
})
