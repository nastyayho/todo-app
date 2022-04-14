import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const NavTitle = ({ title }) => {
	return (
		<Text style={styles.title}>{title}</Text>
	);
};

const styles = StyleSheet.create({
	title: {
		color: '#010414',
		fontSize: 20,
		fontFamily: 'luckiestguy-regular',
	},
});
