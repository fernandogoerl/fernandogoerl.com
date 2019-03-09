const scrollTo = (id, event) => {
	event.preventDefault()
	document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'start'})
	Location.href = document.URL + id
	console.log(Location.href);

}

export default { scrollTo }