//Tableau carrousel

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Création des dots

let dots = document.querySelector(".dots");   	//récupération des propriétés "dots"
for (let slide in slides) {						//mise en place d'une boucle qui parcourt tous les slides du tableau = Pour chaque slide du tableau slides:
	const dot = document.createElement("span")	//	->création d'un élément 'dot' avec la balise "span"
	dot.classList.add("dot")					//	->on attribue la class "dot" à l'élément 'dot' créé
		if (slide == 0) {						// Condition : Si l'indice de la slide est 0 : 
		dot.classList.add("dot_selected")		// alors on ajoute à l'élément 'dot' la class "dot_selected"
	}
	dots.appendChild(dot)						//J'insére l'élément 'dot' dans le DOM : 'dot' est un enfant de 'dots'						
}

//Défilement du slide avec les flèches

let next = document.querySelector(".arrow_right")
let prev = document.querySelector(".arrow_left")
let compteur = 0 								//Compteur correspond à l'indice du tableau : commence à 0

next.addEventListener("click", function () {	//Au click sur la flèche droite : 
	console.log("Vous avez cliqué sur la flèche droite")	//je teste mon événement
	if (compteur < slides.length - 1) {			//SI compteur < à la dernière image du tableau
		compteur += 1							//compteur est incrémenté de 1 
	} else {									//SINON  
		compteur = 0							//le slider repart à la première image (indice 0 du tableau)
	}
	console.log(compteur)
	let bannerImg = document.querySelector(".banner-img")					//Insertion des images à partir des propriétés CSS
	bannerImg.src = "./assets/images/slideshow/" + slides[compteur].image	//et du tableau JS (construction du chemin d'accès)
	let bannerP = document.querySelector("#banner p")						//Insertion des tag line à partir des propriétés CSS
	bannerP.innerHTML = slides[compteur].tagLine							//et du tableau JS
	const dot = document.querySelectorAll(".dot")							//Récupération des propriétés "dot"
	document.querySelector(".dot_selected").classList.remove("dot_selected") //Suppression de la classe "dot_selected" du premier dot déclarée pour l'indice 0 du tableau
	dot[compteur].classList.add("dot_selected")								//Ajout de la class "dot_selected" au 'dot' pour lequel l'indice correspond au compteur du tableau
	console.log(dot[compteur])
})

prev.addEventListener("click", function () {	//Au click sur la flèche gauche :
	console.log("vous avez cliqué sur le flèche gauche")	//je teste mon événement
	if (compteur > 0) {							//SI compteur > à la première image du tableau
		compteur -= 1							//compteur est décrémenté de 1 
	} else {									//SINON 
		compteur = slides.length - 1			//le slider repart à la dernière image (indice 3 du tableau)
	}
	console.log(compteur)
	let bannerImg = document.querySelector(".banner-img")
	bannerImg.src = "./assets/images/slideshow/" + slides[compteur].image
	let bannerP = document.querySelector("#banner p")
	bannerP.innerHTML = slides[compteur].tagLine
	const dot = document.querySelectorAll(".dot")
	document.querySelector(".dot_selected").classList.remove("dot_selected")
	dot[compteur].classList.add("dot_selected")	
	console.log(dot[compteur])
})









