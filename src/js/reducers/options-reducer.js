import {
	UPDATE_INDIVIDUAL_OPTION,
	UPDATE_ARRAY_FILTERING_OPTIONS
} from "../constants";

const initialState = {
	viewMode: "card",
	sorting: "ordered",
	tags: [],
	sources: []
};

const actionsMap = {
	[UPDATE_INDIVIDUAL_OPTION]: (state, action) => action.options,
	[UPDATE_ARRAY_FILTERING_OPTIONS]: (state, action) => action.options
};

export default function options(state = initialState, action) {
	const fn = actionsMap[action.type];
	if (!fn) {
		return state;
	}
	return Object.assign({}, fn(state, action));
}
