import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AddTaskBtn } from '../../atoms/AddTaskBtn/AddTaskBtn';
import { EnterTaskInput } from '../../atoms/EnterTaskInput/EnterTaskInput';

export const AddTodoField = ({ inputText, handleInput, handleSubmit }) => {
	const styles = StyleSheet.create({
		addTodoField: {
			marginBottom: 15,
			paddingHorizontal: 20,
			height: 56,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'stretch',
		},
	});

	return (
		<View style={styles.addTodoField}>
			<EnterTaskInput inputText={inputText} handleInput={handleInput} />
			<AddTaskBtn handleSubmit={handleSubmit} />
		</View>
	);
};
