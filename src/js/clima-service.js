const key = "811ac052a60c46e5e5e6871833b4aac3"

export const getData = async (region = "pregonero") => {

	try{
		const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${key}`)

		if (!resp.ok) {throw "Ha ocurrido un error buscando esa ciudad :("}

		const data = await resp.json()

		return data
	}
	catch(e){throw e+ "error xd"}

}