import { buildFlashcardTags } from "../../../../lib/helpers/questions-helpers";

export default function Front(props) {
	return (
		<div>
			Question: { buildFlashcardTags(props.question) }
			Source: { props.source }
			Tags: { props.tags }
		</div>
	);
}
