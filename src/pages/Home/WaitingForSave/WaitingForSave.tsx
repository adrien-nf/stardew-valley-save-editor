import { Box, CircularProgress, Hidden, Stack, Typography } from "@mui/material"
import { SdvCard } from "../../../components/SdvCard/SdvCard"
import { useContext } from "react";
import { SaveContext } from "../../../contexts/SaveContext";
import { useTranslation } from "react-i18next";

export const WaitingForSave = () => {
	const { isLoading, loadFromFile } = useContext(SaveContext);
	const { t } = useTranslation();

	return (
		<SdvCard>
			<Stack gap={2} textAlign="center">
				<Typography variant="h1" align="center">{t("App.Name")}</Typography>
				<Box>
					<Typography variant="h2">1. {t("Demo.Step1")}</Typography>
					<Typography variant="subtitle1">{t("Demo.Step1.Subtitle")}</Typography>
				</Box>
				<Box>
					<Typography variant="h2">2. {t("Demo.Step2")}</Typography>
					<Box>
						<Hidden xsUp={isLoading}>
							<input style={{
							}} type="file" onChange={(e) => {
								if ((e?.target?.files?.length || 0) > 0) {
									loadFromFile(e?.target?.files && e.target.files[0])
								}

								e.target.value = "";
							}} />
						</Hidden>
						{
							isLoading ? <Box>
								<CircularProgress color="secondary" hidden={!isLoading} />
							</Box> : null
						}
					</Box>
				</Box>
				<Box>
					<Typography variant="h2">3. {t("Demo.Step3")}</Typography>
					<Typography variant="subtitle1">{t("Demo.Step3.Subtitle")}</Typography>
				</Box>
			</Stack>
		</SdvCard >
	)
}