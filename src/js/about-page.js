import { crearNav } from './nav-component';

export const crearAbout = () => {
	crearNav()

	document.querySelector('body').innerHTML += `

	<div class="about">
		<div class="header_circle"></div>
		<span class="about_title">Hecho por <span class="cs">Omar Mendoza</span>.</span>

		<span class="about_text">Para la creacion de esta aplicacion se ocupo la API de<span class="cs">OpenWeather</span> y <span class="cs">Webpack</span></span>

		<div class="about_contact">
			<a target="_blank" href="https://twitter.com/mendoza000x">
			<i class="lab la-twitter"></i>
		</a>
		<a target="_blank" href="https://t.me/mendoza000">
			<i class="lab la-telegram"></i>
		</a>
		<a target="_blank" href="https://github.com/mendoza000">
			<i class="lab la-github-alt"></i>
		</a>
		</div>
	</div>
	`


}