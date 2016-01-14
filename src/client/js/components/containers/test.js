require("../../../scss/test/test-container.scss");
import { TestHeader, TestFooter } from "../test";
import { fetchToDos } from "../../actions";
import { connect } from "react-redux";

export default class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};

		this.handleOnChange = this.handleOnChange.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(fetchToDos());
	}

	handleOnChange() {
		const name = ReactDOM.findDOMNode(this.refs.myInput).value;
		this.setState({
			name: name
		});
	}

	render() {
		return(
			<div className="test__container">
				<input
				 ref="myInput"
				 onChange={ this.handleOnChange } />

				<TestHeader
				name={ this.state.name || "friend" }/>

				<TestFooter />
			</div>
		);
	};
}

export default connect(state => ({ todos: state.todos }))(Test);
