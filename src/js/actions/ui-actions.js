import {
	UPDATE_CARD_SIDE,
	GET_NEXT_CARD,
	GET_PREVIOUS_CARD,
	RESET_CARD_INDEX
} from "../constants";

export function updateCardSide() {
	return (dispatch, getState) => {
		let updatedUI = getState().ui;
		const newCardSide = updatedUI.cardSide === "front" ? "back" : "front";
		updatedUI.cardSide = newCardSide;

		dispatch({
			type: UPDATE_CARD_SIDE,
			ui: updatedUI
		});
	};
}

export function resetCurrentCardIndex() {
	return (dispatch, getState) => {
		let newUI = getState().ui;
		newUI.currentCardIndex = 0;

		dispatch({
			type: RESET_CARD_INDEX,
			ui: newUI
		});

		if (getState().ui.cardSide === "back") {
			dispatch(updateCardSide());
		}
	}
}

export function getNextCard(max) {
	return (dispatch, getState) => {
		let updatedUI = getState().ui;
		const newCurrentCardIndex = updatedUI.currentCardIndex < max - 1 ? updatedUI.currentCardIndex + 1 : updatedUI.currentCardIndex;
		updatedUI.currentCardIndex = newCurrentCardIndex;

		dispatch({
			type: GET_NEXT_CARD,
			ui: updatedUI
		});

		if (getState().ui.cardSide === "back") {
			dispatch(updateCardSide());
		}
	};
}

export function getPreviousCard() {
	return (dispatch, getState) => {
		let updatedUI = getState().ui;
		const newCurrentCardIndex = updatedUI.currentCardIndex > 0 ? updatedUI.currentCardIndex - 1 : updatedUI.currentCardIndex;
		updatedUI.currentCardIndex = newCurrentCardIndex;

		dispatch({
			type: GET_PREVIOUS_CARD,
			ui: updatedUI
		});

		if (getState().ui.cardSide === "back") {
			dispatch(updateCardSide());
		}
	};
}
