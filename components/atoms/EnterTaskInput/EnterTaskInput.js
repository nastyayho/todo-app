import React, { useContext } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { ThemeContext } from '../../../theme';

export const EnterTaskInput = ({ inputText, handleInput }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		inputWrapper: {
			paddingRight: 10,
			flexGrow: 1,
			maxWidth: '80%',
		},

		input: {
			height: 56,
			borderStyle: 'solid',
			borderWidth: 1,
			borderColor: theme.colors.main,
			borderRadius: 3,
			backgroundColor: 'transparent',
			padding: 10,
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
