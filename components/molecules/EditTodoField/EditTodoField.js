import React from 'react';
import { StyleSheet, View } from 'react-native';
import { EditTaskInput } from '../../atoms/EditTaskInput/EditTaskInput';
import { EditTaskBtn } from '../../atoms/EditTaskBtn/EditTaskBtn';

export const EditTodoField = ({ text, handleInput, handleSubmit, openedEditTodo, id }) => {

	const styles = StyleSheet.create({
		editTodoField: {
			marginTop: 30,
			height: 56,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'stretch',
		},

		editNoView: {
			display: 'none',
		},
	});

	return (
		<View style={ openedEditTodo ? styles.editTodoField : [styles.editTodoField, styles.editNoView]}>
			<EditTaskInput text={text} handleInput={handleInput}/>
			<EditTaskBtn handleSubmit={handleSubmit} />
		</View>
	);
};