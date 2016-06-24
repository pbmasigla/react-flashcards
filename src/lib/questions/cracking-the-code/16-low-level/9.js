module.exports = {
	question: ([
		{
			tag: "div",
			class: "text-question",
			content: "Write an aligned malloc & free function that takes number of bytes and aligned byte (which is always power of 2)"
		},
		{
			tag: "div",
			class: "text-question bolded",
			content: "EXAMPLE:"
		},
		{
			tag: "div",
			class: "text-question",
			content: "align_malloc (1000,128) will return a memory address that is a multiple of 128 and that points to memory of size 1000 bytes"
		},
		{
			tag: "div",
			class: "text-question",
			content: "aligned_free() will free memory allocated by align_malloc"
		}
	]),
	answer: ([

	]),
	source: "cracking-the-code",
	tags: ["knowledge-based", "low-level"]
};
