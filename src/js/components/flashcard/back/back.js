import { buildFlashcardTags } from "../../../../lib/helpers/questions-helpers";

export default function Back(props) {
	return (
		<div className="flashcard flashcard--back">
			Answer: { buildFlashcardTags(props.answer) }
			Source: { props.source }
			Tags: { props.tags }
		</div>
	);
};
