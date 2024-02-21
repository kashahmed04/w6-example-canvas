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
//it gives us a linewidth but since we dont have a fillstyle or a fill it does not
//fill the letters** (difference between fillstyle and fill because they both fill in the shapes below the declaration for it)**
//is fillstyle setting the fill color for everything below it while fill and filltext are what actually applied the fillStyle to the
//text (filltext) and shape (fill) otherwise it wont get applied to the shape or text if we dont do fill or filltext)**
context.lineWidth = 2
context.strokeText('Hello, canvas.', 20, 120)

// lots of text
// (But also, don't render this much text in the canvas! It's not accessible!)
context.font = '24px Arial'
context.fillText(
  'Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut. Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese.',
  20,
  180,
  560, //if we dont give it max width it keeps drawing until it does not have enough characters and does it on the same line
  //and if we do it in a max width it squishes all the text on the same line within that width (there is no way to wrap automatically)
)

//different baselines

context.strokeStyle = 'red'
context.lineWidth = 1
context.beginPath()
context.moveTo(10.5, 240.5)
context.lineTo(589.5, 240.5)
context.stroke()

context.font = '48px Arial'
context.textBaseline = 'alphabetic' // the default
context.fillText('Hi', 20, 240)

context.textBaseline = 'bottom' //bottom floats above the line and bottom is used for the letters with the bottom
//of the letters to sit on the line
context.fillText('Hi', 80, 240)

context.textBaseline = 'hanging' //hanging or top is more useful
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
//in our file exploerer for the project) (can we say url (link to google fonts site)) (yes)
// not required to download font
//first parameter is font family and second is link for the font
// wait until the font actually loads, then...
myFont.load().then((font) => {
  //we are calling load on the font then we tell the font to load itself and when its done we have laoded the font
  //then it knows thats the parameter for whatever font we load in
  // register the font with the document

  //document represents the entireyet of the browser and it has all the fonts available to use and it says add this
  //font to the list of the defauly the browser has
  document.fonts.add(font)
  // and after waiting, actually draw the text
  context.fillText('AmaticSC after load', 20, 420)

  //why is there no error check for if the data has loaded yet we did it with APIS (are they not necessary)
  //we can have confidence it will work and we are loading it from ourselves but if we did it from the web then we put a catch
  //on there
})

// CANVAS TEXT (EXAMPLE 4)(ask)**:

// we can draw words but we only use one line to draw them not multiple because it gets complicated (ex. we want to
// avoid putting a lot of text in the canvas because it becomes inaccessible to people with screen readers and we cant copy
// and paste it
// font property lets us define size and typeface (would we have to load it in first with promises or does it change the font for us
// automatically when we load it in and all we have to do is add it to the document and fill the text
// and the .font is for built in fonts only)**
// filltext does the filling of text**
// stroketext if the broeder of letters (why not filltext)**
// tyextabseline is our curves of end of letters**
// fontface lets use upload custom webfont (why did we use promises then to upload a font)**
// document.fonts does**

// top is fill text and it goes in order from top to bottom*

// if we try to render before font is laoded we get default font but if it loads it gives us the custom font*

// draw our stroke style for our pixel valeus and set the font and change the textbaseline and we have a lot of types which show the differnt
// styles of hi on the red line*

// we use hanging more because**

// we then set font to 48 pixel then we filltext before it laoded or before we specified it and to load in a custome font face we use
// new fontface object then we can have it load and we use promises to tell it to load then we use a callback then we add it to the list of fonts
// available then we still the text after it loads (wait till load is finished before we draw with it with a promise and callback)**

// next class we wil refresh and fill canvas over and over again*
