export const buildOptions = options => {
	return options.map(option => {
		return {
			label: option.replace(/-/g, ' ').replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()),
			value: option
		}
	});
}

export const getSources = questions => {
	let sources = [];
	questions.forEach(question => {
		if (!sources.includes(question.source)) {
			sources.push(question.source);
		}
	});
	return buildOptions(sources);
};

export const getTags = questions => {
	let tags = [];
	questions.forEach(question => {
		question.tags.forEach(tag => {
			if (!tags.includes(tag)) {
				tags.push(tag);
			}
		});
	});
	return buildOptions(tags);
};
