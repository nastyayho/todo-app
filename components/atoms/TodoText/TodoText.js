import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const TodoText = ({ id, text, completed, toggleTodoComplete }) => {
	return (
		<Text
			style={
				completed
					? [styles.textCompleted, styles.text, styles.bgColor]
					: [styles.text, styles.bgColor]
			}
			onLongPress={() => toggleTodoComplete({ id })}
		>
			{text}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		maxWidth: '89%',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderRadius: 3,
		backgroundColor: '#FFDBDC',
		fontSize: 16,
		flexGrow: 1,
		color: '#010414',
	},

	textCompleted: {
		opacity: 0.5,
		textDecorationLine: 'line-through',
	},
});
