import "./react-flashcards.scss";
import FlashcardOptions from "./flashcard-options/flashcard-options";

export default class ReactFlashcards extends React.Component {
	render() {
		return (
			<div className="page__container">
				<div className="page__header">React Flashcards</div>
				<FlashcardOptions />
			</div>
		);
	}
}
