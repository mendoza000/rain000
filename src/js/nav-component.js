export const crearNav = () => {

	document.querySelector('body').innerHTML = `

	<nav class="nav">
		<ul class="nav_list">
			<li class="nav_item">
				<a href="#" class="home">
					<i class="icon las la-home"></i>
				</a>
			</li>
			<li class="nav_item">
				<a href="#" class="globe">
					<i class="icon las la-globe"></i>
				</a>
			</li>
			<li class="nav_item">
				<a href="#" class="heart">
					<i class="icon lar la-heart"></i>
				</a>
			</li>
			<li class="nav_item">
				<a href="#" class="user">
					<i class="icon las la-user-secret"></i>
				</a>
			</li>
		</ul>
	</nav>

	`

}