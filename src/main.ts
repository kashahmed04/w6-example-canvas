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
context.lineWidth = 2
context.strokeText('Hello, canvas.', 20, 120)

// lots of text
// (But also, don't render this much text in the canvas! It's not accessible!)
context.font = '24px Arial'
context.fillText(
  'Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut. Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese.',
  20,
  180,
  560,
)

// different baselines
context.strokeStyle = 'red'
context.lineWidth = 1
context.beginPath()
context.moveTo(10.5, 240.5)
context.lineTo(589.5, 240.5)
context.stroke()

context.font = '48px Arial'
context.textBaseline = 'alphabetic' // the default
context.fillText('Hi', 20, 240)

context.textBaseline = 'bottom'
context.fillText('Hi', 80, 240)

context.textBaseline = 'hanging'
context.fillText('Hi', 140, 240)

context.textBaseline = 'ideographic'
context.fillText('Hi', 200, 240)

context.textBaseline = 'middle'
context.fillText('Hi', 260, 240)

context.textBaseline = 'top'
context.fillText('Hi', 320, 240)

// custom fontface
context.font = '48px AmaticSC'
context.textBaseline = 'alphabetic'
// here's what it looks like if you try to use a custom fontface before it loads
context.fillText('AmaticSC before load', 20, 360)

// create a custom FontFace
const myFont = new FontFace('AmaticSC', 'url(./assets/AmaticSC-Regular.ttf)')
// wait until the font actually loads, then...
myFont.load().then((font) => {
  // register the font with the document
  document.fonts.add(font)
  // and after waiting, actually draw the text
  context.fillText('AmaticSC after load', 20, 420)
})
