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

//tracking the last known mouse position
//why do we define mouse with a : (mouse is the key and the point is a type and mouse is of type point)
//we are defining our point instance as x and y starting at 0 (starts the circle at the left corner)
//we are making an instance of the interface right and we can make many of them like this with different varibale names
//and they wont affect each other (yes)
const mouse: Point = { x: 0, y: 0 }

// blanks out the canvas
const clear = () => {
  //every frame we redraw the background because we would get a trailing effect then as we
  //moved the mouse and it would stay there and not disapear (yes)
  //if we did not have this why would the circle also stay on the left hand corner of the screen even though our mouse did not go
  //there
  context.fillStyle = 'rebeccapurple'
  context.fillRect(0, 0, SIZE, SIZE)
}

// helper function to draw the cursor
const drawCursor = () => {
  context.fillStyle = 'white'
  context.beginPath()
  context.arc(mouse.x, mouse.y, 5, 0, 2 * Math.PI) //this makes a full circle (2 PI) starting from 0 with a radius of 5
  //and its based on whereever we move the mouse and the circle follows it because every frame this method is called
  //from render which is used in requestanimationframe
  //this draws the screen more frequently than the mouse event is reporting it
  //the request animation frame happens more than the mouse move and since the mouse event writes to the variable
  //the renderer may get the same coroidnates multiple times in a row until it updatse
  context.fill()
}

// what happens every frame
const render = () => {
  clear()
  drawCursor()
  window.requestAnimationFrame(render) //keeps calling itself every frame and never ends unless we close the program
}

// kick off the frame loop
window.requestAnimationFrame(render) //this starts the loop and the request inside is what keeps it going like a loop (yes)

// listen for when the mouse moves on top of the canvas
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
canvas.addEventListener('mousemove', (event: MouseEvent) => {
  // update the stored mouse position
  //as we move the mouse around we store the x and y coorindates and this updates every time the mouse moves
  //and gets the offset which is the x and y coordinates of where our mouse is currently then each time the frame
  //updates in render the drawcursor gets the new x and y coordinates and puts the circle where the mouse is
  //offset gets the current position of the mouse right from the center of our mouse for the x and y coorindates right

  //the mouse is the current instance of the interface we have to store the current mouse x and y coorindates (yes)
  //why did we need an interface could we have just used mouseX and mouseY variables as floats and it would have worked the same (yes)
  mouse.x = event.offsetX
  mouse.y = event.offsetY

  //how can we not do the interpolation here is it because the interpolation always requires
  //position.x += (target.x - position.x) * 0.5 and position.y += (target.y - position.y) * 0.5****
  //and we do += since we are adding it onto the current position we have after subtracting the current
  //positon from the target****

  //this just goes wherever our cursor is (like a cursor) and not following our mouse
})

/*
dot that follows the mouse and to have it so there is no marks as we move the mouse we have to clear the canvas as we move the mouse and
if we dont clear the canvas the cusor draws as we move the mouse*
hold x and y position and have mouse be at x and y and there is an event listender for the mousemove and every time the mouse
moves ontop of canvas element we save the offset of our mouse*

clipboard is whole page and green page is the canvas and (0,0) is the top left of the green page
and the x offset is from left side of the canvas to x point of our mouse position
and y offset is from top of screen down to y offset of mouse (down is positive)

//when we change our origin does the axis remain the same still (left and up is negative and right and down
//is potive for the x and y coorindates)****

we have renderer in that is like a loop for each refresh of the canvas and each time the canvas refrehes it*

in the CSS we dont have the arrow but we change it to the circle within the canvas but if we go outside the canvas
then it turns back to cursor (so basically we do cursor: none in the CSS for the canvas element then we create the circle
in the JS for following the mouse as we move)(yes)*****/
