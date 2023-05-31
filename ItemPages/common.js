import { state } from '../Main/state.js'

function getItemId() {
	const id = window.location.href.split('/')[4].split('.')[0]

	return id
}

function getItem() {
	console.log(getItemId())
	const item = state.items.filter((item) => {
		return item.id === getItemId()
	})[0]
	console.log(item)
	return item
}

function load() {
  const item = getItem()
  // After this I can call any function I want to use to use here.
  // Item will be the -item- I clicked on from the last page.
}

function displayProduct() {
  // i.e. displayProductDescription()
}

load()


// Responsible for what's shown in the product page