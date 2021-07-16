import { getData } from './clima-service';
import { crearNav } from './nav-component';

const crearCard = (data) => {
	document.querySelector('.search_container').innerHTML = `

	<div class="header">
		<h1 class="header_title"><i class="icon las la-compass"></i> ${data.name}</h1>
		<span class="temp">${Math.ceil(data.main.temp - 273.15)}<span class="cs">°C</span></span>
	</div>

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
}

const crearError = () => {
	document.querySelector('.search_container').innerHTML = `
	<div class="search_error">
			<span class="error_title">:(</span>
			<span class="error_text">No se ha encontrado esa ciudad<span class="cs">!</span> </span>
		</div>

	`
}

export const searchData = async () => {

	crearNav()

	document.querySelector('body').innerHTML += `
	<div class="search">
		<input type="search" placeholder="Buscar una ubicación" class="search_input">
		<button class="search_btn"><i class="las la-search"></i></button>
	</div>

	<div class="search_container">	
	</div>
	`

	const input = document.querySelector('.search_input');
	const btn   = document.querySelector('.search_btn');

	input.addEventListener('keyup', async (event) => {
		
		if (event.keyCode === 13 
		&& event.target.value != ""
		&& event.target.value != " ") {
			getData(event.target.value)
			.then(elem => crearCard(elem))
			.catch(crearError())
			event.target.value = ""
		}

		btn.addEventListener('click', function(e) {
			if (event.target.value != ""
			&& event.target.value != " ") {
				getData(event.target.value)
				.then(elem => crearCard(elem))
				.catch(crearError())
				event.target.value = ""
			}
		});

	});
}