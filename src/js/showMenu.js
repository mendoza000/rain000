const btn = document.querySelector('.header_btn');
const panel = document.querySelector('.header_panel');
let showPanel = true

export const defShowMenu = () => {

	btn.addEventListener('click', () => {

		if (!showPanel) {
			panel.style.maxHeight = "0px"
			panel.style.padding = "0em"
			btn.style.backgroundColor = "var(--color-secondary)"
			showPanel = !showPanel
		}else{
			panel.style.maxHeight = panel.scrollHeight + "px"
			panel.style.padding = "1em"
			btn.style.backgroundColor = "var(--color-secondary-o)"
			showPanel = !showPanel
		}
	});


}