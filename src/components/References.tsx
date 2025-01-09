type Props = {
	sources: string[];
}

const References = ({ sources }: Props) => {
	return (<div className="Section">
		<h2>Sources</h2>
		<div className="SectionText">
			{sources.map((source, i) => <div key={i} id={`reference${i + 1}`}>[{i + 1}] {source}</div>)}
		</div>
	</div>);
}

export default References;