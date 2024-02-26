import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = SIZE
canvas.height = SIZE

const context = canvas.getContext('2d') as CanvasRenderingContext2D

context.fillStyle = 'rgb(255, 255, 255)'
context.fillRect(0, 0, SIZE, SIZE)

// top left square
context.lineWidth = 2
context.fillStyle = 'red'
context.beginPath()
context.moveTo(60, 60)
context.lineTo(60, 120)
context.lineTo(120, 120) //why is there 3 lineto if we have 4 sides for square (the moveto prepares us to start
//the shape and the lineto goes down left edge, then bottom, then top of square then we close the path
//and we close the path from where we are to the start)
context.lineTo(120, 60)
context.closePath() //closes the shape up so we can fill it on the next line within the lines (figures our from where
//we are to go back to the start)(it will be a straight line to go back even if it looks weird)
//so basically this goes back to the start from where we started drawing or to the top left of the image we drew
context.fill()
context.stroke() //stoke makes the outline of the shape show up because stroke is used for lines (lineto to make it
//show up on the canvas)(yes)
//default stroke is black right (yes)

//the default is white for fill and black for stroke

// top center triangle
context.fillStyle = 'green'
context.beginPath()
context.moveTo(300, 60)
context.lineTo(265, 120)
context.lineTo(335, 120)
context.closePath()
context.fill()
context.stroke()

// top right starburst
context.fillStyle = 'blue'
context.beginPath()
context.moveTo(520, 60)
context.lineTo(510, 80)
context.lineTo(480, 90)
context.lineTo(510, 100)
context.lineTo(520, 120)
context.lineTo(530, 100)
context.lineTo(560, 90)
context.lineTo(530, 80)
context.closePath()
context.fill()
context.stroke()

// overlapping squares in the middle
// all this just to show off the 'nonzero' (default) vs 'evenodd' (alternate) fill rules
context.fillStyle = 'green'
context.beginPath()
context.moveTo(60, 300)
context.lineTo(60, 360)
context.lineTo(120, 360)
context.lineTo(120, 300)
context.closePath()

context.moveTo(80, 320)
context.lineTo(80, 380)
context.lineTo(140, 380)
context.lineTo(140, 320)
context.closePath()
context.fill('nonzero') // fills the path, regardless of overlap (the canvas is the whole
//canvas so it accounts for eveerything that overlaps)
//the even odd overrides it for everything that overlaps then
context.stroke()

context.fillStyle = 'orange'
context.beginPath()
context.moveTo(260, 300)
context.lineTo(260, 360)
context.lineTo(320, 360)
context.lineTo(320, 300)
context.closePath()

context.moveTo(280, 320)
context.lineTo(280, 380)
context.lineTo(340, 380)
context.lineTo(340, 320)
context.closePath()
context.fill('evenodd') // fills the path, odd overlaps are filled, even overlaps are not
//even layers (2) for the squares so it does not fill in but for odd it would be 1 (canvas is 0) so its filled
//and a shape ontop of a shape ontop of a shape is 3 so it would be filled (is it like index and it goes from 0 onward
//for stacking shapes ontop of each other)
//so if we have another square on a portion of the two overlapping squares it would only fill that portion right and not the
//whole whitepsace
//so is 0 considered even in JS or just in canvas (0 is technically even)
context.stroke()

// combining arc and lineTo to make a heart
context.fillStyle = 'red'
context.beginPath()
context.arc(480, 300, 30, Math.PI, 0)
context.arc(510, 330, 30, 1.5 * Math.PI, Math.PI / 2)
context.lineTo(450, 360) //draws from the line we just drew to the begginning of the first arc we drew
context.closePath()
context.fill()
context.stroke()

// CANVAS FILLS (EXAMPLE 3):

// the closepath command closes whatever shape we are working on and we do this when we are finished drawing our shape**
// there are comments for which shapes are being drawn (its just plotting coorindates and drawing them)**
// we have squares drawn ontop of the eachother (green one uses default fill rule but the second one uses even odd and outside of the shape
// has 0 fill (even) and the odd is the yellow and we count the number of overlaps and if its off it gets filled, but if even
// it does not get filled))**

// the heart is a couple of arcs (2 arcs, a line, and closed path for the stroke)**
