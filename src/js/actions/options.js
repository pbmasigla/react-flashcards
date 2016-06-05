import { UPDATE_INDIVIDUAL_OPTION, UPDATE_ARRAY_FILTERING_OPTIONS } from "../constants";

export function updateIndividualOption(field, option) {
	return (dispatch, getState) => {
		let options = getState().options;
		options[field] = option.value;

		dispatch({
			type: UPDATE_INDIVIDUAL_OPTION,
			options
		});
	};
}

export function updateArrayFilteringOptions(field, selectedOptions) {
	return (dispatch, getState) => {
		let newOptions = getState().options;
		newOptions[field] = selectedOptions.map(option => option.value);

		dispatch({
			type: UPDATE_ARRAY_FILTERING_OPTIONS,
			options: newOptions
		});
	};
}
