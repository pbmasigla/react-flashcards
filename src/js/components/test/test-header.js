require("../../../scss/test/test-header.scss");

export default class TestHeader extends React.Component {
	render() {
		return <div className="test__header">Hey there { this.props.name }!, here is the header!</div>;
	}
}
