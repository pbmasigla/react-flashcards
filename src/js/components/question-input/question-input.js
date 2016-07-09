import Preview from "./preview";
import "./question-input.scss";

import { SimpleSelect } from "react-selectize";
import { buildOptions } from "../../../lib/helpers/questions-helpers";

export const TEXTAREA_PLACEHOLDER = "Enter your line here.";
export const TYPE_OPTIONS = buildOptions(['Code', 'Text']);
export const VIEW_OPTIONS = buildOptions(['Normal', 'Italics', 'Bolded']);

export default class QuestionInput extends React.Component {
	constructor(props) {
	    super(props);
	    this.typeOptions = TYPE_OPTIONS;
	    this.viewOptions = VIEW_OPTIONS;
	    this.textareaPlaceholder = TEXTAREA_PLACEHOLDER;

	    this.state = {
	    	questionText: "",
	    	questionType: "Code",
	    	questionStyle: null,
	    	answerText: "",
	    	answerType: "Code",
	    	answerStyle: null,
	    	questionArray: [],
	    	answerArray: []
	    }
	}

	setQuestionState(e) {
		this.setState({ questionText: e.target.value });
	}

	setAnswerState(e) {
		this.setState({ answerText: e.target.value });
	}

	updateQuestionType(value) {
		this.setState({ questionType: value })
	}

	addQuestionLine() {
		let questionType = this.state.questionType === "Code" ? "pre" : "div";
		let newQuestion = {
			tag: questionType,
			class: questionType === "div" ? "text-question" : "code-question",
			content: (this.state.questionText)
		};

		this.setState({ questionArray: this.state.questionArray.concat([newQuestion])})
		this.setState({ questionText: "" })
		document.getElementsByName("question-textarea").value = "";
	}

	addAnswerLine() {
		let answerType = this.state.questionType === "Code" ? "pre" : "div";
		let newAnswer = {
			tag: answerType,
			class: answerType === "div" ? "text-answer" : "code-answer",
			content: (this.state.answerText)
		};

		this.setState({ answerArray: this.state.answerArray.concat([newAnswer])})
		this.setState({ answerText: "" })
		document.getElementsByName("answer-textarea").value = "";
	}

	handleTextAreaKeydown(e) {
		if (e.keyCode === 9) {
			e.preventDefault();

			let textarea = e.target;
			let start    = textarea.selectionStart;
			let end      = textarea.selectionEnd;
			let value    = textarea.value;

			textarea.value = value.substring(0, start) + "\t" + value.substring(end);

			textarea.selectionEnd = start + 1;
		}
	}

	render() {
		return (
		<div>
			<div className="question-input__container">

				 <div>
				  	<h1>Question Info</h1>
				  	{this.questionText}
					<div class="question">
						<textarea
							name="question-textarea"
							placeholder={ this.textareaPlaceholder }
							onKeyDown={ this.handleTextAreaKeydown }
							defaultValue={ this.state.questionText }
							onChange={ this.setQuestionState.bind(this) }
							 />
						<br />
					    <span>Element Type</span>
					    <SimpleSelect
					    	theme="default"
					    	placeholder="Select Element Type"
					    	options={ this.typeOptions }
					    	defaultValue={ this.typeOptions[0] }
					    	onValueChange={ value => this.updateQuestionType(value) } />
						<br/>
						<span>Element Style</span>
						<SimpleSelect
							theme="default"
							placeholder="Select Element Style"
							options={ this.viewOptions }
							defaultValue={ this.viewOptions[0] } />
						<br/>
						<br/>
					</div>

					<button
						id="question"
						onClick={ this.addQuestionLine.bind(this) }>
						Add Line
					</button>
				</div>

				<div>
					<h1>Answer Info</h1>
					<div class="answer">
					  	<textarea
							name="answer-textarea"
							placeholder={ this.textareaPlaceholder }
							onKeyDown={ this.handleTextAreaKeydown }
							defaultValue={ this.state.answerText }
							onChange={ this.setAnswerState.bind(this) }
							 />
						<br />
					    <span>Element Type</span>
					    <SimpleSelect
					    	theme="default"
					    	placeholder="Select Element Type"
					    	options={ this.typeOptions }
					    	defaultValue={ this.typeOptions[0] } />
						<br/>
						<span>Element Style</span>
						<SimpleSelect
							theme="default"
							placeholder="Select Element Style"
							options={ this.viewOptions }
							defaultValue={ this.viewOptions[0] } />
						<br/>
						<br/>
					</div>
					<button
						id="answer"
						onClick={ this.addAnswerLine.bind(this) }>
						Add Line
					</button>
				</div>

			</div>

			<div className="question-input__preview">
				<Preview
					content={ this.state.questionArray }
				/>
			</div>

			<div className="question-input__preview">
				<Preview
					content={ this.state.answerArray }
				/>
			</div>
		</div>
		)
	}
}