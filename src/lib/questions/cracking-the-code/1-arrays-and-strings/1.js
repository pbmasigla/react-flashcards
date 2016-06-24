module.exports = {
	question: ([
		{
			tag: "div",
			class: "text-question",
			content: "What is the running time of this code?"
		},
		{
			tag: "pre",
			class: "code-question",
			content: (
				`
public String makeSentence(String[] words) {
	StringBuffer sentence = new StringBuffer();]
	for (String w : words) sentence.append(w);
	return sentence.toString();
}
				`
			)
		}
	]),
	answer: ([
		{
			tag: "code",
			class: "text-answer bolded",
			content: "O(n^2)"
		},
		{
			tag: "div",
			class: "text-answer",
			content: "Where n is the number of letters in sentence.Here’s why: each time you append a string to sentence, you create a copy of sentence and run through all the letters in sentence to copy them over If you have to iterate through up to n characters each time in the loop, and you’re looping at least n times, that gives you an O(n^2) run time Ouch!"
		},
		{
			tag: "div",
			class: "text-answer",
			content: "With StringBuffer (or StringBuilder) can help you avoid this problem"
		},
		{
			tag: "pre",
			class: "code-answer",
			content: (
				`
public String makeSentence(String[] words) {
	StringBuffer sentence = new StringBuffer();
	for (String w : words) sentence.append(w);
	return sentence.toString();
}
				`
			)
		}
	]),
	source: "cracking-the-code",
	tags: ["data-structures", "arrays-and-strings"]
};
