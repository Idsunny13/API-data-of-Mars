document.querySelector('button').addEventListener('click', getImage)

function getImage() {
	let date = document.querySelector('input').value
	
	fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=2N65f8krlBSeb69DPb60VQHS0JEVE04sTh4vP0iA`)
	.then (res => res.json())
	.then (data => {
		console.log(data.photos[0])
		document.querySelector('img').src = data.photos[0].img_src
		document.querySelector('h2').innerHTML = `Name: ${data.photos[0].camera.full_name}`
	})
}
