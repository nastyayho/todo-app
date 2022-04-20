import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../../theme';

export const TodoText = ({ id, text, completed, toggleTodoComplete }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		text: {
			maxWidth: '89%',
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			padding: 15,
			borderRadius: 3,
			// flexGrow: 1,
			backgroundColor: theme.colors.bgTodo,
			color: theme.colors.bgApp,
			fontSize: theme.text.todoText.fontSize,
			fontFamily: theme.text.todoText.fontFamily,
			// shadowColor:  '#000',
			// shadowOffset: {
			// 	width: 1,
			// 	height: 2,
			// },
			// shadowRadius: 2.62,
			// shadowOpacity: 0.23,
			// elevation: 3,
		},

		textCompleted: {
			opacity: 0.5,
			textDecorationLine: 'line-through',
			backgroundColor: theme.colors.second,
		},
	});

	return (
		<Text
			style={
				completed ? [styles.text, styles.textCompleted] : styles.text
			}
			onLongPress={() => toggleTodoComplete({ id })}
		>
			{text}
		</Text>
	);
};
