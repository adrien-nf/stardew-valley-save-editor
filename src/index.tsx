import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider, createTheme, styled } from '@mui/material';
import { SaveContextProvider } from './contexts/SaveContext';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import menu_border from "./images/menu_border.png";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
	borderImage: `url('${menu_border}')`,
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
	fontFamily: "Stardew_Valley",
	fontSize: 20
}));

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const theme = createTheme({
	typography: {
		h1: {
			fontSize: 40
		},
		h2: {
			fontSize: 36
		},
		allVariants: {
			color: "#541304",
			fontFamily: "Stardew_Valley",
			fontSize: 26
		},
	}
});

root.render(
	<React.StrictMode>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<SnackbarProvider Components={{
				default: StyledMaterialDesignContent
			}} autoHideDuration={5000}>
				<SaveContextProvider>
					<App />
				</SaveContextProvider>
			</SnackbarProvider>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
