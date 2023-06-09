import { Box, CircularProgress, Hidden, Typography } from "@mui/material"
import { SdvCard } from "../../../components/SdvCard/SdvCard"
import { useContext } from "react";
import { SaveContext } from "../../../contexts/SaveContext";

export const WaitingForSave = () => {
	const { isLoading, loadFromFile } = useContext(SaveContext);

	return (
		<SdvCard>
			<>
				<Hidden xsUp={isLoading}>
					<Typography>Drag and drop your save file in here to start editing it!</Typography>
					<input type="file" onChange={(e) => {
						if ((e?.target?.files?.length || 0) > 0) {
							loadFromFile(e?.target?.files && e.target.files[0])
						}
					}} />
				</Hidden>
				{
					isLoading ? <Box style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}>
						<CircularProgress color="secondary" hidden={!isLoading} />
					</Box> : null
				}
			</>
		</SdvCard >
	)
}