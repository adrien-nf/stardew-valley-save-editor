import { Container, Stack } from "@mui/material"
import { WaitingForSave } from "./WaitingForSave/WaitingForSave"
import { Editor } from "./Editor/Editor"
import { useState } from "react";
import { Logo } from "../../components/Logo/Logo";

export const Home = () => {
	const [data, setData] = useState();

	return (
		<Container>
			<Stack paddingTop={3} paddingBottom={3} gap={3} alignItems="center">
				<Logo />
				<WaitingForSave />
				<Editor />
			</Stack>
		</Container>
	)
}