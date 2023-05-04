const container = document.querySelector('.box-container')

let grid = 16
for (let i = 0; i < grid * grid; i++) {
	const item = document.createElement('div')
	item.classList.add('box')
	item.style.height = `calc(100%/${grid})`
	item.style.flexBasis = `calc(100%/${grid})`
	document.body.append(item)
	container.appendChild(item)
}
