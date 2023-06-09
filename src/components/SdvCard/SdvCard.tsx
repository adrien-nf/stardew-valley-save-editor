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
			padding: 16,
			borderRadius: 16,
		}}>
			{props.children}
		</Box>
	)
}