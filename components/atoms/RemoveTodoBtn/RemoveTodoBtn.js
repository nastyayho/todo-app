import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const RemoveTodoBtn = ({ id, removeTodo }) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => removeTodo({ id })}
		>
			<Text style={styles.buttonText}>&times;</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		marginLeft: 10,
		paddingVertical: 5,
		paddingHorizontal: 10,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#010414',
		borderRadius: 3,
		fontSize: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonText: {
		color: '#010414',
	},
});
