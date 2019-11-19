import './app3.scss'
import $ from 'jquery'

const $square = $('#app3 .square')

$square.on('click', () => {
  $square.toggleClass('active')
})
