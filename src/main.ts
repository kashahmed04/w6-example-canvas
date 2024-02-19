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
  //we load in whatever image we define (how does it know what image
  //to use if we have a lot of images in our JS do we usually use the variable.addveentlistender and put
  //the variable for the drawimage)**
  //how does it know to use the image we defined if theres no variable attached to it**
  // draw it small
  context.drawImage(
    //this is for the first larger image**
    image, // source data
    20, // x-coord
    20, // y-coord
    250, // width
    190, // height
  )

  //what does it mean by something taking in overrides**
  // draw a subsection of it
  context.drawImage(
    image, // source data
    380, // x of source
    270, // y of source
    300, // width of source
    120, // height of source
    //these 4 lines above get the part of the image we need and the last 4 lines starts drawing the part of the image
    //we copied in the location we defined for x and y and as the size we specify it to be**
    20, // x of destination
    270, // y of destination
    300, // width of destination
    120, // height of destination

    //we dont need any variables to store parts of the image right we can just put coorindates in like we did here and
    //it would work right**
  )
})

// set the .src attribute, officially starting the image load
// make sure we set our laod event handler before we upload the source because we wont be able to draw with it until**
image.src = './assets/squidward.webp' //image gets set line 44 from comments

//CANVAS IMAGES (EXAMPLE 5):

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
