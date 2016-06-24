module.exports = {
	question: ([
		{
			tag: "div",
			class: "text-question",
			content: "Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?"
		}
	]),
	answer: ([
		{
			tag: "div",
			class: "text-answer",
			content: "The rotation can be performed in layers, where you perform a cyclic swap on the edges on each layer. In the first for loop, we rotate the first layer (outermost edges). We rotate the edges by doing a four-way swap first on the corners, then on the element clockwise from the edges, then on the element three steps away."
		},
		{
			tag: "div",
			class: "text-answer",
			content: "Once the exterior elements are rotated, we then rotate the interior region’s edges."
		},
		{
			tag: "pre",
			class: "code-answer",
			content: (
				`
public static void rotate(int[][] matrix, int n) {
	for (int layer = 0; layer < n / 2; ++layer) {
		int first = layer;
		int last = n - 1 - layer;
		for(int i = first; i < last; ++i) {
			int offset = i - first;
			int top = matrix[first][i]; // save top
			// left -> top
			matrix[first][i] = matrix[last-offset][first];

			// bottom -> left
			matrix[last-offset][first] = matrix[last][last - offset];

			// right -> bottom
			matrix[last][last - offset] = matrix[i][last];
			// top -> right
			matrix[i][last] = top; // right <- saved top
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
