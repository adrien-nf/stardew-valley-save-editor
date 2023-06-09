import { Box, BoxProps } from "@mui/material"
import border from "../../images/menu_border.png";

export const SdvCard = (props: {
	children: JSX.Element | JSX.Element[];
	props?: BoxProps | undefined;
}) => {
	return (
		<Box style={{
			borderImage: `url('${border}')`,
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
			...props.props?.style
		}}>
			{props.children}
		</Box>
	)
}

SdvCard.defaultProps = {
	props: undefined
}
