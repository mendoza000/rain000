import {crearHomePage} from './home-page'
import { getData } from './clima-service'
import { crearNav } from './nav-component'
import { searchData } from './search-page'
let location = "home"

const eventosNav = async () => {
	const navList = document.querySelector('.nav_list');

	navList.addEventListener('click', async (event) => {
		const elem = event.target

		if (elem.classList.contains("home")
		|| elem.classList.contains("la-home")) {
			console.log("home");

			const data = await getData()
			crearHomePage(data)
			document.querySelector('.la-home').classList.add("cs")
			document.querySelector('.la-globe').classList.remove("cs")
			eventosNav()


		}

		if (elem.classList.contains("globe") 
		|| elem.classList.contains("la-globe")) {
			
			console.log("globe");
			searchData()
			document.querySelector('.la-globe').classList.add("cs")
			document.querySelector('.la-home').classList.remove("cs")
			eventosNav()
			

		}

		if (elem.classList.contains("heart")
		|| elem.classList.contains("la-heart")) {
			
			if (location === "heart") { return "Ya esta en heart"}

			location = "heart"

		}

		if (elem.classList.contains("user")
		|| elem.classList.contains("la-user-secret")) {
			
			if (location === "user") { return "Ya esta en user"}

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