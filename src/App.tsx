import './App.css';
import { Home } from './pages/Home/Home';
import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		resources: {
			en: {
				translation: {
					"PLAYER_NAME": "Player name",
					"PLAYER_FARM_NAME": "Farm name",
					"PLAYER_IS_MALE": "Male",
					"PLAYER_FAVOURITE_THING": "Favourite thing",
					"PLAYER_HORSE_NAME": "Horse name",
					"PLAYER_CAT_PERSON": "Cat person",
				}
			}
		},
		lng: "en", // if you're using a language detector, do not define the lng option
		fallbackLng: "en",

		interpolation: {
			escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		}
	});

function App() {
	return (
		<Home />
	);
}

export default App;
