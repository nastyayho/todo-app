import React, {useState} from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './components/molecules/Navbar/Navbar';
import { MainScreen } from './components/organisms/MainScreen/MainScreen';
import AppLoading from 'expo-app-loading';
import { defaultTheme, ThemeContext } from './theme';
import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
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
					<View
						style={styles.app}
					>
						<Navbar title="Todo App" />
						<MainScreen />
					</View>
				</ThemeContext.Provider>	
			</Provider>
		);
	} else {
		return (
			<AppLoading 
				startAsync={getFonts}
				onError={err => console.log(err)}
				onFinish={() => setFontsLoaded(true)}
			/>
		);
	}
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		backgroundColor: '#eae2d7',
	},
});
