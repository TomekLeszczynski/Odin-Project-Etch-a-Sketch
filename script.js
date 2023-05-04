const container = document.querySelector('.box-container')
const button = document.querySelector('button')

function handlePrompt() {
	let gridValue = parseInt(prompt('Please set the number of squares per side. Max value is 100', 16))
	if (gridValue > 100) {
		gridValue = 100
	}
	clearAll()
	handleSquares(gridValue)
}
function handleSquares(value) {
	for (let i = 0; i < value * value; i++) {
		const item = document.createElement('div')
		item.classList.add('box')
		item.style.height = `calc(100%/${value})`
		item.style.flexBasis = `calc(100%/${value})`
		document.body.append(item)
		container.appendChild(item)
	}
}
function clearAll() {
	const squares = container.querySelectorAll('.box')
	squares.forEach(square => square.remove())
}
let mouseDown = false
let saturationValue = 0
let increaseSat = true
function changeColor(e) {
	if (e.target.classList.contains('box') && mouseDown) {
		// option for random color of each square
		// const rbgColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(
		// 	Math.random() * 255
		// )})`
		// option for increasing black for each square
		if (saturationValue <= 0 || saturationValue >= 100) increaseSat = !increaseSat
		increaseSat ? (saturationValue -= 10) : (saturationValue += 10)
		const grayScaleColor = `rgb(${saturationValue}%,${saturationValue}%,${saturationValue}%)`
		e.target.style.backgroundColor = grayScaleColor
		console.log(grayScaleColor)
	}
}
button.addEventListener('click', handlePrompt)
container.addEventListener('mousedown', () => (mouseDown = true))
container.addEventListener('mouseup', () => (mouseDown = false))
container.addEventListener('mousedown', changeColor)
container.addEventListener('mouseover', changeColor)
