import './app1.scss'
import $ from 'jquery'

const $btnAdd = $('#increment-by-1')
const $btnMin = $('#decrement-by-1')
const $btnMul = $('#multiply-by-2')
const $btnDiv = $('#divide-by-2')

const $spanNumber = $('#number')

$btnAdd.on('click', () => {
  let n = parseInt($spanNumber.text())
  n += 1
  $spanNumber.text(n)
})

$btnMin.on('click', () => {
  let n = parseInt($spanNumber.text())
  n -= 1
  $spanNumber.text(n)
})

$btnMul.on('click', () => {
  let n = parseInt($spanNumber.text())
  n *= 2
  $spanNumber.text(n)
})

$btnDiv.on('click', () => {
  let n = parseInt($spanNumber.text())
  n /= 2
  $spanNumber.text(n)
})
