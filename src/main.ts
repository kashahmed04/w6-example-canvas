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

// solid white fill of the canvas since context is the canvas renderer responsible for showing everything on the screen**
//we dont use canvas here because it makes the actual canvas itself and does not rednder our drawings**
context.fillStyle = 'rgb(255, 255, 255)'
// draw the white background for the canvas**
context.fillRect(0, 0, SIZE, SIZE)

//how does it know to make background purple**

// Yes, I absolutely could have written these with a loop.
// But I didn't, to be explicit about what values are being passed to the draw methods.
// (in other words, making it easier to follow the example without having to math out the values)

//go over all types of strokes and what do the width strokes mean (on the slides as well about the width of the strokes)**
//which stroke widths are usually the best to use or commonly used**

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

// (0,0) is the top left of the canvas and when we draw a line if we go from (3,1) to (3,5) it will go by half of a pixel
// so we say go 2 or**

// we set the stoke style (color), the linewidth (thickness of line), beginpath()(we are about to start drawing a path then we can do
// series of moveto() and lineto() afterwards)** moveto()(moves position of pen without touching paper) lineto()(put pen down to start drawing)**
// the moveto and lineto dont draw automatically so we do a stroke afterwards at the very end to actually draw a shape**

// context.strokeStyle = 'black'
// context.lineWidth = 1
// context.beginPath()
// context.moveTo(20, 20)
// context.lineTo(20, 70)
// context.stroke()

// EXAMPLE lines:

// for first row of lines the first line uses an odd number line width on whole number pixels**
// the second row of lines line makes the offset with half the linewidth**
// for the third row of lines we have even width lines because its half pixel location**
// for the fourth row lines**
