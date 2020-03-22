const arrOfPeople = [
	{
		id: 2,
		name: "Charles Young",
		age: 55,
		skillSet: "welding",
		placeBorn: "Omaha, Nebraska"
	},
	{
		id: 3,
		name: "Judy Twilight",
		age: 35,
		skillSet: "fishing",
		placeBorn: "Louisville, Kentucky"
	},
	{
		id: 4,
		name: "Cynthia Doolittle",
		age: 20,
		skillSet: "tic tac toe",
		placeBorn: "Pawnee, Texas"
	},
	{
		id: 5,
		name: "John Willouby",
		age: 28,
		skillSet: "pipe fitting",
		placeBorn: "New York, New York"
	},
	{
		id: 6,
		name: "Stan Honest",
		age: 20,
		skillSet: "boom-a-rang throwing",
		placeBorn: "Perth, Australia"
	},
	{
		id: 7,
		name: "Mia Watu",
		age: 17,
		skillSet: "acrobatics",
		placeBorn: "Los Angeles, California"
	},
	{
		id: 8,
		name: "Walter Cole",
		age: 32,
		skillSet: "jump rope",
		placeBorn: "New Orleans, Louisiana"
	}
];

const listOfPlayers = []; //arrayOfPeople become list of players
const blueTeam = []; // listOfPlayers become a teammate
const redTeam = []; // listOfPlayers become a teammate

class Player {
	constructor(
		id,
		name,
		age,
		canThrowBall,
		canDodgeBall,
		skillSet,
		hasPaid,
		isHealthy,
		yearsExperience
	) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.canThrowBall = canThrowBall;
		this.canDodgeBall = canDodgeBall;
		this.skillSet = skillSet;
		this.hasPaid = hasPaid;
		this.isHealthy = isHealthy;
		this.yearsExperience = yearsExperience;
	}
}
class blueTeammate {
	constructor(
		id,
		name,
		age,
		canThrowBall,
		canDodgeBall,
		skillSet,
		hasPaid,
		isHealthy,
		yearsExperience,
		mascot,
		color
	) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.canThrowBall = canThrowBall;
		this.canDodgeBall = canDodgeBall;
		this.skillSet = skillSet;
		this.hasPaid = hasPaid;
		this.isHealthy = isHealthy;
		this.yearsExperience = yearsExperience;
		this.mascot = mascot;
		this.color = color;
	}
}

class redTeammate {
	constructor(
		id,
		name,
		canThrowBall,
		canDodgeBall,
		skillSet,
		hasPaid,
		isHealthy,
		yearsExperience,
		mascot,
		color
	) {
		this.id = id;
		this.name = name;
		this.canThrowBall = canThrowBall;
		this.canDodgeBall = canDodgeBall;
		this.skillSet = skillSet;
		this.hasPaid = hasPaid;
		this.isHealthy = isHealthy;
		this.yearsExperience = yearsExperience;
		this.mascot = mascot;
		this.color = color;
	}
}

// lists all people that could be players function that is called with the onclick
const listPeopleChoices = () => {
	//assigns listElement to the HTML element with the ID of people
	const listElement = document.getElementById("people");
	//mapp loops thru the arrOfPeople...
	arrOfPeople.map((person) => {
		if (person) {
			// a list element is created mand
			const li = document.createElement("li");
			//a html button is created
			const button = document.createElement("button");
			// lables the button make player
			button.innerHTML = "Make Player";
			// listener event "moves" the eligible player from the list of people choices to the make player list.
			button.addEventListener("click", function() {
				makePlayer(person.id);
				// removes element from list of people
				listElement.removeChild(li);
			});
			// appends the li element to the const listElement
			listElement.append(li);
			// appends the "make player" button to the li element
			li.appendChild(button);
			// appends the person's name and skill set to the li element
			li.appendChild(
				document.createTextNode(person.name + " - " + person.skillSet)
			);
		}
	});
};

// fills listOfPlayers variable...makes a player
const makePlayer = (id) => {
	let person = arrOfPeople.find(function(player) {
		return player.id == id;
	});
	// finds the index of the person id from arrOfPeople
	let personIndex = arrOfPeople.indexOf(person);
	// cuts the person /index from arrOfPeople
	arrOfPeople.splice(personIndex, 1);
	// instantiates a new Player
	let newPlayer = new Player(
		person.id,
		person.name,
		person.age,
		true,
		true,
		person.skillSet,
		true,
		true,
		3
	);
	//sends to list of players array
	listOfPlayers.push(newPlayer);
	//creates a HTML element for new player
	const listElement = document.getElementById("players");
	// creates a list element
	const li = document.createElement("li");
	// appends the li with the player name
	li.appendChild(document.createTextNode(newPlayer.name));
	//creates a button in HTML doc
	const blueButton = document.createElement("button");
	// labels the button blue team
	blueButton.innerHTML = "Blue Team";
	//listener event removes the eligible player.
	blueButton.addEventListener("click", function() {
		makeBluePlayer(newPlayer.id);
		//removes the list element from the Dodge Ball Player list
		listElement.removeChild(li);
	});
	//appends the button to the list
	li.appendChild(blueButton);
	const redButton = document.createElement("button");
	redButton.innerHTML = "Red Team";
	//listener event removes the eligible player.
	redButton.addEventListener("click", function() {
		makeRedPlayer(newPlayer.id);
		//removes the list element from the Dodge Ball Player list
		listElement.removeChild(li);
	});
	li.appendChild(redButton);
	listElement.append(li);
	// console.log(`li ${id} was clicked!`);
	console.log(person);
};

const makeBluePlayer = (id) => {
	// debugger;
	let person = listOfPlayers.find(function(player) {
		return player.id == id;
	});
	console.log(person);

	let bluePlay = listOfPlayers.indexOf(person);
	listOfPlayers.splice(bluePlay, 1);
	// document.getElementById("blue").innerHTML = "";
	let bluePlayer = new blueTeammate(
		person.id,
		person.name,
		person.age,
		true,
		true,
		person.skillSet,
		true,
		true,
		3,
		"Jays",
		"Blue"
	);
	blueTeam.push(bluePlayer);
	// listOfPlayers.splice(bluePlay, 1);
	let blue = document.getElementById("blue");

	const li = document.createElement("li");
	li.appendChild(
		document.createTextNode(
			bluePlayer.name + "-" + bluePlayer.mascot + " " + bluePlayer.color
		)
	);
	blue.append(li);
};

const makeRedPlayer = (id) => {
	let person = listOfPlayers.find(function(player) {
		return player.id == id;
	});
	console.log(person);

	let redPlay = listOfPlayers.indexOf(person);
	listOfPlayers.splice(redPlay, 1);
	// document.getElementById("red").innerHTML = "";
	let redPlayer = new redTeammate(
		person.id,
		person.name,
		person.age,
		true,
		true,
		person.skillSet,
		true,
		true,
		3,
		"Devils",
		"Red"
	);
	redTeam.push(redPlayer);
	// listOfPlayers.splice(redPlay, 1);
	let red = document.getElementById("red");

	const li = document.createElement("li");
	li.appendChild(
		document.createTextNode(
			redPlayer.name + "-" + redPlayer.mascot + " " + redPlayer.color
		)
	);
	red.append(li);
};
