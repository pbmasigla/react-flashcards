import { buildFlashcardTags } from "../../../../lib/helpers/questions-helpers";

export default function Front(props) {
	return (
		<div className="flashcard flashcard--front">
			<div className="flashcard__header--front">
				Question: { buildFlashcardTags(props.question) }
			</div>

			<div className="flashcard__sources">
				Source: { props.source }
			</div>

			<div className="flashcard__tags">
				Tags: { props.tags }
			</div>
		</div>
	);
}
