const icons = [
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
		type: 'animal',
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
		type: 'animal',
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

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function addIcon(name, color) {
	const icon = document.createElement("div");
	icon.classList.add("card");
	icon.innerHTML = `
	<i class="fa-solid fa-${name}" style="color:${color}"></i>
	<div class="name">${name}</div>`
	document.getElementById("container").append(icon);
}

document.querySelector("select#filter").addEventListener("change", function () {
	document.getElementById("container").innerHTML="";
	switch (this.value) {
		case "all":
			icons.forEach((element) => {addIcon(element.name, element.color) })
			break;
		case "animal":
			randomColor=getRandomColor();
			const animal = icons.filter(element => {
				if (element.type == "animal") {
					element.color=randomColor;
					return true;
				}
			});
			
			animal.forEach((element) => { addIcon(element.name, element.color) })
			break;
		case "vegetable":
			randomColor=getRandomColor();
			const vegetable = icons.filter(element => {
				if (element.type == "vegetable") {
					element.color=randomColor;
					return true;
				}
			});
			vegetable.forEach((element) => { addIcon(element.name, element.color) })
			break;
		case "user":
			randomColor=getRandomColor();
			const user = icons.filter(element => {
				if (element.type == "user") {
					element.color=randomColor;
					return true;
				}
			});
			user.forEach((element) => { addIcon(element.name, element.color) })
			break;
	}
})
icons.forEach((element) => {addIcon(element.name, element.color)})
