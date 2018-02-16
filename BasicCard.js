//Basic flashcards, which have a front "Who was the first president of the United States?", and a back "George Washington"

//Constructor for the basic flash cards
// The constructor should accept two arguments
function BasicCard(front, back) {
	//Creating a scope-safe constructor
	if(this instanceof BasicCard) {
		// contains the text on the front of the card.
		this.front = front;
		// contains the text on the back of the card.
		this.back = back;
	} else {
		//This makes the constructor so that users can call them with or without the new keyword.
		return new BasicCard(front, back);
	}
}

// creates the question & answer methods and applies it to all BasicCard objects
BasicCard.prototype.printFront = function() {
	console.log("Question: " + this.front);
};

BasicCard.prototype.printBack = function() {
	console.log("Answer: " + this.back);
};

//Define a Node module that exports a constructor for creating basic flashcards:
module.exports = BasicCard;
