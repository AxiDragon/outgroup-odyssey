const minColor = [179, 204, 101]; //rgb, should be 'pear' color
const maxColor = [242, 115, 94]; //rgb, should be 'apple' color
const diff = maxColor.map((c, i) => c - minColor[i]);

function getColor(value: number) {
	const color = minColor.map((c, i) => c + diff[i] * value);
	return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

export function getColorWithTransparency(value: number, transparency: number) {
	const color = minColor.map((c, i) => c + diff[i] * value);
	return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${transparency})`;
}

export default getColor;