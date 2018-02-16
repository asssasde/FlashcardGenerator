//Cloze-Deleted flashcards, which present partial text "... was the first president of the United States.", and the full text when the user requests it "George Washington was the first president of the United States."

//Constructor for the cloze-deletion flashcards
// The constructor should accept two arguments: "text" and "cloze".
function ClozeCard(text, cloze) {
	//Creating a scope-safe constructor
	if(this instanceof ClozeCard) {
		//The .split() method removes the cloze from text
		this.text = text;
		//Cloze property that contains only the cloze-deleted portion of the text.
		this.cloze = cloze;
		//partial text:
		this.partial = this.text.replace(this.cloze, "...");
		//fullText:
		this.fullText = text;

	} else {
		//This makes the constructor so that users can call them with or without the new keyword.
		return new ClozeCard(text, cloze);
	}
}

//Define a Node module that exports a constructor for creating cloze-deletion flashcards:
module.exports = ClozeCard;
