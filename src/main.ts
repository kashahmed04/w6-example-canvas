import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = SIZE
canvas.height = SIZE

const context = canvas.getContext('2d') as CanvasRenderingContext2D

context.fillStyle = 'rgb(255, 255, 255)'
context.fillRect(0, 0, SIZE, SIZE)

// holds the image data
const image = new Image()

// listens for the image to load, and tells us what to do once it does
// (note, this will never fire ... until after image.src is set (see L44))
image.addEventListener('load', () => {
  //we load in whatever image we define (if we have multiple images we can just set up a new image() or target an individual
  //image element from the HTML with document.getelementbyid or a query selector and use that variable here
  //to load it into the canvas specifially for that image)
  // draw it small
  context.drawImage(
    //this is for the first larger image but it starts off huge so we make it small
    image, // source data
    20, // x-coord
    20, // y-coord
    250, // width
    190, // height (if we dont specify width and height then it does the default size)
    //if we make the width or height bigger is that when it would get more pixiliated

    //images always get drawn from the top left (same with everything else) for canavs right (yes)
  )

  //what does it mean by something taking in overloading (they are fucntion overloads and we can call it with a different number of
  //parameters)
  // draw a subsection of it
  context.drawImage(
    image, // source data
    380, // x of source
    270, // y of source
    300, // width of source
    120, // height of source
    //these 4 lines above get the part of the image we need and the last 4 lines starts drawing the part of the image
    //we copied in the location we defined for x and y and as the size we specify it to be
    //why is it not pixilated since we made it bigger (we got the part of the image from the original image
    //thats why its not pixilated)
    20, // x of destination
    270, // y of destination
    300, // width of destination
    120, // height of destination

    //we dont need any variables to store parts of the image right we can just put coorindates in like we did here and
    //it would work right (yes)
  )
})

// set the .src attribute, officially starting the image load
// make sure to do our source after we load because if we did it before then the image would load first before going to the listener
// and the image would load and the load event would fire before we started listening for the event (before the image started loading)
image.src = './assets/squidward.webp' //image gets set line 44 from comments

//CANVAS IMAGES (EXAMPLE 5)(go over)**:

// image data can be laoded from many differnt sources like the ones listen from the documetnation
// (we can grab tags from our html or a video eleemnt of another canvas or an image from an API or we can copy
// pixels we have in memory and not laoded on the screen yet)(we could have a canvas not visible on the screen and copy pixels from it)
// we use images from other domains there has to be cross origin stuff set up but it will consider the canvas tainted which means
// because of security and it wont allow us to copy pixels from the other sources and put it to our harddrive
//

// the squidward image is bigger than the canvas we have so we size it down and we can also take the window of the image and draw a portion of it
// we make a new image then we add eventlistener for load event and we set the source outside of it*
// make sure we set our laod event handler before we upload the source because we wont be able to draw with it until*

// drawimage has 3 different overrides (first takes the image data and the x and y coordinate and we put the top left of the image here
// and draw it and we dont care how big it is** the second is the width and height for how big we want it to be** and the third overload is the
// sprite engine**** and we get the x and y of the image source data and we set the width and height for how much we are copying over
// and the destination and the width and height of destination (this is for the eyes))**

// img.src is the same as making an img in the html then targetting it in the js**
