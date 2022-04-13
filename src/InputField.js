import React from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
} from 'react-native';

export const InputField = ({ text, handleInput, handleSubmit }) => {

	return (
		<View style={styles.block}>
			<TextInput
				style={styles.input}
				onChangeText={handleInput}
				value={text}
				placeholder={'Введите название дела'}
				autoCorrect={false}
				autoCapitalize="none"
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={handleSubmit}
			>
				<Text style={styles.buttonText}>Добавить</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	block: {
		marginBottom: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},

	input: {
		width: '70%',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#ffc32f',
		borderRadius: 3,
		backgroundColor: 'transparent',
		padding: 10,
		// caretColor: '#212224',
		color: '#212224',
		fontSize: 16,
	},

	button: {
		marginLeft: 10,
		padding: 10,
		backgroundColor: '#ffc32f',
		borderRadius: 3,
		fontSize: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonText: {
		color: '#212224',
		fontSize: 16,
	},
});
