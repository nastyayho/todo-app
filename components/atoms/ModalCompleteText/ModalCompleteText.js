import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../../theme';

export const ModalCompleteText = ({ completed }) => {
	const [completedText, setCompletedText] = useState(completed);
	useEffect(() => {
		if (completed) {
			setCompletedText('Выполнено');
		} else {
			setCompletedText('Не выполнено');
		}
	});
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		completedText: {
			marginTop: 0,
			color: theme.colors.second,
			fontSize: theme.text.modalCompleted.fontSize,
			fontFamily: theme.text.modalCompleted.fontFamily,
		},

		completedTextYes: {
			color: theme.colors.second,
		},

		completedTextNo: {
			color: theme.colors.bgTodo,
		},
	});

	return (
		<Text
			style={[
				styles.completedText,
				completed ? styles.completedTextYes : styles.completedTextNo,
			]}
		>
			{completedText}
		</Text>
	);
};
