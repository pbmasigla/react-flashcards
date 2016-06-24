module.exports = {
	question: ([
		{
			tag: "div",
			class: "text-question",
			content: "Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer NOTE: One or two additional variables are fine. An extra copy of the array is not. Write test cases."
		}
	]),
	answer: ([
		{
			tag: "div",
			class: "text-answer",
			content: "First, ask yourself, what does the interviewer mean by an additional buffer? Can we use an additional array of constant size?"
		},
		{
			tag: "div",
			class: "text-answer italicized",
			content: "Algorithm—No (Large) Additional Memory:"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "1. For each character, check if it is a duplicate of already found characters."
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "2. Skip duplicate characters and update the non duplicate characters."
		},
		{
			tag: "div",
			class: "text-answer",
			content: "Time complexity is O(N2)"
		},
		{
			tag: "pre",
			class: "code-answer",
			content: (
				`
public static void removeDuplicates(char[] str) {
	if (str == null) return;
		int len = str.length;
		if (len < 2) return;

		int tail = 1;

		for (int i = 1; i < len; ++i) {
			int j;
			for (j = 0; j < tail; ++j) {
				if (str[i] == str[j]) break;
			}
			if (j == tail) {
				str[tail] = str[i];
				++tail;
		}
	}
	str[tail] = 0;
}
				`
			)
		},
		{
			tag: "div",
			class: "text-answer bolded",
			content: "Test Cases:"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "1. String does not contain any duplicates, e.g.: abcd"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "2. String contains all duplicates, e.g.: aaaa"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "3. Null string"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "4. String with all continuous duplicates, e.g.: aaabbb"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "5. String with non-contiguous duplicate, e.g.: abababa"
		},
		{
			tag: "div",
			class: "text-answer italicized",
			content: "Algorithm—With Additional Memory of Constant Size"
		},
		{
			tag: "pre",
			class: "code-answer",
			content: (
				`
public static void removeDuplicatesEff(char[] str) {
	if (str == null) return;
	int len = str.length;
	if (len < 2) return;
	boolean[] hit = new boolean[256];
	for (int i = 0; i < 256; ++i) {
		hit[i] = false;
	}
	hit[str[0]] = true;
	int tail = 1;
	for (int i = 1; i < len; ++i) {
		if (!hit[str[i]]) {
			str[tail] = str[i];
			++tail;
			hit[str[i]] = true;
		}
	}
	str[tail] = 0;
}
				`
			)
		},
		{
			tag: "div",
			class: "text-answer bolded",
			content: "Test Cases:"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "1. String does not contain any duplicates, e.g.: abcd"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "2. String contains all duplicates, e.g.: aaaa"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "3. Null string"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "4. Empty string"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "5. String with all continuous duplicates, e.g.: aaabbb"
		},
		{
			tag: "div",
			class: "text-answer list-item",
			content: "6. String with non-contiguous duplicate, e.g.: abababa"
		}
	]),
	source: "cracking-the-code",
	tags: ["data-structures", "arrays-and-strings"]
};
