import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = SIZE
canvas.height = SIZE

const context = canvas.getContext('2d') as CanvasRenderingContext2D

context.fillStyle = 'rgb(255, 255, 255)'
context.fillRect(0, 0, SIZE, SIZE)

// filling text
context.fillStyle = 'black'
context.font = '48px Arial'
context.fillText('Hello, canvas.', 20, 60)

// stroking text
//if gives us a linewidth but since we dont have a fillstyle or a fill it does not
//fill the letters** (difference between fillstyle and fill because they both fill in the shapes below the declaration for it)**
context.lineWidth = 2
context.strokeText('Hello, canvas.', 20, 120)

// lots of text
// (But also, don't render this much text in the canvas! It's not accessible!)
context.font = '24px Arial'
context.fillText(
  'Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut. Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese.',
  20,
  180,
  560, //if it goes beyond 560 it or if its below it**
)

// different baselines
context.strokeStyle = 'red'
context.lineWidth = 1
context.beginPath()
context.moveTo(10.5, 240.5)
context.lineTo(589.5, 240.5)
context.stroke()

context.font = '48px Arial'
context.textBaseline = 'alphabetic' // the default (which is on the line)**
context.fillText('Hi', 20, 240) //fill text is what puts custom text on the canvas at a certain location**

context.textBaseline = 'bottom' //why does bottom not go at the bottom of the line what is it based on**
context.fillText('Hi', 80, 240)

context.textBaseline = 'hanging' //hanging is based on (in class example)**
context.fillText('Hi', 140, 240)

context.textBaseline = 'ideographic' //what is ideographic based on it looks the same as bottom**
context.fillText('Hi', 200, 240)

context.textBaseline = 'middle'
context.fillText('Hi', 260, 240)

context.textBaseline = 'top' //why is top not ontop of the line what is it based on**
context.fillText('Hi', 320, 240)

// custom fontface
context.font = '48px AmaticSC'
context.textBaseline = 'alphabetic'
// here's what it looks like if you try to use a custom fontface before it loads
context.fillText('AmaticSC before load', 20, 360)

// create a custom FontFace
const myFont = new FontFace('AmaticSC', 'url(./assets/AmaticSC-Regular.ttf)') //we always need url(name of the directory
//in our file exploerer for the project)** (can we say url(link to google fonts site))**
//first parameter is font family**
// wait until the font actually loads, then...
myFont.load().then((font) => {
  //use the promise to load the data then the .then is the callback to
  //add the font to the document and fill in the text**
  //difference between fill, fillstyle, and filltext and when to use each**
  //where do we target the document to add the font to add the font to it**
  // register the font with the document
  document.fonts.add(font)
  // and after waiting, actually draw the text
  context.fillText('AmaticSC after load', 20, 420)
})

// CANVAS TEXT (EXAMPLE 4)(ask)**:

// we can draw words but we only use one line to draw them not multiple because it gets complicated (ex.)**
// font property lets us define size and typeface**
// filltext does the filling of text**
// stroketext if the broeder of letters (why not filltext)**
// tyextabseline is our curves of end of letters**
// fontface lts use upload custome webfont**
// document.fonts does**

// top is fill text and it goes in order from top to bottom**

// if we try to render before font is laoded we get default font but if it loads it gives us the custom font**

// draw our stroke style for our pixel valeus and set the font and change the textbaseline and we have a lot of types which show the differnt
// styles of hi on the red line**

// we use hanging more because**

// we then set font to 48 pixel then we filltext before it laoded or before we specified it and to load in a custome font face we use
// new fontface object then we can have it load and we use promises to tell it to load then we use a callback then we add it to the list of fonts
// available then we still the text after it loads (wait till load is finished before we draw with it with a promise and callback)**

// next class we wil refresh and fill canvas over and over again**
