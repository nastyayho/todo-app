import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../../theme';


export const TodoText = ({ id, text, completed, toggleTodoComplete }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		text: {
			maxWidth: '89%',
			flexDirection: 'row',
			alignItems: 'center',
			padding: 15,
			borderRadius: 3,
			flexGrow: 1,
			backgroundColor: theme.colors.bgTodo,
			color: theme.colors.bgApp,
			fontSize: theme.text.todoText.fontSize,
			fontFamily: theme.text.todoText.fontFamily,
		},
	
		textCompleted: {
			opacity: 0.5,
			textDecorationLine: 'line-through',
		},
	});

	return (
		<Text
			style={
				completed
					? [styles.textCompleted, styles.text]
					: styles.text
			}
			onLongPress={() => toggleTodoComplete({ id })}
		>
			{text}
		</Text>
	);
};


