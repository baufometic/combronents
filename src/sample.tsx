/* eslint-disable @typescript-eslint/no-unused-vars */
//*__________ THIS IS THE SAMPLE CODE COPIED INTO THE README.md EXAMPLES __________

import { Div, H1, Section } from "./components";

const GridWithTitle = () => (
	<Div
		grid gap_2 gtc_1fr_1fr
		h_full w_090pc>

		<H1
			mt_3 p_2 bg_grey>

			{ "Web 3 is For Our Kids" }
		</H1>
	</Div>
);

const WithGoogleFonts = () => (
	<Div font_orbitron_400 fontsize_4>
		{ "Thats it. Simple." }
	</Div>
);

const StyledChildren = () => (
	<Div child01_flex_center>
		<Section border_blue text_green>
			{ "I'm a centered child" }
		</Section>
	</Div>
);
