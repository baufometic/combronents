/* eslint-disable */
// @ts-nocheck

/*
TODO
SC with SSR - have to filter out repeat keys, maybe think useMemo or even outside of component
use describe to style the SC's
allow non boolean keys through the app
make sure clicks work for buttons
*/

		import { Div, H1, Section, } from "combronents"

		const GridWithTitle = () => (
			<Div
				gap_2 gridfixed_2x4
				h_full w_90pc>

				<H1
					font_orbitron fontsize_2
					mt_3 p_2 bg_grey>

					{ "Web 3 is For Our Kids" }
				</H1>
			</Div>
		)

		const WithGoogleFonts = () => (
			<Div font_orbitron>
				{ "Thats it. Simple." }"
			</Div>
		)

		const StyledChildren = () => (
			<Div children_center>
				<Section border_blue color_fuchsia>
					{ "I'm a centered child" }
				</Section>
			</Div>
		)
