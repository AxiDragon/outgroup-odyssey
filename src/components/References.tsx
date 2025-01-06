type Props = {
	sources: string[];
}

const References = ({ sources }: Props) => {
	return (<div className="References">
		<h4>Sources</h4>
		{sources.map((source, i) => <div key={i} id={`reference${i + 1}`}>[{i + 1}] {source}</div>)}
	</div>);
}

export default References;