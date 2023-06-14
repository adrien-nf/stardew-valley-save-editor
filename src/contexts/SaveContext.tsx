import {
	createContext,
	useState,
} from 'react';
import { Save } from '../types/Save';
import Dropzone from 'react-dropzone';
import { Backdrop, Container, Typography } from '@mui/material';
import { SdvCard } from '../components/SdvCard/SdvCard';
import xmljs from "xml-js";
import _ from "lodash";
import { Path } from '../enums/Path';
import { EndNode, Node, NodeOrEndNode } from '../types/Node';
import { useSnackbar } from 'notistack';

interface SaveContextProps {
	save: Save | undefined,
	setSave: (save: Save) => void,
	isLoading: boolean,
	loadFromFile: (content: any) => void,
	download: () => void,
	get: (path: Path) => undefined | string,
	set: (path: Path, value: string) => void,
}

export const SaveContext = createContext<SaveContextProps>({
	save: undefined,
	setSave: () => {
		//
	},
	isLoading: false,
	loadFromFile: () => {
		//
	},
	download: () => {
		//
	},
	get: () => {
		return "";
	},
	set: () => {
		//
	}
});

interface SaveContextProviderProps {
	children: JSX.Element,
}

export function SaveContextProvider(props: SaveContextProviderProps): JSX.Element {
	const [save, setSave] = useState<Save>();
	const [filename, setFilename] = useState<string>();
	const [isFileBackdropOpen, setIsFileBackdropOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [openDownload, setOpenDownload] = useState(false);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const loadFromFile = (file: File) => {
		const reader = new FileReader()

		setIsLoading(true);

		reader.onload = (e) => {
			if (!e.target) {
				return;
			}

			try {
				const result = xmljs.xml2js(e.target.result as string);

				if (file.name.startsWith("SaveGameInfo")) {
					throw new Error("Please use CHARACTER_123456789 file instead of SaveGameInfo.");
				}

				// Error is caught in block
				const isValidStardewValleySaveFile = _.get(result, "elements.0.name") === "SaveGame";

				setSave(result)
				setFilename(file.name);
			} catch (e: any) {
				if (e.message.startsWith("Please use")) {
					enqueueSnackbar(e.message);
				} else {
					enqueueSnackbar("File isn't a valid Stardew Valley file.")
				}
				setOpen(true);
			} finally {
				setIsLoading(false);
			}

		}

		reader.readAsText(file)
	}

	const download = () => {
		const xmltext = xmljs.js2xml(save as object);

		const pom = document.createElement('a');
		const bb = new Blob([xmltext], { type: 'text/plain' });

		pom.setAttribute('href', window.URL.createObjectURL(bb));
		pom.setAttribute('download', filename || "save");

		pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
		pom.draggable = true;
		pom.classList.add('dragout');

		pom.click();
		setOpenDownload(true);
	}

	const get = (path: Path): undefined | string => {
		const split = path.split(".");

		let node = _.get(save, "elements.0") as NodeOrEndNode | undefined;

		while (split.length > 0 && node) {
			const search = split.shift();

			node = node as Node;

			if (node.elements) {
				node = node.elements.find(subNode => (subNode as Node).name === search) as NodeOrEndNode
			}
		}

		if (typeof node === "undefined") return "";

		return ((node as Node).elements[0] as EndNode).text;
	}

	const set = (path: Path, value: string): void => {
		let buffer = "elements.0";

		const split = path.split(".");
		let node = _.get(save, "elements.0") as NodeOrEndNode | undefined;

		while (split.length > 0 && node) {
			const search = split.shift();

			node = node as Node;

			if (node.elements) {
				buffer += `.elements.${node.elements.findIndex(subNode => (subNode as Node).name === search)}`
				node = node.elements.find(subNode => (subNode as Node).name === search) as NodeOrEndNode
			}
		}

		buffer += ".elements.0.text";

		if (save) {
			setSave(_.set(save, buffer, value));
		}
	}

	return (
		<SaveContext.Provider value={{
			save, setSave, isLoading, loadFromFile, download, get, set
		}}
		>
			<Dropzone
				noClick={true}
				onDropAccepted={files => {
					loadFromFile(files[0]);
				}}
				maxFiles={1}
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
								<SdvCard props={{
									style: {
										width: "auto",
									}
								}}>
									<Typography align="center" width="auto">Make sure this is a valid Stardew Valley save file!</Typography>
								</SdvCard>
							</Backdrop>
						</div>
					</section>
				)}
			</Dropzone>
		</SaveContext.Provider >
	);
}
