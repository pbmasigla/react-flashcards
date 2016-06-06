import Flashcard from "../flashcard/flashcard";

export default class FlashcardView extends React.Component {
	render() {
		const currentCard = this.props.filteredFlashcards[this.props.currentCardIndex];

		return (
			<div>
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
