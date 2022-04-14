import React from 'react';
import {
	StyleSheet,
	View,
	TextInput,
} from 'react-native';

export const EnterTaskInput = ({ text, handleInput }) => {
    
	return (
		<View style={styles.shadow}>
			<TextInput
                placeholderTextColor="#998c90"
                selectionColor="#010414"
				style={styles.input}
				onChangeText={handleInput}
				value={text}
				placeholder={'Введите название дела'}
				autoCorrect={false}
				autoCapitalize="none"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	shadow: {
        flexGrow: 1,
        maxWidth: '77.8%',
	},

	input: {
        height: 56,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#010414',
		borderRadius: 3,
		backgroundColor: 'transparent',
		padding: 10,
		color: '#010414',
		fontSize: 16,
	},
});
