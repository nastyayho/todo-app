import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { addTodo } from '../../../store/todoSlice';
import { InputField } from '../../molecules/InputField/InputField';
import { TodoList } from '../../molecules/TodoList/TodoList';

export const MainScreen = () => {
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	const addTask = () => {
		dispatch(addTodo({ text }));
		setText('');
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
			<InputField
				text={text}
				handleInput={setText}
				handleSubmit={addTask}
			/>
			<TodoList />
		</View>
	);
};
