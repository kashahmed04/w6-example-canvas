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

/*
dot that follows the mouse and to have it so there is no marks as we move the mouse we have to clear the canvas as we move the mouse and
if we dont clear the canvas the cusor draws as we move the mouse**
hold x and y positin and have mouse be at x and y and there is an event listender for the mousemove and every time the mouse
moves ontop of canvas element we save the offset of our mouse**

clipboard is page and green page is the canvas and (0,0) is the beginning of the canvas and the x offset is from left side to x point
and y is from top of screen to y offset of mouse**

we have renderer in that is like a loop for each refresh of the canvas and each time the canvas refrehes it**

in the css we dont have the arrow but we change it to the circle within the canvas but if we go outside the canvas
then it turns back to cursoe**
 */
