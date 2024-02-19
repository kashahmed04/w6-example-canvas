import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = SIZE
canvas.height = SIZE

const context = canvas.getContext('2d') as CanvasRenderingContext2D

context.fillStyle = 'rgb(255, 255, 255)'
context.fillRect(0, 0, SIZE, SIZE)

const image = new Image()
image.addEventListener('load', () => {
  context.drawImage(image, 150, 40, 700, 700, 10, 10, 580, 580)
})
image.src = './assets/squidward.webp'

const clearButton = document.getElementById('clear') as HTMLButtonElement
const fillButton = document.getElementById('fill') as HTMLButtonElement
const alphaButton = document.getElementById('alpha') as HTMLButtonElement

clearButton.addEventListener('click', () => {
  // clearing sets pixels in a rectangle to black, transparent
  context.clearRect(0, 0, 300, 600)
})

fillButton.addEventListener('click', () => {
  // this fills with white, opaque (or substitute a clear color)
  context.fillStyle = 'rgb(255, 255, 255)'
  context.fillRect(300, 0, 300, 300)
})

alphaButton.addEventListener('click', () => {
  // this fills with white, at 10% transparency (for a fade/ghost effect)
  context.fillStyle = 'rgba(255, 255, 255, 0.1)'
  context.fillRect(300, 300, 300, 300)
})
