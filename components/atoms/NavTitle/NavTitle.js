import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../../theme';

export const NavTitle = ({ title }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		nav: {
			color: theme.colors.main,
			backgroundColor: 'transparent',
			fontSize: theme.text.header.fontSize,
			fontFamily: theme.text.header.fontFamily,
		},
	});

	return <Text style={styles.nav}>{title}</Text>;
};
