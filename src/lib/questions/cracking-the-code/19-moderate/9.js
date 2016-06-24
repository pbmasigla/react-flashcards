module.exports = {
	question: ([
		{
			tag: "div",
			class: "text-question",
			content: "Since XML is very verbose, you are given a way of encoding it where each tag gets mapped to a pre-de ned integer value The language/grammar is as follows:"
		},
		{
			tag: "pre",
			class: "text-question",
			content:
`
Element --> Element Attr* END Element END [aka, encode the element tag, then its attributes, then tack on an END character, then encode its children, then another end tag]
Attr --> Tag Value [assume all values are strings] END --> 01
Tag --> some predefined mapping to int
Value --> string value END
`
		},
		{
			tag: "div",
			class: "text-question",
			content: "Write code to print the encoded version of an xml element (passed in as string)."
		},
		{
			tag: "div",
			class: "text-question",
			content: "Is there anything else you could do to (in many cases) compress this even further?"
		}
	]),
	answer: ([

	]),
	source: "cracking-the-code",
	tags: ["additional-review-problems", "moderate"]
};
