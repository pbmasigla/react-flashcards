module.exports = {
	question: ([
		{
			tag: "div",
			class: "text-question",
			content: "Write a method to replace all spaces in a string with ‘%20’."
		}
	]),
	answer: ([
		{
			tag: "div",
			class: "text-answer",
			content: "The algorithm is as follows:"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "1. Count the number of spaces during the first scan of the string."
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "2. Parse the string again from the end and for each character."
		},
		{
			tag: "div",
			class: "text-answer list-sub-item",
			content: "If a space is encountered, store “%20”."
		},
		{
			tag: "div",
			class: "text-answer list-sub-item",
			content: "Else, store the character as it is in the newly shifted location."
		},
		{
			tag: "pre",
			class: "code-answer",
			content: (
				`
public static void ReplaceFun(char[] str, int length) {
	int spaceCount = 0, newLength, i = 0;
	for (i = 0; i < length; i++) {
		if (str[i] == ‘ ‘) {
			spaceCount++;
		}
	}
	newLength = length + spaceCount * 2;
	str[newLength] = ‘\0’;
	for (i = length - 1; i >= 0; i--) {
		if (str[i] == ‘ ‘) {
			str[newLength - 1] = ‘0’;
			str[newLength - 2] = ‘2’;
			str[newLength - 3] = ‘%’;
			newLength = newLength - 3;
		} else {
			str[newLength - 1] = str[i];
			newLength = newLength - 1;
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
