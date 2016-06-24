module.exports = {
	question: ([
		{
			tag: "div",
			class: "text-question",
			content: "The Game of Master Mind is played as follows:"
		},
		{
			tag: "div",
			class: "text-question",
			content: "The computer has four slots containing balls that are red (R), yellow (Y), green (G) or blue (B). For example, the computer might have RGGB (e.g., Slot #1 is red, Slots #2 and #3 are green, Slot #4 is blue)."
		},
		{
			tag: "div",
			class: "text-question",
			content: "You, the user, are trying to guess the solution You might, for example, guess YRGB."
		},
		{
			tag: "div",
			class: "text-question",
			content: "When you guess the correct color for the correct slot, you get a “hit”. If you guess a color that exists but is in the wrong slot, you get a “pseudo-hit”. For example, the guess YRGB has 2 hits and one pseudo hit."
		},
		{
			tag: "div",
			class: "text-question",
			content: "For each guess, you are told the number of hits and pseudo-hits:"
		},
		{
			tag: "div",
			class: "text-question",
			content: "Write a method that, given a guess and a solution, returns the number of hits and pseudo hits."
		}
	]),
	answer: ([

	]),
	source: "cracking-the-code",
	tags: ["additional-review-problems", "moderate"]
};
