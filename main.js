// Dependency for inquirer npm package
var inquirer = require("inquirer");

//Requiring the BasicCard and the ClozeCard exported from BasicCard.js and ClozeCard.js
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

//Begin the Flashcard Generator
console.log("Welcome to the Flashcard Generator");

//Inquire Prompt
function startGenerator() {
	//Ask what type of card to show
	inquirer.prompt([
		{
			type: "list",
			message: "Which type of cards do you wish to answer?",
			choices: ["Basic Cards", "Cloze Cards"],
			name: "cardOption"
		}
	]).then(function(data){
		//Save the user's choices:
		var chosenOption = data.cardOption;

		//When user chooses Basic Cards:
		if(chosenOption === "Basic Cards") {
			//Create the Basic Cards
			var question1 = new BasicCard("Who was the first president of the United States?", "George Washington");
			//Ask question
			inquirer.prompt([
				{
					type: "input",
					message: question1.front,
					name: "firstQuestion"
				}
			]).then(function(answer) {
				if (answer.firstQuestion == question1.back) {
					console.log("You are correct!");
					console.log("The answer is " + question1.back);
				} else {
					console.log("Incorrect!");
					console.log("The answer is " + question1.back);
				}
			});
		//When user chooses Cloze Option
		} else {
			//Create Cloze question
			var question1Cloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
			//Ask question
			inquirer.prompt([
				{
					type: "input",
					message: question1Cloze.partial,
					name: "firstQuestionCloze"
				}
			]).then(function (answerCloze) {
				if (answerCloze.firstQuestionCloze == question1Cloze.cloze) {
					console.log("You are Correct!");
					console.log(question1Cloze.fullText);
				} else {
					console.log("Incorrect!");
					console.log(question1Cloze.fullText);
				}
			});
	}
	});
};

//Call start function
startGenerator();
