// Responsible for what's shown in the product page
import { state } from '../Main/state.js'

function getItemId() {
	const id = window.location.href.split('/')[4].split('.')[0]

	return id
}

function getItem() {
	console.log('id', getItemId())
	const item = state.items.filter((item) => {
		return item.id === getItemId()
	})[0]
	console.log('item', item)
	return item
}

function load() {
	const item = getItem()
	displayProduct(item)
	displayProductDescription(item)
	// After this I can call any function I want to use to use here.
	// Item will be the -item- I clicked on from the last page.
}

function displayProduct(item) {
	const body = document.querySelector('body')

	const div = document.createElement('div')
	body.append(div)

	const h1 = document.createElement('h1')
	h1.innerText = 'Wolframe96'
	div.append(h1)

	const img = addImage(item)
	img.className = 'product-img'
	div.append(img)

	const prodName = document.createElement('h2')
	prodName.innerText = item.name
	prodName.className = 'product-name'
	div.append(prodName)

	const priceText = document.createElement('p')
	priceText.className = 'price-text'
	priceText.innerText = 'Price'
	div.append(priceText)

	const price = document.createElement('p')
	price.className = 'price-tag'
	price.innerText = '$' + item.price
	div.append(price)


  const description = displayProductDescription(item)
  description.className = 'description'
  div.append(description)

	// i.e. displayProductDescription()
}

function addImage(item) {
	const image = document.createElement('img')
	image.src = `../img/Prodotti/${item.id}.png`
	return image
}

function displayProductDescription(item) {
	const p = document.createElement('p')
	p.innerText = item.description
	return p
}

load()
