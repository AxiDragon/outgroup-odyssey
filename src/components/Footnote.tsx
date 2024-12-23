type Props = {
	referenceId: number;
}

const Footnote = ({ referenceId: sourceId }: Props) => {
	return <sup><a href={`#reference${sourceId}`}>[{sourceId}]</a></sup>;
}

export default Footnote;