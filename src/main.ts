import './styles/reset.css'
import './styles/styles.css'

//how does it know to make background purple (the styles has purple as the background for the html element)
//why wouldnt we do it from the body (there is no difference so is it preference and it does not matter)****
//makes the whole background purple but we change whatever is in the canvas by drawing the transparent purple suqares
//what does it mean it starts off as black transparent pixels I thought it was white for canavs if we draw nothign on it
//the default is black and transparent and we drew white for the fillstyle so if we dont specify a fillstyle then
//we get black
//so when we comment out both fillstyles why does the solid purple not turn black because
//its part of the canvas and there is no fillstyle anymore****
//and when I comment out the CSS as well its just black squares on a white background (why is the white on the solid
//purple squares is it because the purple squares is whatever the whole browser background is (white by default for browser)
// and it puts it on the canvas and in general for areas we dont specify a color for on the canvas if makes it whatever
//the web browser color we set it to or the white for the browser by default (why is it not black by default))****
const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement

//so basically interpolation always takes the distance and cuts in half each time as it gets closer to the mouse (slides 5-11) (yes always
//in halves)

//registerupdate updates the coordinates for us so that its not null and we can update the coordinates in apply coordinates

// setting the width and height attributes controls the actual pixel dimensions of the canvas
canvas.width = SIZE
canvas.height = SIZE
// setting the size with CSS scales/resizes the display dimensions of the canvas (
// (CSS will ::NOT:: change the pixel dimensions) (makes it pixilated or look weird because it does not take away
//or add pixels when we specify dimensions, it shrinks it grows the current pixel size we have (for CSS if we adjust
//pixel size)

// like the AudioContext, we have a CanvasRenderingContext2D
//we will stick with 2D for now but may do 3D
const context = canvas.getContext('2d') as CanvasRenderingContext2D

// solid white fill
context.fillStyle = 'rgb(255, 255, 255)'
// draw the white borders
//start from (0,0)(top left), then go the full width and make the height 10 (how thick the white box should be)****
context.fillRect(0, 0, SIZE, 10) //(top bar)

//start from a bit to the left of the end of the canvas, and a bit below for the y-axis (because down is positive for y),
//then the width is 10 (how thick the bar is) then go all the way down for the height but stop 20 pixels before
//the end (600x600 pixels is total canvas width and height))****
context.fillRect(SIZE - 10, 10, 10, SIZE - 20) //(right bar)

//start at 0 for the x, start 10 below for y, then make the bar 10 thick for the width (since the bar is vertical now)**
// and for the height stop 20 pixels before the end of the canvas (the 600)****
context.fillRect(0, 10, 10, SIZE - 20) //(left bar)

//we do size - 20 for the height because we need 10 for the width because the line starts
//at the total width - 10 and we make the line 10 pixels thick adding up to 20****

//start at 0 for the x, the y is all the way down but 10 pixels before the 600, make the go the whole width
//and make the bar 10 pixels thick for the height since the bar is horizontal****
context.fillRect(0, SIZE - 10, SIZE, 10) //(bottom bar)

// semi-transparent white fill
//the whole canvas starts as white with no transparency but when we
//draw the actual rectangles with the loop below thats what makes it transparent (yes)
//the fillstyle is for only the shapes we draw after we assign it a color
//(same for strokestyle but those are for lines only)(yes)
//we can use fillstyle with shapes and text as well (yes)
//why do we make it white here if we have purple (purple is defined in the CSS but could we have used it here
//too or do we usually define color in CSS and only work with white here and it would just put the solid
//color we defined in CSS on the canvas or if we put opacity it will also effect the canvas)****
context.fillStyle = 'rgba(255, 255, 255, 0.25)' //so basically this gives us a purple transparency because the whole board
//would be purple then because it has the same color as the browser window****
//what if we wanted different browser window color but different canvas color would the code still look the same****
//can make rgb, words, etc. (same for strokestyle and fill right no specific color style we have to put (rgb, hsv, etc.))****

//Drawing writes to pixels, which are then displayed (this means that when we are using canvas its units are in pixels
//only right and we cant change it or use any other units)**** (slide 5)****

// size of each square, accounting for the borders on both sides
//we do minus 20 because we have 10 pixels wide for each border making it 20 for 2 sides
const squareSize = (SIZE - 20) / 10 //(we divide by 10 because its a 10x10 board)

//0 mod 2 is how many times does 2 go into 0 which is 0 times so we get 0 for the remainder****
//1 mod 2 is 2 goes into 1 0 times so its 1 left over (how many times does the right number go into the left number
//and that remainder)
for (let x = 0; x < 10; x++) {
  for (let y = 0; y < 10; y++) {
    //goes down the rows and if the modulo is not the same for both x and y, then we make a transparent square
    // draw a checkerboard pattern
    if (x % 2 !== y % 2) {
      context.fillRect(
        //we are shifting everything over by 10 pixels to the right and 10 pixels down
        //and it starts from within the border that way and not inside of the border

        10 + x * squareSize, //overall width of the canvas minus the border width divided into 10 squares and we count x from 0 to 9
        //and y from 0 to 9 nested inside of that
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
 <canvas id="canvas">
      (A text description of what the canvas shows, for accessability purposes.)
  </canvas>

sleect canvas tag with JS or TS
const canvas = document.getElementById('canvas') as HTMLCanvasElement

get rendering context (like audio context that was mananger of audio system (all the audios)
and we have rendering system for the canvas and its the manager of everything we put on the canvas with the context.)****
we use rendering context to be able to draw things on the canvas
const context = canvas.getContext('2d') as CanvasRenderingContext2D

then we use the rendering context to draw on the canvas by doing context. before doing a drawing (we do
the context. for anything we draw that goes on the canvas)




CANVAS REFERENCES:
first link is guidede tour of canvas itself
the second link is the API links informtion and listing of properties and methods and how to use them as well as examples
the third link is a web textbook for canvas and what we can do with canvas
the last link is a bunch of third party libaries ontop of canvas to make it easier to work with canvas

CANVAS ATTRIBUTES:
we can set width and height and it contorls the pixel dimaneions we can draw to and we can set it in the html tag
or we can do it from JS or TS, but not from CSS because it controls the display of the canvas (if we have a 200x200 canvas
we set in the html or js or ts then, if we resize it with CSS it does not give us more pixels it just squishes
or exapnds the current pixels we had)
we can use CSS to position and size our canvas but if we make it small or big it may look weird (pixiliated)

width and height with JS changes the number of pixels in the canvas but with CSS it just scales or resizes and changes
the way its displayed without changing pixel dimensions

drawings are based on pixels which are then displayed onto the screen for us as we specify drawings
for dimensions (yes)

we have a 600x600 purple canvas and a square pattern and for the code in the index.html we have a canvas element
with an id and put text inside of the tag just incase the browser cant render it or the user is using a screen reader**
in the main.ts we have a size so we can resize (we can resize only in HTML and CSS)** as we go and we set the width and height**
we set the fill style and we can make it rgb, words, etc. and based on the rectanlgle it will change the
style to transparent in our case**
we then make rectangles then we change the color to make the squares transparent**

we dont really have a purple canvas its just white and transparent white but when we change the background of the
whole screen it changes the canvas****

we have a loop that gives us the reectangles to draw them with the starting cororidnates (x,y) and how big the make then (width and height)**


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

we will the entire canvas then stroke as 1 then the width and we use the same pattern for all the block

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
