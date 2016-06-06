import "./react-flashcards.scss";
import { connect } from 'react-redux';
import FlashcardOptions from "./flashcard-options/flashcard-options";
import FlashcardView from "./flashcard-view/flashcard-view";
import questions from "../../lib/questions";
import { getFilteredFlashcards } from "../../lib/helpers/questions-helpers";
import keydown from "react-keydown";
import {
	updateCardSide,
	getNextCard,
	getPreviousCard
} from "../actions/ui-actions";

export default class ReactFlashcards extends React.Component {
	@keydown(32)
	flipCard() {
		this.props.dispatch(updateCardSide());
	}

	@keydown([39, 40])
	nextCard() {
		this.props.dispatch(getNextCard(getFilteredFlashcards(this.props.options, questions).length));
	}

	@keydown([37, 38])
	previousCard() {
		this.props.dispatch(getPreviousCard());
	}

	render() {
		const filteredFlashcards = getFilteredFlashcards(this.props.options, questions);

		return (
			<div className="page__container">
				<div className="page__header">React Flashcards</div>
				<FlashcardOptions
					dispatch={ this.props.dispatch }
					options={ this.props.options } />
				<FlashcardView
					dispatch={ this.props.dispatch }
					filteredFlashcards={ filteredFlashcards }
					options={ this.props.options }
					cardSide={ this.props.ui.cardSide }
					currentCardIndex={ this.props.ui.currentCardIndex }/>
			</div>
		);
	}
}

export default connect(state => ({
	options: state.options,
	ui: state.ui
}))(ReactFlashcards);
