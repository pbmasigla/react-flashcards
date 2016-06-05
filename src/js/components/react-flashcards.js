import "./react-flashcards.scss";
import { connect } from 'react-redux';
import FlashcardOptions from "./flashcard-options/flashcard-options";

export default class ReactFlashcards extends React.Component {
	render() {
		return (
			<div className="page__container">
				<div className="page__header">React Flashcards</div>
				<FlashcardOptions
					dispatch={ this.props.dispatch }
					options={ this.props.options } />
			</div>
		);
	}
}

export default connect(state => ({ options: state.options }))(ReactFlashcards);
