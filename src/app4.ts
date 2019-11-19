import './app4.scss'
import $ from 'jquery'

const $circle = $('#app4 .circle')

$circle
  .on('mouseenter', () => {
    $circle.toggleClass('active')
  })
  .on('mouseleave', () => {
    $circle.toggleClass('active')
  })
