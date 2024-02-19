import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = SIZE
canvas.height = SIZE

const context = canvas.getContext('2d') as CanvasRenderingContext2D

context.fillStyle = 'rgb(255, 255, 255)'
context.fillRect(0, 0, SIZE, SIZE)

// arc() : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
// upper left circle, showing:
// "clockwise" arc in black
// "counter-clockwise" arc in red
context.strokeStyle = 'black'
context.lineWidth = 2
context.beginPath()
context.arc(60, 60, 45, 0, Math.PI / 2) //this starts from 0 (where is 0 usually I thought it was top left)**
//and draws to pi/2 which is (wouldnt it be half a circle)**
context.stroke()

context.strokeStyle = 'red'
context.beginPath()
//this starts from 0 and goes counterclockwise to pi/2 (isnt top left (0,0) and pi/2 half a circle**
context.arc(60, 60, 40, 0, Math.PI / 2, true) //true is going counterclockwise and nothing put there or false is clockwise
//because clockwise is the default**
context.stroke()

// ██████████████████████████████████████████████████████████████████████████████████████

// arcTo() : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo
// upper right arcs, showing arcs of different radius corners
context.strokeStyle = 'red'
context.beginPath()
context.moveTo(SIZE - 60, 60) //we move this to almost the end of the canvas and a bit lower because going down
//for y is positive** (this is the starting blue point for moveto usually for arcTo or is it the point
//that moves along the control point lines??)**
context.arcTo(SIZE - 60, 120, SIZE - 120, 60, 15) //the first set of coorindates is the first control point,
//the second set of coordinates is the second control point, the last number is the radius for how curved we want the line
//to be**
context.stroke()

context.strokeStyle = 'orange'
context.beginPath()
context.moveTo(SIZE - 58, 60)
context.arcTo(SIZE - 58, 120, SIZE - 120, 60, 10) //why does it get more curved as the radius decreases I thought
//it would get more curved as the radius increased**
context.stroke()

context.strokeStyle = 'green'
context.beginPath()
context.moveTo(SIZE - 56, 60)
context.arcTo(SIZE - 56, 120, SIZE - 120, 60, 5)
context.stroke()

context.strokeStyle = 'blue'
context.beginPath()
context.moveTo(SIZE - 54, 60)
context.arcTo(SIZE - 54, 120, SIZE - 120, 60, 1)
context.stroke()

// ██████████████████████████████████████████████████████████████████████████████████████

// bezierCurveTo() : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo
// middle left wave, showing use of cubic bezier curve
// an animation worth 1000000 words : https://miro.medium.com/v2/resize:fit:480/format:webp/1*NUV8KWFfKmevb_Z_L2A1hQ.gif
context.strokeStyle = 'black'
context.beginPath()
context.moveTo(60, 300) // the starting point (P0 in the animation)
// prettier-ignore (this would make it one huge line if we did not put this line here for prettier right)**
context.bezierCurveTo(
  120,
  240, // the first control point (P1 in the animation)
  180,
  360, // the second control point (P2 in the animation)
  240,
  300, // the destination point (P3 in the animation)
  //for arcto and beziercurveto do the control points connect in a line and the starting point (or moveto in arcto) is
  //what draws the lines along those points**
)
context.stroke()

// ██████████████████████████████████████████████████████████████████████████████████████

// ellipse() : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
// middle right ellipse, showing:
// "clockwise" ellipse in black
// "counter-clockwise" ellipse in red
//center posiiton, major radius, minor radius, starting stopping radians, and**
context.strokeStyle = 'black'
context.lineWidth = 2
context.beginPath()
context.ellipse(480, 300, 65, 25, 0, 0, Math.PI / 2) //why do we make the rotation 0 if we rotate to make the ellipse**
context.stroke()

context.strokeStyle = 'red'
context.beginPath()
//the x and y is where we want to start drawing right why do we have a starting angle then**
//why is the rotation 0 if we rotate**
context.ellipse(480, 300, 60, 20, 0, 0, Math.PI / 2, true) //the true makes the ellipse go counterclockwise and
//nothing or false makes the ellipse go clockwise**
context.stroke()

// ██████████████████████████████████████████████████████████████████████████████████████

// quadraticCurveTo() : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo
// bottom center - showing curves of different controls
// another animation : https://miro.medium.com/v2/resize:fit:480/format:webp/1*MTvJLHEDRpAcAFY25iQeww.gif
// the only thing changing is the Y-coordinate of the control point
// (1 fewer control point than bezier curve and it draws based on the green line and there are fewer construction lines**)
context.strokeStyle = 'red'
context.beginPath()
context.moveTo(260, 560)
context.quadraticCurveTo(320, 460, 380, 560) //takes in two control points for the first 2 coorindates then
//the second two number are the**
context.stroke()

context.strokeStyle = 'orange'
context.beginPath()
context.moveTo(260, 560)
context.quadraticCurveTo(320, 480, 380, 560) //the control points are what makes it more higher up because the contorl
//points are farther away and the more farther away they are the more longer the curve will be**
//when the control points are more close it makes it more curved but smaller curve**
context.stroke()

context.strokeStyle = 'green'
context.beginPath()
context.moveTo(260, 560) //move to this point then start drawing with the quadraticcurveto**
//we only use lineto for the lines after the moveto**
context.quadraticCurveTo(320, 500, 380, 560)
context.stroke()

context.strokeStyle = 'blue'
context.beginPath()
context.moveTo(260, 560)
context.quadraticCurveTo(320, 520, 380, 560)
context.stroke()

// CANVAS CURVES:

// we have a lot of methods for us for curves

// arc draws whole circles or arcs or half circles**
// arcto draws rounded corners**
// beziercurve draws wavy lines**
// ellipse draw squashed circles**
// quadraticcurveto is a quadratic bezier curve (simpler wavy lines)**

// EXAMPLE 2 CURVES:

// CIRCLE TOP LEFT:
// arc has a center location (x,y), radius, starting angle in radisns, ending angle in radians, and by default its going to draw it clockwise from
// start to end**
// the red line has optional last parameter and if we set it to true it goes counterclockwise for true instead of clockwise for default**

// ARC ON TOP RIGHT:
// arc2 had a lot of lines with different colors and the difference is that the color and radius at the end for the arc and arc2
// (blue line is starting our draw and the red dot is first set of corindates and the sceond one on the top is the end coorindate and it draws
// a curve from starting point so it lines up with our lines with red coorindates)(example from link for arc2)**

// BEZIER CURVE:

// we move to starting point then we have 2 control points and 1 ending point and it does math to show what curve should look like (0,0) is our
// starting point then we have 3 points and we are marching our points along those lines and we march the blue dot along the green lines
// and the black line draws out the curve**
// this does linear interpolation to give us a curve**

// QUADRATIC CURVE (BOTTOM EXAMPLE):
// 1 fewer control point than bezier curve and it draws based on the green line and there are fewer construction lines**

// ELLIPESE (SIMILAR TO ARC):

// center posiiton, major radius, minor radius, starting stopping radians, and**
