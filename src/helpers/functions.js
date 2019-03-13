import history from '../config/history'

const scrollTo = (id, event) => {
	if(event) event.preventDefault()
	document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'start'})
	if(id !== 'hero') {
		history.push(`#${id}`)
	} else history.push('')

}

export default { scrollTo }