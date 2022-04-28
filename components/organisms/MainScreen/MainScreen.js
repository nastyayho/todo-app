import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { addTodo } from '../../../store/todoSlice';
import { AddTodoField } from '../../molecules/AddTodoField/AddTodoField';
import { TodoList } from '../../molecules/TodoList/TodoList';
import { ThemeContext } from '../../../theme';
import { NavBtn } from '../../atoms/NavBtn/NavBtn';

export const MainScreen = ({ navigation }) => {
	const [inputText, setInputText] = useState('');
	const dispatch = useDispatch();
	const addTask = () => {
		dispatch(addTodo({ inputText }));
		setInputText('');
	};

	const loadScene = () => {
		navigation.navigate('Information');
	};
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: 10,
			paddingBottom: 10,
			backgroundColor: theme.colors.bgApp,
		},

		button: {
			position: 'absolute',
			top: -10,
			right: 20,
			zIndex: 100,
		},
	});

	return (
		<View style={styles.container}>
			<AddTodoField
				inputText={inputText}
				handleInput={setInputText}
				handleSubmit={addTask}
			/>
			<NavBtn loadScene={loadScene}/>
			<TodoList />
		</View>
	);
};
