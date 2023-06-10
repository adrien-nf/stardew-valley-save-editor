import { Container, Stack } from "@mui/material"
import { WaitingForSave } from "./WaitingForSave/WaitingForSave"
import { Editor } from "./Editor/Editor"
import { Logo } from "../../components/Logo/Logo";
import { useContext } from "react";
import { SaveContext } from "../../contexts/SaveContext";

export const Home = () => {

	const { save } = useContext(SaveContext);

	return (
		<Container style={{
			minHeight: "100vh"
		}}>
			<Stack paddingTop={3} paddingBottom={3} gap={3} alignItems="center">
				<Logo />
				{
					save ? <Editor /> : <WaitingForSave />
				}
			</Stack>
		</Container>
	)
}