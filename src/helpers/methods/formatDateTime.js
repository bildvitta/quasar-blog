import { date } from 'quasar'

function formatDateTime (value, mask = 'DD/MM/YYYY HH:mm:ss') {
  return value ? date.formatDate(value, mask) : ''
}

export {
  formatDateTime
}
