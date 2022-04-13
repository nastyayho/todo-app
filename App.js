import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { MainScreen } from './src/MainScreen';

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.app}>
				<Navbar title="Todo App" />
				<MainScreen />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
