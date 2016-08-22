import "./flashcard.scss";
import Front from "./front/front";
import Back from "./back/back";

export default class Flashcard extends React.Component {
	render() {
		const frontSide = (
			<Front
				question={ this.props.question }
				source={ this.props.source }
				tags={ this.props.tags } />
		);

		const backSide = (
			<Back
				answer={ this.props.answer }
				source={ this.props.source }
				tags={ this.props.tags } />
		);

		const card = this.props.cardSide === "front" ? frontSide : backSide;

		return (
			<div className="flashcard-container">
				{ card }
			</div>
		);
	}
}
