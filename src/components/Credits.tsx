import References from "./References";

const Credits = () => {
	return (
		<div>
			<References sources={[
				"Sapolsky, Robert M. (2017). Behave: The Biology of Humans at Our Best and Worst. Penguin Press.",
				"Rubin, M., Hewstone, M., Crisp, R. J., Voci, A., & Richards, Z. (2004). Gender out-group homogeneity: The roles of differential familiarity, gender differences, and group size. In V. Yzerbyt, C. M. Judd, & O. Corneille (Eds.), The psychology of group perception: Perceived variability, entitativity, and essentialism (pp. 203-220). New York: Psychology Press.",
				"Ackerman, Joshua M., Jenessa R. Shapiro, Steven L. Neuberg, Douglas T. Kenrick, D. Vaughn Becker, Vladas Griskevicius, Jon K. Maner & Mark Schaller (2006). They all look the same to me (Unless they're angry): From out-group homogeneity to out-group heterogeneity. Psychological Science 17(10): 836-40.",
				`Scott, Catherine (27 March 2023). "How HR Can Identify and Overcome Affinity Bias in Hiring and the Workplace". Academy to Innovate HR (AIHR). Retrieved 23 December 2024.`,
				"Johnson, Kareem J. & Barbara L. Fredrickson (2005). 'We all look the same to me': Positive emotions eliminate the own-race bias in face recognition. Psychological Science16(11): 875-81",
				"Nicky Case (for inspiration!)",
			]} />
			<p>This explorable explanation is also <b>open source</b>! If you want to see all the code, you can find it here:
				<br />
				<a href="https://github.com/AxiDragon/outgroup-odyssey" target="_blank">https://github.com/AxiDragon/outgroup-odyssey</a>
			</p>
		</div>
	);
}

export default Credits;