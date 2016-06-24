module.exports = {
	question: ([
		{
			tag: "div",
			class: "text-question",
			content: "Find the mistake(s) in the following code:"
		},
		{
			tag: "pre",
			class: "code-question",
			content:
`
unsigned int i;
for (i = 100; i <= 0; --i)
	printf("%d\\n", i);
`
		}
	]),
	answer: ([

	]),
	source: "cracking-the-code",
	tags: ["concepts-and-algorithms", "testing"]
};
