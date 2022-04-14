import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import { AddTaskBtn } from '../../atoms/AddTaskBtn/AddTaskBtn';
import { EnterTaskInput } from '../../atoms/EnterTaskInput/EnterTaskInput';

export const InputField = ({ text, handleInput, handleSubmit }) => {
	return (
		<View style={styles.block}>
			<EnterTaskInput text={text} handleInput={handleInput} />
			<AddTaskBtn handleSubmit={handleSubmit} />
		</View>
	);
};

const styles = StyleSheet.create({
	block: {
		marginBottom: 15,
		height: 56,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},
});
