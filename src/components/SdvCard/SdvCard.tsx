import { Box } from "@mui/material"

export const SdvCard = (props: {
	children: JSX.Element
}) => {
	return (
		<Box style={{
			borderImage: "url('/images/menu_border.png')",
			borderImageSlice: "33%",
			borderImageRepeat: "stretch",
			borderStyle: "solid",
			borderWidth: "9px",
			backgroundColor: "#ffffcc",
			width: "100%",
			paddingLeft: 4,
			paddingRight: 4,
			paddingTop: 8,
			paddingBottom: 8,
			borderRadius: 9,
		}}>
			{props.children}
		</Box>
	)
}