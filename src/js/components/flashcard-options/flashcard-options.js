import "./flashcard-options.scss";
import questions from "../../../lib/questions";
import { MultiSelect, SimpleSelect } from "react-selectize";
import { getSources, getTags, buildOptions } from "../../../lib/helpers/questions-helpers";
import { updateIndividualOption, updateArrayFilteringOptions } from "../../actions/options";

const SORTING_OPTIONS = buildOptions(["ordered", "shuffled"]);
const VIEW_OPTIONS = buildOptions(["card", "list"]);
const SOURCE_OPTIONS = getSources(questions);
const TAG_OPTIONS = getTags(questions);

export default class FlashcardOptions extends React.Component {
	render() {
		return (
			<div className="options__container">
				<div>
					<label>Sorting</label>
					<SimpleSelect
						theme="material"
						placeholder="Select Sorting"
						options={ SORTING_OPTIONS }
						defaultValue={ SORTING_OPTIONS[0] }
						onValueChange={ value => this.props.dispatch(updateIndividualOption("sorting", value)) } />
				</div>
				<div>
					<label>View Mode</label>
					<SimpleSelect
						theme="material"
						placeholder="Select View Mode"
						options={ VIEW_OPTIONS }
						defaultValue={ VIEW_OPTIONS[0] }
						onValueChange={ value => this.props.dispatch(updateIndividualOption("viewMode", value)) } />
				</div>
				<div>
					<label>Sources</label>
					<MultiSelect
						theme="material"
						placeholder="Select Source(s)"
						options={ SOURCE_OPTIONS }
						defaultValue={{ tags: [SOURCE_OPTIONS[0]] }}
						onValuesChange={ values => this.props.dispatch(updateArrayFilteringOptions("sources", values)) } />
				</div>
				<div>
					<label>Tags</label>
					<MultiSelect
						theme="material"
						placeholder="Select Tag(s)"
						options={ TAG_OPTIONS }
						defaultValue={{ tags: [TAG_OPTIONS[0]] }}
						onValuesChange={ values => this.props.dispatch(updateArrayFilteringOptions("tags", values)) } />
				</div>
			</div>
		);
	}
}
