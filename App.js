import React, { useState } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { MainPage } from './components/organisms/MainPage/MainPage';
import AppLoading from 'expo-app-loading';
import { defaultTheme, ThemeContext } from './theme';
import * as Font from 'expo-font';

const getFonts = () =>
	Font.loadAsync({
		'luckiestguy-regular': require('./assets/fonts/luckiestguy-regular.ttf'),
		'roboto-medium': require('./assets/fonts/roboto-medium.ttf'),
		'roboto-regular': require('./assets/fonts/roboto-regular.ttf'),
	});

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (fontsLoaded) {
		return (
			<Provider store={store}>
				<ThemeContext.Provider value={defaultTheme}>
					<MainPage />
				</ThemeContext.Provider>
			</Provider>
		);
	} else {
		return (
			<AppLoading
				startAsync={getFonts}
				onError={(err) => console.log(err)}
				onFinish={() => setFontsLoaded(true)}
			/>
		);
	}
}
