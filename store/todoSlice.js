import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},

	reducers: {
		addTodo(state, action) {
			if (action.payload.text.trim()) {
				state.todos.push({
					id: Date.now().toString(),
					text: action.payload.text,
					completed: false,
					modalOpened: false,
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
		setModalOpen(state, action) {
			const todoModal = state.todos.find(
				(todo) => todo.id === action.payload.id
			);
			todoModal.modalOpened = !todoModal.modalOpened;
			if (action.payload.text) {
				todoModal.text = action.payload.text;
			}
		},
	},
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
