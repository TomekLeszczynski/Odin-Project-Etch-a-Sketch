const container = document.querySelector('.box-container')

let grid = 64
for (let i = 0; i < grid * grid; i++) {
	const item = document.createElement('div')
	item.classList.add('box')
	item.style.height = `calc(100%/${grid})`
	item.style.flexBasis = `calc(100%/${grid})`
	document.body.append(item)
	container.appendChild(item)
}

let mouseDown = false
function changeColor(e) {
	if (e.target.classList.contains('box') && mouseDown == true) {
		e.target.style.backgroundColor = 'red'
	}
}

container.addEventListener('mouseover', changeColor)
container.addEventListener('mousedown', () => (mouseDown = true))
container.addEventListener('mouseup', () => (mouseDown = false))
