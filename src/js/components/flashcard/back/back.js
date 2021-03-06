import {
	buildFlashcardTags,
	normalizeMultiple,
	normalizeSinglar
} from "../../../../lib/helpers/questions-helpers";

export default function Back(props) {
	return (
		<div className="flashcard">
			<div className="flashcard__header">
				<div className="flashcard__label">Answer:</div> { buildFlashcardTags(props.answer) }
			</div>

			<div className="flashcard__sources">
				<div className="flashcard__label">Source:</div> { normalizeSinglar(props.source) }
			</div>

			<div className="flashcard__tags">
				<div className="flashcard__label">Tags:</div> { normalizeMultiple(props.tags).join(", ") }
			</div>
		</div>
	);
};
