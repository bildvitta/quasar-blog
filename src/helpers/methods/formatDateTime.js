import { date } from 'quasar'

export default function (mask = 'DD/MM/YYYY HH:mm:ss') {
  return new Date() ? date.formatDate(new Date(), mask) : ''
}
