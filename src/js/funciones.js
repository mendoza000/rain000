import {crearHomePage} from './home-page'
import { getData } from './clima-service'
import { crearNav } from './nav-component'
import { searchData } from './search-page'
import { crearAbout } from './about-page'
let location = "home"

const eventosNav = async () => {
	const navList = document.querySelector('.nav_list');

	navList.addEventListener('click', async (event) => {
		const elem = event.target


		if (elem.classList.contains("home")
		|| elem.classList.contains("la-home")) {
			console.log("home");
			if (location === "home") { return "Ya esta en search"}

			const data = await getData()
			crearHomePage(data)
			document.querySelector('.la-home').classList.add("cs")
			document.querySelector('.la-globe').classList.remove("cs")
			document.querySelector('.la-user-secret').classList.remove("cs")
			eventosNav()

			location = "home"
		}

		if (elem.classList.contains("globe") 
		|| elem.classList.contains("la-globe")) {

			if (location === "globe") { return "Ya esta en search"}
			
			console.log("globe");
			searchData()
			document.querySelector('.la-globe').classList.add("cs")
			document.querySelector('.la-home').classList.remove("cs")
			document.querySelector('.la-user-secret').classList.remove("cs")
			eventosNav()

			location = "globe"
			

		}

		if (elem.classList.contains("heart")
		|| elem.classList.contains("la-heart")) {
			
			if (location === "heart") { return "Ya esta en heart"}

			location = "heart"

		}

		if (elem.classList.contains("user")
		|| elem.classList.contains("la-user-secret")) {
			
			if (location === "user") { return "Ya esta en user"};

			crearAbout()
			document.querySelector('.la-globe').classList.remove("cs")
			document.querySelector('.la-user-secret').classList.add("cs")
			document.querySelector('.la-home').classList.remove("cs")
			eventosNav()


			location = "user"

		}

	});
}


export const init = async () => {

	const data = await getData()
	crearHomePage(data)
	eventosNav()
	document.querySelector('.la-home').classList.add("cs")

}