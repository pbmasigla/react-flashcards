import "./flashcard-view.scss";
import Flashcard from "../flashcard/flashcard";

export default class FlashcardView extends React.Component {
	render() {
		const currentCard = this.props.filteredFlashcards[this.props.currentCardIndex];

		return (
			<div className="flashcard-view">
				<Flashcard
					cardSide={ this.props.cardSide }
					question={ currentCard.question }
					answer={ currentCard.answer }
					source={ currentCard.source }
					tags={ currentCard.tags } />
			</div>
		);
	}
}
