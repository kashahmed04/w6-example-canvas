import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = SIZE
canvas.height = SIZE

const context = canvas.getContext('2d') as CanvasRenderingContext2D

context.fillStyle = 'rgb(255, 255, 255)'
context.fillRect(0, 0, SIZE, SIZE)

// arc() : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
// upper left circle, showing:
// "clockwise" arc in black
// "counter-clockwise" arc in red
context.strokeStyle = 'black'
context.lineWidth = 2
context.beginPath()
context.arc(60, 60, 45, 0, Math.PI / 2)
context.stroke()

context.strokeStyle = 'red'
context.beginPath()
context.arc(60, 60, 40, 0, Math.PI / 2, true)
context.stroke()

// ██████████████████████████████████████████████████████████████████████████████████████

// arcTo() : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo
// upper right arcs, showing arcs of different radius corners
context.strokeStyle = 'red'
context.beginPath()
context.moveTo(SIZE - 60, 60)
context.arcTo(SIZE - 60, 120, SIZE - 120, 60, 15)
context.stroke()

context.strokeStyle = 'orange'
context.beginPath()
context.moveTo(SIZE - 58, 60)
context.arcTo(SIZE - 58, 120, SIZE - 120, 60, 10)
context.stroke()

context.strokeStyle = 'green'
context.beginPath()
context.moveTo(SIZE - 56, 60)
context.arcTo(SIZE - 56, 120, SIZE - 120, 60, 5)
context.stroke()

context.strokeStyle = 'blue'
context.beginPath()
context.moveTo(SIZE - 54, 60)
context.arcTo(SIZE - 54, 120, SIZE - 120, 60, 1)
context.stroke()

// ██████████████████████████████████████████████████████████████████████████████████████

// bezierCurveTo() : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo
// middle left wave, showing use of cubic bezier curve
// an animation worth 1000000 words : https://miro.medium.com/v2/resize:fit:480/format:webp/1*NUV8KWFfKmevb_Z_L2A1hQ.gif
context.strokeStyle = 'black'
context.beginPath()
context.moveTo(60, 300) // the starting point (P0 in the animation)
// prettier-ignore
context.bezierCurveTo(
  120, 240, // the first control point (P1 in the animation)
  180, 360, // the second control point (P2 in the animation)
  240, 300 // the destination point (P3 in the animation)
)
context.stroke()

// ██████████████████████████████████████████████████████████████████████████████████████

// ellipse() : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
// middle right ellipse, showing:
// "clockwise" ellipse in black
// "counter-clockwise" ellipse in red
context.strokeStyle = 'black'
context.lineWidth = 2
context.beginPath()
context.ellipse(480, 300, 65, 25, 0, 0, Math.PI / 2)
context.stroke()

context.strokeStyle = 'red'
context.beginPath()
context.ellipse(480, 300, 60, 20, 0, 0, Math.PI / 2, true)
context.stroke()

// ██████████████████████████████████████████████████████████████████████████████████████

// quadraticCurveTo() : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo
// bottom center - showing curves of different controls
// another animation : https://miro.medium.com/v2/resize:fit:480/format:webp/1*MTvJLHEDRpAcAFY25iQeww.gif
// the only thing changing is the Y-coordinate of the control point
context.strokeStyle = 'red'
context.beginPath()
context.moveTo(260, 560)
context.quadraticCurveTo(320, 460, 380, 560)
context.stroke()

context.strokeStyle = 'orange'
context.beginPath()
context.moveTo(260, 560)
context.quadraticCurveTo(320, 480, 380, 560)
context.stroke()

context.strokeStyle = 'green'
context.beginPath()
context.moveTo(260, 560)
context.quadraticCurveTo(320, 500, 380, 560)
context.stroke()

context.strokeStyle = 'blue'
context.beginPath()
context.moveTo(260, 560)
context.quadraticCurveTo(320, 520, 380, 560)
context.stroke()
