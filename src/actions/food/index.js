import { api } from "../api.js";

async function getFoodImage ()
{
	try {
		const response = await fetch(api);
		const data = await response.json();
		const imageData = data.image;
		return imageData;

	} catch (error) {
		console.error("Error fetching data:", error);
		return null; 
	}		
}

async function getCardImages ()
{
	console.log(await getFoodImage())
}

let img = document.getElementById('firstImg');
let imgSrc = await getFoodImage();
img.src = imgSrc;