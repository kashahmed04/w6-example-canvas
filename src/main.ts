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
context.lineTo(120, 120) //why is there 3 lineto if we have 4 sides for square**
context.lineTo(120, 60)
context.closePath() //closes the shape up so we can fill it on the next line within the lines**
context.fill()
context.stroke() //stoke makes the whole shape show up then or just the color inside the shape**
//when we say stroke everything gets drawn and filled in right**

// top center triangle
context.fillStyle = 'green'
context.beginPath()
context.moveTo(300, 60)
context.lineTo(265, 120) //why is there only 2 lineto() if we have 3 sides**
context.lineTo(335, 120)
context.closePath()
context.fill()
context.stroke()

// top right starburst
context.fillStyle = 'blue'
context.beginPath()
context.moveTo(520, 60)
context.lineTo(510, 80) //why is there 7 lineto if we have 8 sides**
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
// all this just to show off the 'nonzero' (default) vs 'evenodd' (alternate) fill rules**
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
context.fill('nonzero') // fills the path, regardless of overlap (does it matter which shape we put it on
//it just has to be a shape that overlaps)**
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
//(0 is even here so it's not filled)(why is the rectangle on the outside filled then because there is no overlap
//with the shapes making it 0 not 1)**
//(2 is even for the inner rectangle because 2 rectangles overlap so it does not get filled)**
context.stroke()

// combining arc and lineTo to make a heart
context.fillStyle = 'red'
context.beginPath()
context.arc(480, 300, 30, Math.PI, 0)
context.arc(510, 330, 30, 1.5 * Math.PI, Math.PI / 2)
context.lineTo(450, 360) //I know there are two arcs at the top corners, but why is there only 1 lineto I thought
//there should have been 2 for each side**
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

// CANVAS TEXT (EXAMPLE 4):

// we can draw words but we only use one line not multiple because it gets complicated
// font property lets us define size and typeface
// filltext does the drawing of text
// stroketext if the broeder of letters
// tyextabseline is our curves of end of letters
// fontface lts use upload custome webfont
// document fonts does**

// top is fill text and it goes in order from top to bottom**

// if we try to render before font is laoded we get default font but if it loads it gives us the custom font**

// we set the fillstyle and font and we fill the text starting at a coorindate and steok the text at a particular coorindate
// and with filltext we have optional fourth parameter which**

// if we have a short string take as much space as it needs but if its wider than 560 we expand it to fit within  the 560 pixels**

// draw our stroke style for our pixel valeus and set the font and change the textbaseline and we have a lot of types which show the differnt
// styles of hi on the red line**

// we use hanging more because**

// we then set font to 48 pixel then we filltext before it laoded or before we specified it and to load in a custome font face we use
// new fontface object then we can have it load and we use promises to tell it to load then we use a callback then we add it to the list of fonts
// available then we still the text after it loads (wait till load is finished before we draw with it with a promise and callback)**

// next class we wil refresh and fill canvas over and over again**

// CANVAS IMAGES (EXAMPLE 5):

// image data can be laoded from many differnt sources like the ones listen from the documetnation
// (we can grab tags from our html or a video eleemnt of another canvas or an image from an API or we can copy
// pixels we have in memory and not laoded on the screen yet)**
// we we use images from other domains there has to be cross origin stuff set up but it will consider the canvas tainted which means
// because of security we cant**

// the squidward image is bigger than the canvas we have so we size it down and we can also take the window of the image and draw a portion of it
// we make a new image then we add eventlistener for load event and we set the source outside of it**
// make sure we set our laod event handler before we upload the source because we wont be able to draw with it until**

// drawimage has 3 different overrides (first takes the image data and the x and y coordinate and we put the top left of the image here
// and draw it and we dont care how big it is** the second if the width and height for how big we want it to be** and the third overload is the
// sprite engine and we get the x and y of the image source data and we set the width and height for how much we are copying over
// and the destination and the width and height of destination (this is for the eyes))**

// img.src is the same as making an img in the html then targetting it in the js**

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
