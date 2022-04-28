import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import MainStack from '../../../navigate';
import { Navbar } from '../../molecules/Navbar/Navbar';
import { ThemeContext } from '../../../theme';

export const MainPage = () => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		mainPage: {
			flex: 1,
			backgroundColor: theme.colors.bgApp,
		},
	});

	return (
		<View style={styles.mainPage}>
			<Navbar />
			<MainStack />
		</View>
	);
};
