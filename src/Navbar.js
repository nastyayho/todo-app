import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Navbar = ({ title }) => {
	return (
		<View style={styles.navbar}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	navbar: {
		height: 80,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: '#fff',
		paddingVertical: 14,
		// borderBottomWidth: 1,
		// borderBottomColor: '#ffc32f',
		// borderStyle: 'solid',
	},

	text: {
		color: '#212224',
		fontSize: 20,
	},
});
