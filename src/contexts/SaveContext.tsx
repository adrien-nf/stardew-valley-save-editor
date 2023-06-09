import {
	createContext,
	useState,
} from 'react';
import { Save } from '../types/Save';
import Dropzone from 'react-dropzone';
import { Backdrop, Container, Typography } from '@mui/material';
import { SdvCard } from '../components/SdvCard/SdvCard';
import xmljs from "xml-js";

interface SaveContextProps {
	save: Save | undefined,
	setSave: (save: Save) => void,
	isLoading: boolean,
	loadFromFile: (content: any) => void,
}

export const SaveContext = createContext<SaveContextProps>({
	save: undefined,
	setSave: () => {
		//
	},
	isLoading: false,
	loadFromFile: () => {
		//
	}
});

interface SaveContextProviderProps {
	children: JSX.Element,
}

export function SaveContextProvider(props: SaveContextProviderProps): JSX.Element {
	const [save, setSave] = useState<Save>();
	const [isFileBackdropOpen, setIsFileBackdropOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const loadFromFile = (file: any) => {
		const reader = new FileReader()

		if (file.name.includes(".")) return;

		setIsLoading(true);
		setSave(undefined)

		reader.onload = (e) => {
			if (!e.target) {
				return;
			}

			try {
				const result = xmljs.xml2js(e.target.result as string);
				setSave(result)
				console.log(result);
			} catch {

			} finally {
				setIsLoading(false);
			}

		}

		reader.readAsText(file)
	}

	return (
		<SaveContext.Provider value={{
			save, setSave, isLoading, loadFromFile
		}}
		>
			<Dropzone
				noClick={true}
				onDropAccepted={files => {
					loadFromFile(files[0]);
				}}
				maxFiles={1}
				// onDropRejected={() => {
				// 	errorSnackbar("File isn't a valid CSV.")
				// }}
				onDrop={() => {
					setIsFileBackdropOpen(false)
				}}
				onDragEnter={() => {
					setIsFileBackdropOpen(true)
				}}
				onDragLeave={() => {
					setIsFileBackdropOpen(false)
				}}
				multiple={false}>
				{({ getRootProps, getInputProps }) => (
					<section>
						<div {...getRootProps()}>
							<input {...getInputProps()} />
							{props.children}
							<Backdrop open={isFileBackdropOpen}>
								<Container>
									<SdvCard>
										<Typography align="center">Make sure this is a valid Stardew Valley save file!</Typography>
									</SdvCard>
								</Container>
							</Backdrop>
						</div>
					</section>
				)}
			</Dropzone>
		</SaveContext.Provider >
	);
}
