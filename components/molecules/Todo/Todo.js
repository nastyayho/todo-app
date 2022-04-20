import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../../../store/todoSlice';
import { RemoveTodoBtn } from '../../atoms/RemoveTodoBtn/RemoveTodoBtn';
import { TodoText } from '../../atoms/TodoText/TodoText';
import Draggable from 'react-native-draggable';

export const Todo = ({ todo }) => {
	const { id, text, completed } = todo;
	const dispatch = useDispatch();

	const styles = StyleSheet.create({
		todo: {
			// flex: 1,
			marginHorizontal: 20,
			// marginBottom: 10,
			// flexDirection: 'row',
			// alignItems: 'stretch',
			alignItems: 'flex-start',
			// height: 60,
			minHeight: 60,
		},
	});

	return (
		<View
			style={styles.todo}
		>
			<Draggable 
				shouldReverse={true}
				renderSize={60}
				minY={0}
				maxY={0}
				style={styles.todoInner}
			>
				
				<TodoText
					id={id}
					text={text}
					completed={completed}
					toggleTodoComplete={() => dispatch(toggleTodoComplete({ id }))}
				/>
				{/* <RemoveTodoBtn
					id={id}
					removeTodo={() => dispatch(removeTodo({ id }))}
				/> */}
			</Draggable>
			{/* <TodoText
				id={id}
				text={text}
				completed={completed}
				toggleTodoComplete={() => dispatch(toggleTodoComplete({ id }))}
			/>
			<RemoveTodoBtn
				id={id}
				removeTodo={() => dispatch(removeTodo({ id }))}
			/> */}
		</View>
	);

	// return (
	// 	<TouchableOpacity
	// 		style={styles.todo}
	// 		activeOpacity={0.9}
	// 	>
	// 		<TodoText
	// 			id={id}
	// 			text={text}
	// 			completed={completed}
	// 			toggleTodoComplete={() => dispatch(toggleTodoComplete({ id }))}
	// 		/>
	// 		<RemoveTodoBtn
	// 			id={id}
	// 			removeTodo={() => dispatch(removeTodo({ id }))}
	// 		/>
	// 	</TouchableOpacity>
	// );
};
