import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = SIZE
canvas.height = SIZE

const context = canvas.getContext('2d') as CanvasRenderingContext2D

// type to hold points
interface Point {
  x: number
  y: number
}
// tracking the last known mouse position
const mouse: Point = { x: 0, y: 0 }

// blanks out the canvas
const clear = () => {
  context.fillStyle = 'rebeccapurple'
  context.fillRect(0, 0, SIZE, SIZE)
}

// helper function to draw the cursor
const drawCursor = () => {
  context.fillStyle = 'white'
  context.beginPath()
  context.arc(mouse.x, mouse.y, 5, 0, 2 * Math.PI)
  context.fill()
}

// what happens every frame
const render = () => {
  clear()
  drawCursor()
  window.requestAnimationFrame(render)
}

// kick off the frame loop
window.requestAnimationFrame(render)

// listen for when the mouse moves on top of the canvas
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
canvas.addEventListener('mousemove', (event: MouseEvent) => {
  // update the stored mouse position
  mouse.x = event.offsetX
  mouse.y = event.offsetY
})
