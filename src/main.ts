import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement

// setting the width and height attributes controls the actual pixel dimensions of the canvas
canvas.width = SIZE
canvas.height = SIZE
// setting the size with CSS scales/resizes the display dimensions of the canvas (
// (CSS will ::NOT:: change the pixel dimensions)

// like the AudioContext, we have a CanvasRenderingContext2D
const context = canvas.getContext('2d') as CanvasRenderingContext2D

// solid white fill
context.fillStyle = 'rgb(255, 255, 255)'
// draw the white borders
context.fillRect(0, 0, SIZE, 10)
context.fillRect(SIZE - 10, 10, 10, SIZE - 20)
context.fillRect(0, 10, 10, SIZE - 20)
context.fillRect(0, SIZE - 10, SIZE, 10)

// semi-transparent white fill
context.fillStyle = 'rgba(255, 255, 255, 0.25)'

// size of each square, accounting for the borders
const squareSize = (SIZE - 20) / 10

for (let x = 0; x < 10; x++) {
  for (let y = 0; y < 10; y++) {
    // draw a checkerboard pattern
    if (x % 2 !== y % 2) {
      context.fillRect(
        10 + x * squareSize,
        10 + y * squareSize,
        squareSize,
        squareSize,
      )
    }
  }
}
