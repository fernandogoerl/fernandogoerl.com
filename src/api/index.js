// const api = "http://localhost:3000"

// const headers = {
//   'Accept': 'application/json',
// }

// export const get = (bookId) =>
//   fetch(`${api}/books/${bookId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book)


import WorkImageReact from '../img/work.image.react.png'
import WorkImageGames from '../img/work.image.games.png'
import WorkImageWebsites from '../img/work.image.websites.png'
import Diploma from '../docs/Fernando-Goerl-diploma-senac.pdf'

export const getExp = () => (
	// fetch(`${api}/experience`, { headers })
	//   .then(res => res.json())
	// 	.then(data => {
	// 		return data.exp
	// 	})
	new Promise( (res, rej) =>
		res({
			'2018 - 2019': {
				Company: 'RCA DIGITAL',
				JobTitle: 'Front-end Developer',
				Description: `RCA Digital is a Software Development company, where I worked as a Front‑End Developer, mostly on Angular 2+ SPAs, with Sass and Bootstrap for stylization and GIT for version management.`,
			},
			'2017 - 2018': {
				Company: 'NUMO COMPANY',
				JobTitle: 'Front-end Developer',
				Description: `Numo is a startup that develops mobile apps and websites. At Numo Company, I worked as Front-end Developer. All projects were build with Angular or React Frameworks, using GIT and Agile methodologies.`,
			},
			'2013 - 2016': {
				Company: 'SORTIMENTOS',
				JobTitle: 'Web Developer',
				Description: `The Sortimentos Group is an online news aggregator focusing mainly on Technology, Entretainment and Fashion. I worked as a Web Developer, using technologies such as HTML5, CSS3, Javascript, JQuery and GIT.`,
			},
		}))
)

export const getEducation = () => (
	// TODO fetch(`${api}/education`, { headers })
	//   .then(res => res.json())
	// 	.then(data => {
	// 		return data.education
	// 	})
	new Promise( (res, rej) =>
		res({
			'Udacity': {
				Icon: 'diploma',
				Subject: 'React Development',
				Degree: 'Nanodegree',
				Url: 'https://confirm.udacity.com/S26GKUJ',
			},
			'Faculdade Senac': {
				Icon: 'diploma',
				Subject: 'Multimedia Producer',
				Degree: 'College Diploma',
				Url: Diploma,
			},
			'Alura': {
				Icon: 'course',
				Subject: 'Front-end Developer',
				Degree: 'Online Course',
				Url: 'https://cursos.alura.com.br/career/certificate/486813c5-aa3d-4586-b89f-71350d7b8027',
			},
		}))
)

export const getSkills = () => (
  // fetch(`${api}/skills`, { headers })
  //   .then(res => res.json())
	// 	.then(data => {
	// 		return data.skills
	// 	})
	new Promise( (res, rej) =>
		res({
			'Frameworks':{
				'Angular 2+' : 100,
				'React' : 90,
				'React Native' : 60,
				'NodeJS' : 60,
				'VueJS' : 10,
				'jQuery' : 100,
			},
			'Web Technologies':{
				'HTML5' : 100,
				'CSS3' : 100,
				'Javascript / ES7' : 100,
				'Typescript' : 90,
				'Sass / Stylus' : 100,
				'Bootstrap / Bulma' : 100,
			},
			'Other':{
				'English' : 100,
				'Adobe Photoshop' : 80,
				'Wordpress' : 80,
				'Cross-Browser' : 100,
				'GIT' : 100,
				'Agile Methodologies' : 60,
			},
		}))
)

export const getWork = () => (
  // fetch(`${api}/work`, { headers })
  //   .then(res => res.json())
	// 	.then(data => {
	// 		return data.skills
	// 	})
	new Promise( (res, rej) =>
		res([
			{
				Name : 'My Reads',
				Category: 'React Development Project',
				Description: "This is a personal bookshelfs manager app created for Udacity's React Developer Nanodegree. It can manage books into three shelves: Reading, Want to Read and Read.",
				Image: WorkImageReact,
				Url: 'https://fernandogoerl.github.io/myreads-app/',
			},
			{
				Name : 'Matemax',
				Category: 'Game Development',
				Description: "Matemax is an Educational Game that teaches math and multiplication. I was responsible for the level design and development of the game.",
				Image: WorkImageGames,
				Url: 'https://ensinocriativo.com.br/games/matemax',
			},
			{
				Name : 'Numo, FIPS, Hauskin and more',
				Category: 'E-commerce and Websites',
				Description: "I've worked for many years developing websites using HTML, CSS and WordPress. You can see a sample of my work on Hauskin's website.",
				Image: WorkImageWebsites,
				Url: 'http://hauskin.com.br/',
			},
		]))
)

export const getContacts = () => (
  // fetch(`${api}/contacts`, { headers })
  //   .then(res => res.json())
	// 	.then(data => {
	// 		return data.skills
	// 	})
	new Promise( (res, rej) =>
		res([
			{
				Type : 'Mobile phone',
				Info : '+55 51 99993-3460',
				Url : 'tel:+5551999933460',
			},
			{
				Type : 'Skype',
				Info : 'Fernando Goerl (fernandogoerl)',
				Url : 'skype:fernandogoerl?add',
			},
			{
				Type : 'E-mail address',
				Info : 'fernandogoerl@gmail.com',
				Url : 'mailto:fernandogoerl@gmail.com',
			},
			{
				Type : 'LinkedIn',
				Info : 'Fernando Goerl',
				Url : 'https://www.linkedin.com/in/fernandogoerl/',
			},
		]))
)


// export const getGreeting = () =>
// 	fetch(`${api}/`, { headers })
// 		.then(res => res.json())
// 		.then(data => data.greeting)


// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: 'PUT',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ shelf })
//   }).then(res => res.json())

// export const search = (query) =>
//   fetch(`${api}/search`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query })
//   }).then(res => res.json())
//     .then(data => data.books)