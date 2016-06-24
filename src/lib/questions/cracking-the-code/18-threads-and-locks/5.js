module.exports = {
	question: ([
		{
			tag: "div",
			class: "text-question",
			content: "Suppose we have the following code:"
		},
		{
			tag: "pre",
			class: "code-question",
			content:
`
class Foo {
	public:
		A(.....); /* If A is called, a new thread will be created and
					* the corresponding function will be executed. */
		B(.....); /* same as above */
		C(.....); /* same as above */
	}
	Foo f;
	f.A(.....);
	f.B(.....);
	f.C(.....);
`
		},
		{
			tag: "div",
			class: "text-question",
			content: "i) Can you design a mechanism to make sure that B is executed after A, and C is executed after B?"
		},
		{
			tag: "div",
			class: "text-question",
			content: "ii) Suppose we have the following code to use class Foo. We do not know how the threads will be scheduled in the OS."
		},
		{
			tag: "pre",
			class: "code-question",
			content:
`
Foo f;
f.A(.....); f.B(.....); f.C(.....);
f.A(.....); f.B(.....); f.C(.....);
`
		},
		{
			tag: "div",
			class: "text-question",
			content: "Can you design a mechanism to make sure that all the methods will be executed in sequence?"
		}
	]),
	answer: ([

	]),
	source: "cracking-the-code",
	tags: ["knowledge-based", "threads-and-locks"]
};
