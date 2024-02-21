import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = SIZE
canvas.height = SIZE

const context = canvas.getContext('2d') as CanvasRenderingContext2D

context.fillStyle = 'rgb(255, 255, 255)'
context.fillRect(0, 0, SIZE, SIZE)

// we have image and its 1000 pixels wide and 60 ish tall and we are going to have
//the starting cooridnates to start drawing rectangle and
// we have width and height for how we want to draw it based on the starting
//cooridnates and the other cooridnates is where we start drawing the
// image and how big it is (8 numbers source,x,y (starting),width,height (to start),destination x,y,and destintion width and height)

const image = new Image()
image.addEventListener('load', () => {
  context.drawImage(image, 150, 40, 700, 700, 10, 10, 580, 580) //when we are in the event listender load
  //that is there to say we want to draw to draw 10 pixels in and 10 pixels down and if the pixels are 600 for the size
  //we do 580 to make it centered (20 for each side based on the border)
})
image.src = './assets/squidward.webp'

const clearButton = document.getElementById('clear') as HTMLButtonElement
const fillButton = document.getElementById('fill') as HTMLButtonElement
const alphaButton = document.getElementById('alpha') as HTMLButtonElement

clearButton.addEventListener('click', () => {
  // clearing sets pixels in a rectangle to black, transparent
  //what does it mean black it's not black on the screen (its setting it back to as if we never drawn it on the canvas)
  //if something is black that means its just the canvas nothing else
  //this is 0 opactity because its solid (yes)
  context.clearRect(0, 0, 300, 600)
})

fillButton.addEventListener('click', () => {
  // this fills with white, opaque (or substitute a clear color)
  context.fillStyle = 'rgb(255, 255, 255)'
  context.fillRect(300, 0, 300, 300)
})

//the above 2 only work for one click but the last one works for multiple clicks because
//it changes opacity and makes it more transparent each time we click by 0.1 for the alpha value (yes)

//fillRect() - fills with an opaque color (this means solid right) (yes)

//fillstyle is for shapes and their color (does not apply automcatically have to do fill for shape or
//filltext for text)
//fill fills the shape when we finish drawing it
//filltext makes text with the color we defined in fillstyle
//strokestyle is for lines only and define the color and we dont need to do fill it does it automatically
//when we say stroke() at the end of drawing the line
//fillrect fills in rectangle automatically no need to say fill after drawing the rectangle
//(is there any other shapes that have this)

alphaButton.addEventListener('click', () => {
  // this fills with white, at 10% transparency (for a fade/ghost effect)
  context.fillStyle = 'rgba(255, 255, 255, 0.1)'
  context.fillRect(300, 300, 300, 300)
  //we do fill rect with the alpha button and not the actual alpha value (we are not passing alpha in)
  //fillrect automatically fills it for rectangle but do other shapes automatically fill or do we have to say context.fill()
  //after drawing the shape for other shapes
  //draw image aldo puts the image on the screen as well

  //clear rect gets us to black fully and fillrect gets us close to black
})

// EXAMPLE 6:
// we have 3 buttons for clear rectangle and it empties out portion of the canvas or if we dont want it to be transparent we draw
// white over it for the second button and the third button fades to almost white but it wont quite get there**

// we have our image we load it and draw it and we have buttons setup and we have click events setup on each of them and clearrect clears it out
// with black with 0 opactity for the first button (its not black though)**
// the second button makes it white and the third button makes it transparent each time we click**

// */
