import {crearHomePage} from './home-page'
import { getData } from './clima-service'

const eventosNav = () => {
	const navList = document.querySelector('.nav_list');

	navList.addEventListener('click', (event) => {
		const elem = event.target

		if (elem.classList.contains("globe") 
		|| elem.classList.contains("la-globe")) {
			console.log("globe");
		}

		if (elem.classList.contains("home")
		|| elem.classList.contains("la-home")) {
			console.log("home");
		}

		if (elem.classList.contains("heart")
		|| elem.classList.contains("la-heart")) {
			console.log("heart");
		}

		if (elem.classList.contains("user")
		|| elem.classList.contains("la-user-secret")) {
			console.log("user");
		}

	});
}


export const init = async () => {

	const data = await getData()
	crearHomePage(data)
	/*eventosLocation()*/
	eventosNav()

}