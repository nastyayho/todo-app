import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { addTodo } from '../../../store/todoSlice';
import { AddTodoField } from '../../molecules/AddTodoField/AddTodoField';
import { TodoList } from '../../molecules/TodoList/TodoList';

export const MainScreen = () => {
	const [inputText, setInputText] = useState('');
	const dispatch = useDispatch();
	const addTask = () => {
		dispatch(addTodo({ inputText }));
		setInputText('');
	};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingVertical: 10,
			backgroundColor: 'transparent',
		},
	});

	return (
		<View style={styles.container}>
			<AddTodoField
				inputText={inputText}
				handleInput={setInputText}
				handleSubmit={addTask}
			/>
			<TodoList />
		</View>
	);
};
