export default function Front(props) {
	return (
		<div>
			Question: { props.question }
			Source: { props.source }
			Tags: { props.tags }
		</div>
	);
}
