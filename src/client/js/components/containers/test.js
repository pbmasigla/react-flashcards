require("../../../scss/test/test-container.scss");
import { TestHeader, TestFooter } from "../test";

export default class Test extends React.Component {
	render() {
		return(
			<div className="test__container">
				<TestHeader />
				<TestFooter />
			</div>
		);
	};
}
