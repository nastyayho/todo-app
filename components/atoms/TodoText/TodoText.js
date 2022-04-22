import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../../theme';

export const TodoText = ({ text, completed, visibleText }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		textWrapper: {
			position: 'relative',
			marginHorizontal: 20,
		},

		text: {
			// maxWidth: '89%',
			minWidth: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			padding: 15,
			borderRadius: 3,
			// flexGrow: 1,
			backgroundColor: theme.colors.bgTodo,
			color: theme.colors.bgApp,
			fontSize: theme.text.todoText.fontSize,
			fontFamily: theme.text.todoText.fontFamily,
		},

		textCompleted: {
			opacity: 0.5,
			textDecorationLine: 'line-through',
			backgroundColor: theme.colors.second,
		},
	});

	return (
		<View style={styles.textWrapper}>
			<Text
				style={
					completed
						? [styles.text, styles.textCompleted]
						: styles.text
				}
			>
				{visibleText}
			</Text>
		</View>
	);
};
