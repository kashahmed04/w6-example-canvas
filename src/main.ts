import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = SIZE
canvas.height = SIZE

const context = canvas.getContext('2d') as CanvasRenderingContext2D

context.fillStyle = 'rgb(255, 255, 255)'
context.fillRect(0, 0, SIZE, SIZE)

// holds the image data
const image = new Image()

// listens for the image to load, and tells us what to do once it does
// (note, this will never fire ... until after image.src is set (see L44))
image.addEventListener('load', () => {
  // draw it small
  context.drawImage(
    image, // source data
    20, // x-coord
    20, // y-coord
    250, // width
    190, // height
  )

  // draw a subsection of it
  context.drawImage(
    image, // source data
    380, // x of source
    270, // y of source
    300, // width of source
    120, // height of source
    20, // x of destination
    270, // y of destination
    300, // width of destination
    120, // height of destination
  )
})

// set the .src attribute, officially starting the image load
image.src = './assets/squidward.webp'
