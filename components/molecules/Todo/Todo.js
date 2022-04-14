import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../../../store/todoSlice';
import { RemoveTodoBtn } from '../../atoms/RemoveTodoBtn/RemoveTodoBtn';
import { TodoText } from '../../atoms/TodoText/TodoText';

export const Todo = ({ todo }) => {
	const { id, text, completed } = todo;
	const dispatch = useDispatch();

	return (
		<TouchableOpacity style={styles.todo} activeOpacity={0.9}>
			<TodoText
				id={id}
				text={text}
				completed={completed}
				toggleTodoComplete={() => dispatch(toggleTodoComplete({ id }))}
			/>
			<RemoveTodoBtn
				id={id}
				removeTodo={() => dispatch(removeTodo({ id }))}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	todo: {
		marginBottom: 10,
		flexDirection: 'row',
		alignItems: 'stretch',
	},
});
