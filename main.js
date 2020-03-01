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

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

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

// lists all people that could be players
const listPeopleChoices = () => {
	const listElement = document.getElementById("people");
	arrOfPeople.map((person) => {
		if (person) {
			const li = document.createElement("li");
			const button = document.createElement("button");
			button.innerHTML = "Make Player";

			button.addEventListener("click", function() {
				makePlayer(person.id);
				listElement.removeChild(li);
			});
			li.appendChild(button);
			li.appendChild(
				document.createTextNode(person.name + " - " + person.skillSet)
			);
			listElement.append(li);
		}
	});
};

// fills listOfPlayers variable...makes a player
const makePlayer = (id) => {
	let person = arrOfPeople.find(function(player) {
		return player.id == id;
	});
	// finds the index of the person id
	let personIndex = arrOfPeople.indexOf(person);
	// cuts the person /index
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
	const listElement = document.getElementById("players");
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(newPlayer.name));
	const blueButton = document.createElement("button");
	blueButton.innerHTML = "Blue Team";
	blueButton.addEventListener("click", function() {
		makeBluePlayer(newPlayer.id);
		listElement.removeChild(li);
	}); //create blue button
	li.appendChild(blueButton);
	const redButton = document.createElement("button");
	redButton.innerHTML = "Red Team";
	redButton.addEventListener("click", function() {
		makeRedPlayer(newPlayer.id);
		listElement.removeChild(li);
	});
	li.appendChild(redButton);
	listElement.append(li);
	// console.log(`li ${id} was clicked!`);
	console.log(person);
};

const makeBluePlayer = (id) => {
	debugger;
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
