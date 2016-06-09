import {
	UPDATE_CARD_SIDE,
	GET_NEXT_CARD,
	GET_PREVIOUS_CARD,
	RESET_CARD_INDEX
} from "../constants";

const initialState = {
	cardSide: "front",
	currentCardIndex: 0
};

const actionsMap = {
	[UPDATE_CARD_SIDE]: (state, action) => action.ui,
	[GET_NEXT_CARD]: (state, action) => action.ui,
	[GET_PREVIOUS_CARD]: (state, action) => action.ui,
	[RESET_CARD_INDEX]: (state, action) => action.ui
};

export default function ui(state = initialState, action) {
	const fn = actionsMap[action.type];
	if (!fn) {
		return state;
	}
	return Object.assign({}, fn(state, action));
}
