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
	displayProductFeatures(item)
	displayFooter()
	// After this I can call any function I want to use to use here.
	// Item will be the -item- I clicked on from the last page.
}

function addItemToCart(item) {
	if (!isItemInCart(item.name)) {
		addCounter(item)
	}
	state.cart.push(item)

	updateQuantity(item)
}

// function updateQuantity(quantityItem) {
// 	const quantityItems = state.cart.filter(
// 		(cartItem) => cartItem.name === quantityItem.name
// 	)
// 	const numOfItems = quantityItems.length

// 	// itemsTotalPrice()
// }

function isItemInCart(itemName) {
	const itemsInCart = state.cart.filter(
		(cartItem) => cartItem.name === itemName
	)
	if (itemsInCart.length > 0) {
		return true
	} else {
		return false
	}
}
const body = document.querySelector('body')

/* CONTAINER */
function displayProduct(item) {
	const div = document.createElement('div')
	div.className = 'container'
	body.append(div)

	/* H1 */
	const h1 = document.createElement('h1')
	h1.innerText = 'Wolframe96'
	div.append(h1)

	/* IMG */
	const img = addImage(item)
	img.className = 'product-img'
	div.append(img)

	/* NAME */
	const prodName = document.createElement('h2')
	prodName.innerText = item.name
	prodName.className = 'product-name'
	div.append(prodName)

	/* PRICE */
	const priceText = document.createElement('p')
	priceText.className = 'price-text'
	priceText.innerText = 'Price'
	div.append(priceText)

	/* ACTUAL PRICE */
	const price = document.createElement('p')
	price.className = 'price-tag'
	price.innerText = '$' + item.price
	div.append(price)

	/* DESCRIPTION */
	const description = displayProductDescription(item)
	description.className = 'description'
	div.append(description)

	/* FEATURE */
	// const feature = displayProductFeatures(item)
	// feature.className = 'feature'
	// div.append(feature)
	const features = item.feature
	console.log('ft', features)
	const featureList = document.createElement('ul')
	featureList.className = 'feature'
  div.append(featureList)
  
	features.forEach((item) => {
		const feature = document.createElement('li')
		feature.innerText = item

		featureList.append(feature)
	})

	/* ADD TO CART BUTTON */
	const addToCart = document.createElement('button')
	addToCart.className = 'add-to-cart'
	addToCart.innerText = 'Add To Cart'
	addToCart.addEventListener('click', () => {
		addItemToCart(item)
	})
	div.append(addToCart)

	/* BUY NOW BUTTON */
	const buyNow = document.createElement('button')
	buyNow.className = 'buy-now'
	buyNow.innerText = 'Buy Now'
	div.append(buyNow)

	/* FOOTER */
	const footer = document.createElement('footer')
	footer.className = 'footer'
	body.append(footer)

	const link = document.createElement('a')
	link.href = 'https://streamlabs.com/it-it/creator-sites'
	footer.append(link)

	const logo = document.createElement('img')
	logo.src = '/img/Streamlabs-Logo.png'
	link.append(logo)

	const terms = document.createElement('p')
	terms.className = 'terms'
	terms.innerText =
		'© 2023 General Workings Inc. Interagendo con questa pagina accetti i nostri <b>Termini &\
        condizioni and Cookie Policy.'
	body.append(terms)
}

function addCounter(item) {
	const counter = document.createElement('div')
	counter.id = item.name
	counter.className = 'counter'
	counter.innerText = '1'
	body.append(counter)
}
function addImage(item) {
	const image = document.createElement('img')
	image.src = `../img/Prodotti/${item.id}.png`
	return image
}

function displayProductDescription(item) {
	const description = document.createElement('p')
	description.innerText = item.description
	return description
}

function displayProductFeatures(item) {
	const feature = document.createElement('p')
	feature.innerText = item.feature
	return feature
}

function displayFooter() {
	const footer = document.createElement('footer')
	return footer
}

// function addQuantity(item) {
// 	const quantityButton = document.createElement('button')
// 	quantityButton.id = item.name
// 	addToCart.append(quantityButton)
// }

// function itemsTotalPrice() {
// 	const totalPrice = document.querySelector('.total-number')
// 	let total = 0
// 	state.cart.forEach((item) => {
// 		const price = item.price
// 		total += price
// 	})
// 	if (total == 0) {
// 		totalPrice.innerText = '£ 0.00'
// 	} else {
// 		totalPrice.innerText = `£ ${total.toFixed(2).toString()}`
// 	}
// }
load()
