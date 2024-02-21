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

// solid white fill of the canvas since context is the canvas renderer responsible for showing everything on the screen
//(yes)
//we dont use canvas here because it makes the actual canvas itself and does not rednder our drawings (yes)****
context.fillStyle = 'rgb(255, 255, 255)'
// draw the white background for the canvas (yes)
context.fillRect(0, 0, SIZE, SIZE)

//how does it know to make background purple (html in CSS)

// Yes, I absolutely could have written these with a loop.
// But I didn't, to be explicit about what values are being passed to the draw methods.
// (in other words, making it easier to follow the example without having to math out the values)

//when we are specifying coorindates on the canvas we talk about pixel boundaries (edges of the image we defined right)****
//(drawing rectangle in first image because the red line is on the black line and its easy to
//show pixels to be filled (whole pixels))

//in the middle image we are drawing an image and the line width is 1 pixel so the green says if we have width of 1 pixel that
//means the dark blue region is what the line is but we cant have half a pixel be colored and not colored and the
//lightblue becomes gray and it makes the line look fuzzier than it should be

//to fix the second image, in the third image if we have a line width of 1 we should have our coordinates in half
//pixels with the x-axis so when we center the line it falls within the pixels and theres no gray area for blurriness

//for odd numbers if we divide them in half we dont get a whole number of pixels which contribute to bluriness
//for even numbers it wont do that and we have whole numbers so we can have clearer lines (for the line width)

//why do we divide in half for the kine width when using pixels****

// The first series has odd-width strokes on whole-number pixel coordinates
context.strokeStyle = 'black'
context.lineWidth = 1
context.beginPath()
context.moveTo(20, 20)
context.lineTo(20, 70)
context.stroke()

context.lineWidth = 3
context.beginPath()
context.moveTo(40, 20)
context.lineTo(40, 70)
context.stroke()

context.lineWidth = 5
context.beginPath()
context.moveTo(60, 20)
context.lineTo(60, 70)
context.stroke()

context.lineWidth = 7
context.beginPath()
context.moveTo(80, 20)
context.lineTo(80, 70)
context.stroke()

context.lineWidth = 9
context.beginPath()
context.moveTo(100, 20)
context.lineTo(100, 70)
context.stroke()

context.lineWidth = 11
context.beginPath()
context.moveTo(120, 20)
context.lineTo(120, 70)
context.stroke()

// The second series has odd-width strokes on 0.5-ed pixel coordinates
context.strokeStyle = 'black'
context.lineWidth = 1
context.beginPath()
context.moveTo(20.5, 90)
context.lineTo(20.5, 140)
context.stroke()

context.lineWidth = 3
context.beginPath()
context.moveTo(40.5, 90)
context.lineTo(40.5, 140)
context.stroke()

context.lineWidth = 5
context.beginPath()
context.moveTo(60.5, 90)
context.lineTo(60.5, 140)
context.stroke()

context.lineWidth = 7
context.beginPath()
context.moveTo(80.5, 90)
context.lineTo(80.5, 140)
context.stroke()

context.lineWidth = 9
context.beginPath()
context.moveTo(100.5, 90)
context.lineTo(100.5, 140)
context.stroke()

context.lineWidth = 11
context.beginPath()
context.moveTo(120.5, 90)
context.lineTo(120.5, 140)
context.stroke()

// The third series has even-width strokes on whole-pixel coordinates
context.strokeStyle = 'black'
context.lineWidth = 2
context.beginPath()
context.moveTo(20, 160)
context.lineTo(20, 210)
context.stroke()

context.lineWidth = 4
context.beginPath()
context.moveTo(40, 160)
context.lineTo(40, 210)
context.stroke()

context.lineWidth = 6
context.beginPath()
context.moveTo(60, 160)
context.lineTo(60, 210)
context.stroke()

context.lineWidth = 8
context.beginPath()
context.moveTo(80, 160)
context.lineTo(80, 210)
context.stroke()

context.lineWidth = 10
context.beginPath()
context.moveTo(100, 160)
context.lineTo(100, 210)
context.stroke()

context.lineWidth = 12
context.beginPath()
context.moveTo(120, 160)
context.lineTo(120, 210)
context.stroke()

// The fourth series has even-width strokes on 0.5-pixel coordinates
//this is blurry because even numbers return whole numbers but we are going by .5 incremenets (would it have the gray blurrieness
//like the lightblue pixels in the second image on the slides for the odd numbers)****
//even numbers go good with whole pixel coorindates and odd numbers go good with 0.05 pixel coorindates****
//how do we know to change x or y to go the point 5 coorindates or the whole number coordinates (does it matter or do we usually
//do this with x and the y can be a whole number no matter what)****
//did we have to specify strokestyle here each time we went through because it was the same color so could we have defined it once on
//to top and just draw all of our lines****
context.strokeStyle = 'black'
context.lineWidth = 2
context.beginPath()
context.moveTo(20.5, 230)
context.lineTo(20.5, 280)
context.stroke()

context.lineWidth = 4
context.beginPath()
context.moveTo(40.5, 230)
context.lineTo(40.5, 280)
context.stroke()

context.lineWidth = 6
context.beginPath()
context.moveTo(60.5, 230)
context.lineTo(60.5, 280)
context.stroke()

context.lineWidth = 8
context.beginPath()
context.moveTo(80.5, 230)
context.lineTo(80.5, 280)
context.stroke()

context.lineWidth = 10
context.beginPath()
context.moveTo(100.5, 230)
context.lineTo(100.5, 280)
context.stroke()

context.lineWidth = 12
context.beginPath()
context.moveTo(120.5, 230)
context.lineTo(120.5, 280)
context.stroke()

// CANVAS LINES:

// we set the stoke style (color), the linewidth (thickness of line), beginpath()(we are about to start drawing a path**** then we can do
// series of moveto() and lineto() afterwards) moveto()(moves position of pen without touching paper) lineto()(put pen down to start drawing)
// the moveto and lineto dont draw automatically so we do a stroke afterwards at the very end to actually draw a shape (draws the outline
//of the shape (how does it get the fill if we just have stroke and stroke is the outline of our shape))****

// context.strokeStyle = 'black'
// context.lineWidth = 1
// context.beginPath()
// context.moveTo(20, 20)
// context.lineTo(20, 70)
// context.stroke()
