let cards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'fat-animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'fat-animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let randomColor = false;
generaOptions();
generaCards();

const filterSelect = document.getElementById('filter');
filterSelect.addEventListener('change',function(){
	console.log('ho cambiato filtro',filterSelect.value);
	generaCards(filterSelect.value);
});

const colorFilter = document.getElementById('colorFilter');
colorFilter.addEventListener('change',function(){
	console.log('ho cambiato filtro',colorFilter.value);
	if(colorFilter.value == 'random')
		randomColor = true;
	else
		randomColor = false;
});

function generaOptions(){
	let option = document.getElementById('filter');
	allOptions = [];
	cards.forEach((card) =>{
		if(newOption(card.type,allOptions)){
			allOptions.push(card.type);
			option.innerHTML += `
				<option value="${card.type}">${card.type}</option>
			`;
		}
	});
}

function newOption(element,optionsArray){
	//console.log('sono entrato nella funzione newOption');
	//console.log(optionsArray);
	for(let i=0; i<optionsArray.length; i++)
		if(element == optionsArray[i])
			return false;
	return true;
}

function generaCards(value){
	let generaTutto = false;
	if(value == undefined || value == "")
		generaTutto = true;

	console.log('value = ',value);
	let container = document.getElementById('container-box');
	container.innerHTML ="";
	cards.forEach((card) => {
		let colore = card.color;
		if(randomColor){
			generaColoreCards();
			colore = card.coloreRandom;}
		else
			colore = card.color;
		//console.log(card.name);
		if(value == card.type || generaTutto)
			container.innerHTML +=`
			<div class="box">
				<i style="color:${colore}" class="fas fa-${card.name}"></i>
				<p>${card.name.toUpperCase()}</p>
			</div>
			`;
	});
}

function generaColoreCards(){
	console.log(cards);
	cards.forEach((card) => {
		let colore ="";
		for(let i = 0 ; i < 6; i++){
			let random = Math.floor(Math.random()*16);
			random = convertiInEsadecimale(random);
			colore += random;
		}
		//console.log(colore);
		card.coloreRandom = '#'+colore;
	});
}

function convertiInEsadecimale(numero){
	let numeroHex = numero.toString(16);
	return numeroHex;
}

//#000000

/*let numero = 15;
let numeroHex = numero.toString(16);
console.log(numeroHex);*/
