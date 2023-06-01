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

function displayProduct(item) {
	const body = document.querySelector('body')

  const div = document.createElement('div')
  div.className = 'container'
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


	const feature = displayProductFeatures(item)
	feature.className = 'feature'
	div.append(feature)

	const addToCart = document.createElement('button')
	addToCart.className = 'add-to-cart'
	addToCart.innerText = 'Add To Cart'
	div.append(addToCart)

	const buyNow = document.createElement('button')
	buyNow.className = 'buy-now'
	buyNow.innerText = 'Buy Now'
  div.append(buyNow)
  
//   const cart = document.createElement('img')
//   cart.src = '../img/cart.svg'
// cart.className = 'cart-img'
//   h1.append(cart)

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
  terms.innerText = '© 2023 General Workings Inc. Interagendo con questa pagina accetti i nostri <b>Termini &\
        condizioni and Cookie Policy.'
  body.append(terms)
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
load()
