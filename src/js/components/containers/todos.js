export default class MyTodos extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			inputValue: ""
		};
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
		this.removeOnClick = this.removeOnClick.bind(this);
	}

	handleOnChange() {
		const myInput = ReactDOM.findDOMNode(this.refs.todoInput).value;
		this.setState({
			inputValue: myInput
		});
	}

	handleOnClick() {
		const myClick = ReactDOM.findDOMNode(this.refs.todoInput).value;
		let currentTodos = this.state.todos;
		currentTodos.push(myClick);
		
		this.setState({
			todos: currentTodos,
			inputValue: ""
		});
	}

	removeOnClick(i) {
		let currentTodos = this.state.todos;
		currentTodos.splice(i, 1);

		this.setState({
			todos: currentTodos
		});
	}

	render() {
		let returnMyTodos = this.state.todos.map( (i, index) => (
			<div
				key={ index }
				onClick={ this.removeOnClick.bind(this, index) }>
				{ i }
			</div>
		));

		return (
			<div>
				{ returnMyTodos }
				<input
					ref="todoInput"
					value={ this.state.inputValue }
					onChange={ this.handleOnChange } />
				<button
					onClick={ this.handleOnClick }>
					Click Me Now
				</button>
			</div>
		);
	}
};
