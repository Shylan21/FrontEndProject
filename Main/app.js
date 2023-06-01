import { state } from './state.js'
// Responsible for the home page
function load() {
	displayItems()
}

function displayItems() {
	state.items.forEach((item) => {
		displayItem(item)
	})
}

function displayItem(item) {
  const ul = document.querySelector('.items')


	const li = document.createElement('li')
	ul.append(li)

	const div = document.createElement('div')
	div.className = 'item'
	li.append(div)

	const img = addImage(item.id)
	img.className = 'product-img'
	div.append(img)

	const name = document.createElement('p')
	name.innerText = item.name
	li.append(name)

	const price = document.createElement('p')
	price.innerText = '$' + item.price
	li.append(price)

	img.addEventListener('click', () => {
		goToItemPage(item)
	})
}

function addImage(itemId) {
	const image = document.createElement('img')
	image.src = `../img/Prodotti/${itemId}.png`
	return image
}

function goToItemPage(item) {
	window.location.href = `../ItemPages/${item.id}.html`
}

load()
