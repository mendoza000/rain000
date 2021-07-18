import { defShowMenu } from './showMenu';
import { crearNav } from './nav-component';
import { getData } from './clima-service'

export const crearHomePage = async (data) => {
	crearNav()

	document.querySelector('body').innerHTML += `
	<header class="header">

		<!-- <div class="btn_container">
			<button class="header_btn">Seleccionar ubicación</button>
			<div class="header_panel">
			 	<button class="header_panel_btn">Pregonero</button>
			 	<button class="header_panel_btn">San Cristobal</button>
			 	<button class="header_panel_btn">Barinas</button>
			 	<button class="header_panel_btn">Caracas</button>
			</div>
		</div> -->

		<div class="header_circle">
			<!-- <img src="./assets/044-cloudy-2.png" alt="time_img"> -->
		</div>
		<h1 class="header_title"><i class="icon las la-compass"></i> ${
			(data.name === "Tariba")
			? "San Cristobal"
			: data.name
		}</h1>
		<span class="temp">${Math.ceil(data.main.temp - 273.15)}<span class="cs">°C</span></span>
	</header>

	<div class="container">
		<span><i class="icon las la-cloud-sun"></i> ${
			(data.weather[0].main === "Clouds")
			? "Nublado"
			: data.weather[0].main
		}</span>
		<span><i class="icon las la-wind"></i> Viento: ${data.wind.speed}km/h</span>
		<span><i class="icon las la-tree"></i> Humedad: ${data.main.humidity}%</span>
		<span><i class="icon las la-tachometer-alt"></i> Presión: ${data.main.pressure}hPa</span>
	</div>


	`

	defShowMenu()

	const btns = document.querySelector('.header_panel');

	btns.addEventListener('click', async (event) => {
		const elem = event.target.innerText;
		console.log(elem);

		if (elem === "Pregonero") {
			const data = await getData(elem);
			crearHomePage(data);
		}
		if (elem === "San Cristobal") {
			const data = await getData("tariba");
			crearHomePage(data);
		}
		if (elem === "Barinas") {
			const data = await getData(elem);
			crearHomePage(data);
		}
		if (elem === "Caracas") {
			const data = await getData(elem);
			crearHomePage(data);
		}

	});
}