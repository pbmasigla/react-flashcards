import { GET_TODOS } from "../constants";

const initialState = [];

const actionsMap = {
	[GET_TODOS]: (state, action) => action.todos
};

export default function todos(state = initialState, action) {
	const fn = actionsMap[action.type];
	if (!fn) {
		return state;
	}
	return fn(state, action);
}
