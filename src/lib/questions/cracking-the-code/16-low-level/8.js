module.exports = {
	question: ([
		{
			tag: "div",
			class: "text-question",
			content: "A device boots with an empty FIFO queue. In the first 400 ns period after startup, and in each subsequent 400 ns period, a maximum of 80 words will be written to the queue. Each write takes 4 ns A worker thread requires 3 ns to read a word, and 2 ns to process it before reading the next word What is the shortest depth of the FIFO such that no data is lost?"
		}
	]),
	answer: ([

	]),
	source: "cracking-the-code",
	tags: ["knowledge-based", "low-level"]
};
