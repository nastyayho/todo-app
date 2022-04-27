import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../../theme';

export const ModalTodoText = ({ text }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		modalText: {
			marginTop: 30,
			color: theme.colors.main,
			fontSize: theme.text.modalText.fontSize,
			fontFamily: theme.text.modalText.fontFamily,
		},
	});

	return <Text style={styles.modalText}>{text}</Text>;
};
