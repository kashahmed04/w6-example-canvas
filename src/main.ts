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


/*
CANVAS API:
homework 2 is going to be announced on Wednesday or Friday

HTML CANVAS ELEMENT:
use drawing methods to draw
we add a canvas tag to HTML
sleect canvas tag with JS or TS
get rendering context (like audio context that was mananger of audio system and we have rendering system for the canvas)
we use rendering context we made to draw things to the canvas** (how to make rendering system)**

CANVAS REFERENCES:
first link is guidede tour of canvas itself
the second link is the API links informtion and listing of properties and metods and how to use them as well as examples
the third link is a web textbook for canvas and what we can do with canvas
the list link is a bunch of third party libaries ontop of canvas to make it easier to work with canvas**

CANVAS ATTRIBUTES:
we can set width and height and it contorls the pixel dimaneions we can draw to and we can set it in the html tag
or we can do it from JS or TS, but not from CSS because it controls the display of the canvas (if we have a 200x200 canvas, if we
size it with CSS it does not give us more pixels it just squishes or exapnds the current pixels we have in the html)**
we can use CSS to position and size our canvas but if we make it small or big it may look weird (pixiliated)**

canvas starts as black transparanet rectanles then we can draw on it**

we have a 600x600 purple canvas and a square pattern and for the code in the index.html we have a canvas element
with an id and put text inside of the tag just incase the browser cant render it or the user is using a screen reader**
in the main.ts we have a size so we can resize as we go and we set the width and height**
have a context varible tp get the context as 2D and that gives us the canvas context renderer**
we set the fil style and we can make it rgb, words, etc. and when we will in pixels thats the color we want to use**
we then make rectangles then we change the color to make the swuares transparent and draws more squres**

we dont really have a ourple canvas its just white and transparent white but when we change the background of the
whole screen it changes the canvas**

we have a loop that gives us the reectangles to draw them with the stating cororidnates**

CANVAS LINES:

(0,0) is the top left of the canvas and when we draw a line if we go from (3,1) to (3,5) it will go by half of a pixel
so we say go 2 or**

we set the stoke style (color), the linewidth (thickness of line), beginpath()(we are about to draw a path then we can do
series of moveto and lineto afterwards)** moveto()(moves position of pen without touching paper) lineto()(put pen down and draw to)**
the moveto and lineto dont draw automatically so we do a stroke afterwards at the very end to draw a shape**

EXAMPLE lines:

for first row of lines the first line uses an odd number line width on whole number pixels**
the second row of lines line makes the ofset with half the linewidth**
for the third row of lines we have even width lines because its half pixel location**
for the fourth row lines**

we will the entire canvas then stroke as 1 then the width and we use the same pattern for all the blocks

CANVAS CURVES:

we have a lot of methods for us for curves

arc draws arcs or half circles
arcto draws roundede corners
beziercurve draws wavy lines
ellipse draw squashed circles
quadraticcurveto is a quadratic bezier curve

EXAMPLE 2 CURVES:

CIRCLE TOP LEFT:
arc has a center location (x,y), radius, starting angle in radisns, ending angle in radians, and by default its going to draw it clockwise from
start to end**
the red line has optional last parameter and if we set it to true it goes counterclockwise for true instead of clockwise for default**

ARC ON TOP RIGHT:
arc2 had a lot of lines with different colors and the difference is that the color and radius at the end for the arc and arc2
(blue line is starting our draw and the red dot is first set of corindates and the sceond one on the top is the end coorindate and it draws
a curve from starting point so it lines up with our lines with red coorindates)(example from link for arc2)**

BEZIER CURVE:

we move to starting point then we have 2 control points and 1 ending point and it does math to show what curve should look like (0,0) is our
starting point then we have 3 points and we are marching our points along those lines and we march the blue dot along the green lines
and the black line draws out the curve**
this does linear interpolation to give us a curve**

QUADRATIC CURVE (BOTTOM EXAMPLE):
1 fewer control point than bezier curve and it draws based on the green line and there are fewer construction lines**

ELLIPESE (SIMILAR TO ARC):

center posiiton, major radius, minor radius, starting stopping radians, and**

CANVAS FILLS (EXAMPLE 3):

the closepath command closes whatever shape we are working on and we do this when we are finished drawing our shape**
there are comments for which shapes are being drawn (its just plotting coorindates and drawing them)**
we have squares drawn ontop of the eachother (green one uses default fill rule but the second one uses even odd and outside of the shape
has 0 fill (even) and the odd is the yellow and we count the number of overlaps and if its off it gets filled, but if even
it does not get filled))**

the heart is a couple of arcs (2 arcs, a line, and closed path for the stroke)**

CANVAS TEXT (EXAMPLE 4):

we can draw words but we only use one line not multiple because it gets complicated
font property lets us define size and typeface
filltext does the drawing of text
stroketext if the broeder of letters
tyextabseline is our curves of end of letters
fontface lts use upload custome webfont
document fonts does**

top is fill text and it goes in order from top to bottom**

if we try to render before font is laoded we get default font but if it loads it gives us the custom font**

we set the fillstyle and font and we fill the text starting at a coorindate and steok the text at a particular coorindate
and with filltext we have optional fourth parameter which**

if we have a short string take as much space as it needs but if its wider than 560 we expand it to fit within  the 560 pixels**

draw our stroke style for our pixel valeus and set the font and change the textbaseline and we have a lot of types which show the differnt
styles of hi on the red line**

we use hanging more because**

we then set font to 48 pixel then we filltext before it laoded or before we specified it and to load in a custome font face we use
new fontface object then we can have it load and we use promises to tell it to load then we use a callback then we add it to the list of fonts
available then we still the text after it loads (wait till load is finished before we draw with it with a promise and callback)**

next class we wil refresh and fill canvas over and over again**

CANVAS IMAGES (EXAMPLE 5):

image data can be laoded from many differnt sources like the ones listen from the documetnation
(we can grab tags from our html or a video eleemnt of another canvas or an image from an API or we can copy
pixels we have in memory and not laoded on the screen yet)**
we we use images from other domains there has to be cross origin stuff set up but it will consider the canvas tainted which means
because of security we cant**

the squidward image is bigger than the canvas we have so we size it down and we can also take the window of the image and draw a portion of it
we make a new image then we add eventlistener for load event and we set the source outside of it**
make sure we set our laod event handler before we upload the source because we wont be able to draw with it until**

drawimage has 3 different overrides (first takes the image data and the x and y coordinate and we put the top left of the image here
and draw it and we dont care how big it is** the second if the width and height for how big we want it to be** and the third overload is the
sprite engine and we get the x and y of the image source data and we set the width and height for how much we are copying over
and the destination and the width and height of destination (this is for the eyes))**

img.src is the same as making an img in the html then targetting it in the js**


EXAMPLE 6:
we have 3 buttons for clear rectangle and it empties out portion of the canvas or if we dont want it to be transparent we draw
white over it for the second button and the third button fades to almost white but it wont quite get there**

we have our image we load it and draw it and we have buttons setup and we have click events setup on each of them and clearrect clears it out
with black with 0 opactity for the first button (its not black though)**
the second button makes it white and the third button makes it transparent each time we click**

we have image and its 1000 pixels wide and 60 ish tall and we are going to have the starting cooridnates to start drawing rectangle and
we have width and height for how we want to draw it based on the starting cooridnates and the other cooridnates is where we start drawing the
image and how big it is (8 numbers source,x,y (starting),width,height (to start),destination x,y,and destintion width and height)

*/
