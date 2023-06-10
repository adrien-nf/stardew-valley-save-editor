import { Button, Stack, Typography } from "@mui/material"
import { SdvCard } from "../../../components/SdvCard/SdvCard"
import { useContext } from "react"
import { SaveContext } from "../../../contexts/SaveContext"

export const Editor = () => {
	const { download } = useContext(SaveContext);

	return (
		<Stack flexDirection="column" width="100%" gap={3}>
			<SdvCard>
				<Typography>Editor</Typography>
			</SdvCard>
			<SdvCard>
				<Typography>Editor</Typography>
			</SdvCard>
			<SdvCard>
				<Typography>Editor</Typography>
			</SdvCard>
			<SdvCard>
				<Typography>Editor</Typography>
			</SdvCard>
			<Button onClick={download} style={{
				backgroundColor: "#fa9305",
				border: "3px solid #853605",
				boxShadow: "-5px 5px 5px 0px rgba(0,0,0,0.8), inset 0px 3px 0px 0px #F7BA00, inset 0px -3px 0px 0px #b14e05",
				color: "#221122"
			}}>
				Save
			</Button>
		</Stack>
	)
}