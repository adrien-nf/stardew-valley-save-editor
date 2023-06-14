import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { SaveContextProvider } from './contexts/SaveContext';

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
			<SaveContextProvider>
				<App />
			</SaveContextProvider>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
