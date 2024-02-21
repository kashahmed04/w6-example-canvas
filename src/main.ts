import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = SIZE
canvas.height = SIZE

const context = canvas.getContext('2d') as CanvasRenderingContext2D

// type to hold points
interface Point {
  x: number
  y: number
}
// tracking the last known mouse position
const mouse: Point = { x: 0, y: 0 }

// blanks out the canvas
const clear = () => {
  context.fillStyle = 'rebeccapurple'
  context.fillRect(0, 0, SIZE, SIZE)
}

// helper function to draw the cursor
const drawCursor = () => {
  context.fillStyle = 'white'
  context.beginPath()
  context.arc(mouse.x, mouse.y, 5, 0, 2 * Math.PI)
  context.fill()
}

// what happens every frame
const render = () => {
  clear()
  drawCursor()
  window.requestAnimationFrame(render)
}

// kick off the frame loop
window.requestAnimationFrame(render)

// listen for when the mouse moves on top of the canvas
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
canvas.addEventListener('mousemove', (event: MouseEvent) => {
  // update the stored mouse position
  mouse.x = event.offsetX
  mouse.y = event.offsetY
})

/*
dot that follows the mouse and to have it so there is no marks as we move the mouse we have to clear the canvas as we move the mouse and
if we dont clear the canvas the cusor draws as we move the mouse**
hold x and y positin and have mouse be at x and y and there is an event listender for the mousemove and every time the mouse
moves ontop of canvas element we save the offset of our mouse**

clipboard is page and green page is the canvas and (0,0) is the beginning of the canvas and the x offset is from left side to x point
and y is from top of screen to y offset of mouse**

we have renderer in that is like a loop for each refresh of the canvas and each time the canvas refrehes it**

in the css we dont have the arrow but we change it to the circle within the canvas but if we go outside the canvas
then it turns back to cursoe**



BRNACH 8:

more of a smoother animation and it interpolates (more smoother) animation as we mvoe our mouse
we take the x position and we add the differnec between the target and current position multipled by a small number**

if we have position at 0 and target (where we want to go) is 100 then we**

if we do this enough frames in a row we get closer and closer to our target position**

in code we have a targer point and position point (target is where we want to be and positon is where we actually are right now)

we also have an update funcgion to run the interpolation for a smoother animation and we multiply by a larger percentage to make
it folow the mouse more and the more towards 0 the number is then the more delayed it is**

GHOSTING (BRANCH 9):

when we dont clear the canvas the white line follows us and for ghosting we draw a transparent purple that fades as we move the mouse
(how is it purple I thought it was white)**

we fill the rectangle in the beginning after we define the point because it leaves a trail behind and the canvas starts off as all
black pixels and we draw white pixels ontop and becaue of that it does not go back to the same purple (black with a bunch of purple.vs.
white with a bunch of purple)**

to have some things not ghost and ghost we would make a seperate canvas for things to not to ghost or to ghost and if we want click
or collisions we need to do it ourself in code and have events attached to that specific canvas**

if we only had click event on bottom canvas the top one would be trandparent unless we put click event on top canvas then**

BRANCH 10:

drawing some shapes and text over the mouse (coordinates as we move the mouse)

our draw cursor got more complicated and we make the center point rounded and add the half pixel to make it look smoother because its odd**
then we draw these shapes in relation to the center position which is the center of our mouse as we move (center)**

we draw some text using the centerx and centery as a reference point**

we keep reapting this centerx and centery stuff so in branch 11 we clean it up a bit**

BRANCH 11:

we use transforms and the idea is that we have the starting coordinates in the upper case and we can provide some distances/roatations, etc.
to move the origins around and change our frame of reference and we draw in one place and it will appear in another**

translate,scale,rorate hide the matrix for us and translate by and x or y (which matrix) and we can roate by scalar and scale by a scalar as well**

we can use transfrom and it multipled our matrix ontop of its matrix and set transform**

save and restore let us do a transform state and if we  have transformed somewhere we save that and we draw somewhre else and we restore
and it goes back to the last saved area and the drawings we draw somewhere else will be saved as we do the transform**

reset reansform returns to the top left corner of the screen and resets the whole canvas**

draw cursor is updated and we set it with a centerx and centery we could have also done a context.translate(center.x,center.y) under the
set trasnform but now for the rest of our operations we are drawing in relation to the origin and not where the mouse is**

if we want to roate everything we do context.roate(math.pi/4) (45 degrees) and all of the transforms apply it to the things drawn
their declaraions**

for the effect it erases everything on the bottom right because when we do settransform we said our position of the mouse is (0,0) and we fill
from the width and height of canvas but starting from the mouse position currently not the top left side of the screen**

the origin clears the whole canvas from top to bottom but if we focus starting from the cursor, then it clears from the bottom
of the mouse only**


 */
