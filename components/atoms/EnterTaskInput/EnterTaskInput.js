import React, { useContext } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
} from 'react-native';
import { ThemeContext } from '../../../theme';

export const EnterTaskInput = ({ text, handleInput }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
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
		<View style={{
			flexGrow: 1,
			maxWidth: '77.8%',
		}}>
			<TextInput
                placeholderTextColor={theme.colors.bgTodo}
                selectionColor={theme.colors.main}
				onChangeText={handleInput}
				value={text}
				placeholder={'Введите название дела'}
				autoCorrect={false}
				autoCapitalize="none"
				style={styles.input}
			/>
		</View>
	);
};