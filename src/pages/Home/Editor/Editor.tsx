import { Button, Stack, Typography } from "@mui/material"
import { SdvCard } from "../../../components/SdvCard/SdvCard"
import { useContext } from "react"
import { SaveContext } from "../../../contexts/SaveContext"
import { SdvInput } from "../../../components/SdvInput/SdvInput"
import { Blocks } from "./Fields"

export const Editor = () => {
	const { download } = useContext(SaveContext);

	return (
		<Stack flexDirection="column" width="100%" gap={3}>
			{
				Blocks.map(block => (
					<SdvCard key={block.key}>
						<Typography variant="h1">{block.key}</Typography>
						<Stack direction="row" gap={3} flexWrap="wrap">
							{
								block.fields.map(field => (<SdvInput key={field.key} field={field} />))
							}
						</Stack>
					</SdvCard>
				))
			}
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