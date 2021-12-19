
//tentando fazer um botao de clicar
const numbers = document.querySelectorAll('number')

// const oneButton = document.getElementById('one')
// const twoButton = document.getElementById('two')
// const threeButton = document.getElementById('three')
// const fourButton = document.getElementById('four')
// const fiveButton = document.getElementById('five')
// const sixButton = document.getElementById('six')
// const sevenButton = document.getElementById('seven')
// const eightButton = document.getElementById('eight')
// const nineButton = document.getElementById('nine')
// const zeroButton = document.getElementById('zero')
// const dotButton = document.getElementById('dot')

let screen = document.getElementById('screen')

function printNumber(number) {
  screen.textContent += number
  console.log(number)
}
for (const element of numbers) {
  addEventListener('click', () => {
    printNumber(element.textContent)
  })
  console.log(element)
}
printNumber()
