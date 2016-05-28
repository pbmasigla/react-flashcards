import fetch from "isomorphic-fetch";
import { GET_TODOS } from "../constants";

export function fetchToDos() {
	return dispatch => {
		fetch("http://localhost:3000/api/todos")
			.then(resp => resp.json())
			.then(json => dispatch({
				type: GET_TODOS,
				todos: json.todos
		}));
	};
}
