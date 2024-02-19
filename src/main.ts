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
// draw the white background
context.fillRect(0, 0, SIZE, SIZE)

// Yes, I absolutely could have written these with a loop.
// But I didn't, to be explicit about what values are being passed to the draw methods.
// (in other words, making it easier to follow the example without having to math out the values)

// The first series has odd-width strokes on whole-number pixel coordinates
context.strokeStyle = 'black'
context.lineWidth = 1
context.beginPath()
context.moveTo(20, 20)
context.lineTo(20, 70)
context.stroke()

context.lineWidth = 3
context.beginPath()
context.moveTo(40, 20)
context.lineTo(40, 70)
context.stroke()

context.lineWidth = 5
context.beginPath()
context.moveTo(60, 20)
context.lineTo(60, 70)
context.stroke()

context.lineWidth = 7
context.beginPath()
context.moveTo(80, 20)
context.lineTo(80, 70)
context.stroke()

context.lineWidth = 9
context.beginPath()
context.moveTo(100, 20)
context.lineTo(100, 70)
context.stroke()

context.lineWidth = 11
context.beginPath()
context.moveTo(120, 20)
context.lineTo(120, 70)
context.stroke()

// The second series has odd-width strokes on 0.5-ed pixel coordinates
context.strokeStyle = 'black'
context.lineWidth = 1
context.beginPath()
context.moveTo(20.5, 90)
context.lineTo(20.5, 140)
context.stroke()

context.lineWidth = 3
context.beginPath()
context.moveTo(40.5, 90)
context.lineTo(40.5, 140)
context.stroke()

context.lineWidth = 5
context.beginPath()
context.moveTo(60.5, 90)
context.lineTo(60.5, 140)
context.stroke()

context.lineWidth = 7
context.beginPath()
context.moveTo(80.5, 90)
context.lineTo(80.5, 140)
context.stroke()

context.lineWidth = 9
context.beginPath()
context.moveTo(100.5, 90)
context.lineTo(100.5, 140)
context.stroke()

context.lineWidth = 11
context.beginPath()
context.moveTo(120.5, 90)
context.lineTo(120.5, 140)
context.stroke()

// The third series has even-width strokes on whole-pixel coordinates
context.strokeStyle = 'black'
context.lineWidth = 2
context.beginPath()
context.moveTo(20, 160)
context.lineTo(20, 210)
context.stroke()

context.lineWidth = 4
context.beginPath()
context.moveTo(40, 160)
context.lineTo(40, 210)
context.stroke()

context.lineWidth = 6
context.beginPath()
context.moveTo(60, 160)
context.lineTo(60, 210)
context.stroke()

context.lineWidth = 8
context.beginPath()
context.moveTo(80, 160)
context.lineTo(80, 210)
context.stroke()

context.lineWidth = 10
context.beginPath()
context.moveTo(100, 160)
context.lineTo(100, 210)
context.stroke()

context.lineWidth = 12
context.beginPath()
context.moveTo(120, 160)
context.lineTo(120, 210)
context.stroke()

// The fourth series has even-width strokes on 0.5-pixel coordinates
context.strokeStyle = 'black'
context.lineWidth = 2
context.beginPath()
context.moveTo(20.5, 230)
context.lineTo(20.5, 280)
context.stroke()

context.lineWidth = 4
context.beginPath()
context.moveTo(40.5, 230)
context.lineTo(40.5, 280)
context.stroke()

context.lineWidth = 6
context.beginPath()
context.moveTo(60.5, 230)
context.lineTo(60.5, 280)
context.stroke()

context.lineWidth = 8
context.beginPath()
context.moveTo(80.5, 230)
context.lineTo(80.5, 280)
context.stroke()

context.lineWidth = 10
context.beginPath()
context.moveTo(100.5, 230)
context.lineTo(100.5, 280)
context.stroke()

context.lineWidth = 12
context.beginPath()
context.moveTo(120.5, 230)
context.lineTo(120.5, 280)
context.stroke()
