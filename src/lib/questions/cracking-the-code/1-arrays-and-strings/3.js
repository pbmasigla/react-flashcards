module.exports = {
	question: ([
		{
			tag: "div",
			class: "text-question",
			content: "Write code to reverse a C-Style String (C-String means that “abcd” is represented as  ve characters, including the null character.)"
		}
	]),
	answer: ([
		{
			tag: "div",
			class: "text-answer",
			content: "This is a classic interview question. The only “gotcha” is to try to do it in place, and to be careful for the null character"
		},
		{
			tag: "pre",
			class: "code-answer",
			content: (
				`
void reverse(char *str) {
	char * end = str;
	char tmp;
	if (str) {
		while (*end) {
			++end;
		}
		--end;
		while (str < end) {
			tmp = *str;
			*str++ = *end;
			*end-- = tmp;
		}
	}
}
				`
			)
		}
	]),
	source: "cracking-the-code",
	tags: ["data-structures", "arrays-and-strings"]
};
