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

export const getFilteredFlashcards = (filteredOptions, allQuestions) => {
	return allQuestions.reduce((filteredFlashcards, question) => {
		const containsSource = filteredOptions.sources.length === 0 || filteredOptions.sources.includes(question.source);
		const containsTags = filteredOptions.tags.length === 0 || filteredOptions.tags.some(tag => question.tags.includes(tag));
		if (containsSource && containsTags) {
			filteredFlashcards.push(question);
		}
		return filteredFlashcards;
	}, []);
};

export const buildFlashcardTags = question => {
	return question.reduce((builtTags, tag, i) => {
		const TagName = tag.tag;
		builtTags.push(
			<TagName
				key={ Math.random(9999) }
				className={ tag.class }>
				{ tag.content }
			</TagName>
		);
		return builtTags;
	}, []);
}
