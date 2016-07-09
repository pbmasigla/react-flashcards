import { buildFlashcardTags } from "../../../lib/helpers/questions-helpers";

export default function Preview(props) {
	return (
		<div>
			{ buildFlashcardTags(props.content) }
		</div>
	);
}