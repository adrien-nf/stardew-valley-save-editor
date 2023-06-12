import { Snackbar } from "@mui/material"

export const SdvSnackbar = (props: {
	open: boolean,
	setOpen: (open: boolean) => void,
	message: string,
}) => {
	return (
		<Snackbar
			open={props.open}
			autoHideDuration={6000}
			onClose={() => props.setOpen(false)}
			message={props.message}
			ContentProps={{
				style: {
					borderImage: "url('images/menu_border.png')",
					borderImageSlice: "33%",
					borderImageRepeat: "stretch",
					borderStyle: "solid",
					borderWidth: "9px",
					backgroundColor: "#ffffcc",
					width: "100%",
					paddingLeft: 4,
					paddingRight: 4,
					borderRadius: 9,
					paddingTop: 0,
					paddingBottom: 0,
					color: "#541304",
				}
			}}
		/>
	)
}