import { state } from "../Main/state.js"

function getItemId() {
	const id = window.location.href.split('/')[4].split('.')[0]

	return id
}

function load() {
	console.log(getItemId())
}

console.log(state.items)
load()
