import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AddTaskBtn } from '../../atoms/AddTaskBtn/AddTaskBtn';
import { EnterTaskInput } from '../../atoms/EnterTaskInput/EnterTaskInput';

export const InputField = ({ text, handleInput, handleSubmit }) => {

	const styles = StyleSheet.create({
		inputField: {
			marginBottom: 15,
			height: 56,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'stretch',
		},
	});

	return (
		<View style={styles.inputField}>
			<EnterTaskInput text={text} handleInput={handleInput} />
			<AddTaskBtn handleSubmit={handleSubmit} />
		</View>
	);
};