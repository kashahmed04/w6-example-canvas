import './styles/reset.css'
import './styles/styles.css'

const SIZE = 600
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = SIZE
canvas.height = SIZE

const context = canvas.getContext('2d') as CanvasRenderingContext2D

context.fillStyle = 'rgb(255, 255, 255)'
context.fillRect(0, 0, SIZE, SIZE)

// top left square
context.lineWidth = 2
context.fillStyle = 'red'
context.beginPath()
context.moveTo(60, 60)
context.lineTo(60, 120)
context.lineTo(120, 120)
context.lineTo(120, 60)
context.closePath()
context.fill()
context.stroke()

// top center triangle
context.fillStyle = 'green'
context.beginPath()
context.moveTo(300, 60)
context.lineTo(265, 120)
context.lineTo(335, 120)
context.closePath()
context.fill()
context.stroke()

// top right starburst
context.fillStyle = 'blue'
context.beginPath()
context.moveTo(520, 60)
context.lineTo(510, 80)
context.lineTo(480, 90)
context.lineTo(510, 100)
context.lineTo(520, 120)
context.lineTo(530, 100)
context.lineTo(560, 90)
context.lineTo(530, 80)
context.closePath()
context.fill()
context.stroke()

// overlapping squares in the middle
// all this just to show off the 'nonzero' (default) vs 'evenodd' (alternate) fill rules
context.fillStyle = 'green'
context.beginPath()
context.moveTo(60, 300)
context.lineTo(60, 360)
context.lineTo(120, 360)
context.lineTo(120, 300)
context.closePath()

context.moveTo(80, 320)
context.lineTo(80, 380)
context.lineTo(140, 380)
context.lineTo(140, 320)
context.closePath()
context.fill('nonzero') // fills the path, regardless of overlap
context.stroke()

context.fillStyle = 'orange'
context.beginPath()
context.moveTo(260, 300)
context.lineTo(260, 360)
context.lineTo(320, 360)
context.lineTo(320, 300)
context.closePath()

context.moveTo(280, 320)
context.lineTo(280, 380)
context.lineTo(340, 380)
context.lineTo(340, 320)
context.closePath()
context.fill('evenodd') // fills the path, odd overlaps are filled, even overlaps are not
context.stroke()

// combining arc and lineTo to make a heart
context.fillStyle = 'red'
context.beginPath()
context.arc(480, 300, 30, Math.PI, 0)
context.arc(510, 330, 30, 1.5 * Math.PI, Math.PI / 2)
context.lineTo(450, 360)
context.closePath()
context.fill()
context.stroke()
