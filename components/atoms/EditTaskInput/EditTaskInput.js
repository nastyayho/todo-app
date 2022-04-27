import React, { useContext } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { ThemeContext } from '../../../theme';

export const EditTaskInput = ({ inputText, handleInput }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		inputWrapper: {
			paddingRight: 10,
			flexGrow: 1,
			maxWidth: '82%',
		},

		input: {
			height: 56,
			borderStyle: 'solid',
			borderBottomWidth: 1,
			borderColor: theme.colors.main,
			borderRadius: 3,
			backgroundColor: 'transparent',
			color: theme.colors.main,
			fontSize: theme.text.inputText.fontSize,
			fontFamily: theme.text.inputText.fontFamily,
		},
	});

	return (
		<View style={styles.inputWrapper}>
			<TextInput
				placeholderTextColor={theme.colors.bgTodo}
				selectionColor={theme.colors.main}
				onChangeText={handleInput}
				value={inputText}
				placeholder={'Введите название дела'}
				autoCorrect={false}
				style={styles.input}
			/>
		</View>
	);
};
