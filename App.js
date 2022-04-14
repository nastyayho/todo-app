import React, {useState} from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './components/molecules/Navbar/Navbar';
import { MainScreen } from './components/organisms/MainScreen/MainScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';

const getFonts = () => Font.loadAsync({
	'luckiestguy-regular': require('./assets/fonts/luckiestguy-regular.ttf'),
});

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	
	if (fontsLoaded) {
		return (
			<Provider store={store}>				
				<LinearGradient
					start={{x: 1, y: 0}}
					end={{x: 0, y: 1}}
					colors={['#ffbdbe', '#fdfcfa']}
					style={styles.app}
				>
					<Navbar title="Todo App" />
					<MainScreen />
				</LinearGradient>
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
		// backgroundColor: '#eae2d7',
	},
});
