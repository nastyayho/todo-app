import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},

	reducers: {
		addTodo(state, action) {
			if (action.payload.inputText.trim()) {
				state.todos.push({
					id: Date.now().toString(),
					text: action.payload.inputText,
					completed: false,
				});
			} else {
				Alert.alert('Упс!', 'Название дела не может быть пустым', [
					{ text: 'Понятно' },
				]);
			}
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload.id
			);
		},
		toggleTodoComplete(state, action) {
			const toggledTodo = state.todos.find(
				(todo) => todo.id === action.payload.id
			);
			toggledTodo.completed = !toggledTodo.completed;
		},
		editTodo(state, action) {
			if (action.payload.inputText.trim()) {
				const editedTodo = state.todos.find(
					(todo) => todo.id === action.payload.id
				);
				editedTodo.text = action.payload.inputText;
				// console.log(action.payload);
			} else {
				Alert.alert('Упс!', 'Название дела не может быть пустым', [
					{ text: 'Понятно' },
				]);
			}
		},
	},
});

export const { addTodo, removeTodo, toggleTodoComplete, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
