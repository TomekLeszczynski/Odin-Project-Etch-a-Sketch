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
function changeColor(e) {
	if (e.target.classList.contains('box') && mouseDown) {
		const r = Math.floor(Math.random() * 255)
		const g = Math.floor(Math.random() * 255)
		const b = Math.floor(Math.random() * 255)
		e.target.style.backgroundColor = `rgb(${r},${g},${b})`
	}
}
button.addEventListener('click', handlePrompt)
container.addEventListener('mouseover', changeColor)
container.addEventListener('mousedown', () => (mouseDown = true))
container.addEventListener('mouseup', () => (mouseDown = false))
