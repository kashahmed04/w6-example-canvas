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
  context.drawImage(image, 150, 40, 700, 700, 10, 10, 580, 580) //what do all the numbers represent**
})
image.src = './assets/squidward.webp'

const clearButton = document.getElementById('clear') as HTMLButtonElement
const fillButton = document.getElementById('fill') as HTMLButtonElement
const alphaButton = document.getElementById('alpha') as HTMLButtonElement

clearButton.addEventListener('click', () => {
  // clearing sets pixels in a rectangle to black, transparent
  //what does it mean black it's not black on the screen (does it mean transparent)**
  context.clearRect(0, 0, 300, 600)
})

fillButton.addEventListener('click', () => {
  // this fills with white, opaque (or substitute a clear color)
  context.fillStyle = 'rgb(255, 255, 255)'
  context.fillRect(300, 0, 300, 300)
})

//the above 2 only work for one click but the last one works for multiple clicks because
//it changes opacity and makes it more transparent each time we click by 0.1 for the alpha value**

alphaButton.addEventListener('click', () => {
  // this fills with white, at 10% transparency (for a fade/ghost effect)
  context.fillStyle = 'rgba(255, 255, 255, 0.1)'
  context.fillRect(300, 300, 300, 300)
})

// EXAMPLE 6:
// we have 3 buttons for clear rectangle and it empties out portion of the canvas or if we dont want it to be transparent we draw
// white over it for the second button and the third button fades to almost white but it wont quite get there**

// we have our image we load it and draw it and we have buttons setup and we have click events setup on each of them and clearrect clears it out
// with black with 0 opactity for the first button (its not black though)**
// the second button makes it white and the third button makes it transparent each time we click**

// we have image and its 1000 pixels wide and 60 ish tall and we are going to have the starting cooridnates to start drawing rectangle and
// we have width and height for how we want to draw it based on the starting cooridnates and the other cooridnates is where we start drawing the
// image and how big it is (8 numbers source,x,y (starting),width,height (to start),destination x,y,and destintion width and height)

// */
