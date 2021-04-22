function validateRequiredFields (field) {
  return field ? undefined : 'Campo obrigatório'
}

function validateEmailFields (email) {
  const regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return !regularExpression.test(String(email).toLowerCase()) ? 'Digite um e-mail valido' : undefined
}

export {
  validateRequiredFields,
  validateEmailFields
}
