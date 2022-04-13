import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../store/todoSlice';

export const Todo = ({ todo }) => {
	const {id, text, completed} = todo
	const dispatch = useDispatch();

	return (
		<TouchableOpacity
			style={styles.todo}
			activeOpacity={0.9}
			onLongPress={() => dispatch(toggleTodoComplete({ id }))}
			value={completed}
		>
			<Text style={completed ? styles.textCompleted : styles.text}>
				{text}
			</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => dispatch(removeTodo({ id }))}
			>
				<Text style={styles.buttonText}>&times;</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	todo: {
		marginBottom: 10,
		flexDirection: 'row',
		alignItems: 'stretch',
		backgroundColor: '#fff',
	},

	checkbox: {
		marginRight: 10,
	},

	text: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderWidth: 1,
		borderColor: '#accc43',
		borderRadius: 3,
		backgroundColor: '#accc43',
		fontSize: 16,
		flexGrow: 1,
		color: '#212224',
	},

	textCompleted: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderWidth: 1,
		borderColor: '#accc43',
		borderRadius: 3,
		backgroundColor: '#accc43',
		fontSize: 16,
		flexGrow: 1,
		opacity: 0.5,
		color: '#212224',
		textDecorationColor: '#212224',
		textDecorationStyle: 'solid',
		textDecorationLine: 'line-through',
	},

	button: {
		marginLeft: 10,
		padding: 10,
		backgroundColor: '#fff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#accc43',
		borderRadius: 3,
		fontSize: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonText: {
		color: '#accc43',
	},
});
