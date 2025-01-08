const FormLink = () => {
	const userAgent = navigator.userAgent.toLowerCase() || navigator.vendor.toLowerCase();
	const isOnPhone = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

	const baseLink = "https://docs.google.com/forms/d/e/1FAIpQLSdgTPEpmafRQ8xfRY9u89Wm2AGUd01ywqHPnNNatccsm884eQ/viewform?usp=pp_url&entry.1935881983=";
	const link = isOnPhone ? baseLink + "Phone" : baseLink + "PC/Laptop";

	return (
		<p><a href={link}><b>Could you please fill in the form here?</b></a></p>
	);
}

export default FormLink;