import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ThemeContext } from '../../../theme';

export const NavTitle = () => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		navText: {
			color: theme.colors.main,
			backgroundColor: 'transparent',
			fontSize: theme.text.header.fontSize,
			fontFamily: theme.text.header.fontFamily,
		},

		image: {
			position: 'absolute',
			top: -3,
			left: 95,
			width: 30,
			height: 30,
			backgroundColor: 'transparent',
		},
	});

	return (
		<View style={styles.navTitle}>
			<Text style={styles.navText}>Todo App</Text>
			<Image
				source={require('../../../assets/images/cat.png')}
				style={styles.image}
				transparent
			/>
		</View>
	);
};
