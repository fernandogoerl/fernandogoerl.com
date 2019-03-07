// const api = "http://localhost:3000"

// const headers = {
//   'Accept': 'application/json',
// }

// export const get = (bookId) =>
//   fetch(`${api}/books/${bookId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book)


export const getExp = () => (
	// fetch(`${api}/experience`, { headers })
	//   .then(res => res.json())
	// 	.then(data => {
	// 		return data.exp
	// 	})
	new Promise( (res, rej) =>
		res({
			'2013 - 2016': {
				Company: 'SORTIMENTOS',
				JobTitle: 'Web Developer',
				Description: `The Sortimentos Group is an online news aggregator focusing mainly on Technology, Entretainment and Fashion. I worked as a Web Developer, using technologies such as HTML5, CSS3, Javascript, JQuery and GIT.`,
			},
			'2017 - 2018': {
				Company: 'NUMO COMPANY',
				JobTitle: 'Front-end Developer',
				Description: `Numo is a startup that develops mobile apps and websites. At Numo Company, I worked as Front-end Developer. All projects were build with Angular or React Frameworks, using GIT and Agile methodologies.`,
			},
			'2018 - 2019': {
				Company: 'RCA DIGITAL',
				JobTitle: 'Front-end Developer',
				Description: `RCA Digital is a Software Development company, where I worked as a Front‑End Developer, mostly on Angular 2+ SPAs, with Sass and Bootstrap for stylization and GIT for version management.`,
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
			'2013 - 2016': {
				Company: 'SORTIMENTOS',
				JobTitle: 'Web Developer',
				Description: `The Sortimentos Group is an online news aggregator focusing mainly on Technology, Entretainment and Fashion. I worked as a Web Developer, using technologies such as HTML5, CSS3, Javascript, JQuery and GIT.`,
			},
			'2017 - 2018': {
				Company: 'NUMO COMPANY',
				JobTitle: 'Front-end Developer',
				Description: `Numo is a startup that develops mobile apps and websites. At Numo Company, I worked as Front-end Developer. All projects were build with Angular or React Frameworks, using GIT and Agile methodologies.`,
			},
			'2018 - 2019': {
				Company: 'RCA DIGITAL',
				JobTitle: 'Front-end Developer',
				Description: `RCA Digital is a Software Development company, where I worked as a Front‑End Developer, mostly on Angular 2+ SPAs, with Sass and Bootstrap for stylization and GIT for version management.`,
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