import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { TodoText } from '../../atoms/TodoText/TodoText';
import { removeTodo, toggleTodoComplete } from '../../../store/todoSlice';
import Draggable from 'react-native-draggable';
import { AllTextModal } from '../../organisms/AllTextModal/AllTextModal';

export const Todo = ({ todo }) => {
	const { id, text, completed } = todo;
	const dispatch = useDispatch();
	const [visibleText, setVisibleText] = useState('');
	const [modalOpen, setModalOpen] = useState(false);

	const removeTask = function ({ id }) {
		Alert.alert('Удалить дело', `${visibleText} ?`, [
			{ text: 'Да', onPress: () => dispatch(removeTodo({ id })) },
			{ text: 'Нет' },
		]);
	};

	useEffect(() => {
		if (text.split('').length > 23) {
			setVisibleText(text.split('').slice(0, 23).join('') + '...');
		} else {
			setVisibleText(text);
		}
	}, [text]);

	const styles = StyleSheet.create({
		todo: {
			marginBottom: 10,
			width: '100%',
			alignItems: 'flex-start',
			height: 51,
		},
	});

	return (
		<View style={styles.todo}>
			<Draggable
				shouldReverse={true}
				touchableOpacityProps={{ activeOpacity: 0.9 }}
				minY={0}
				maxY={0}
				onShortPressRelease={() => setModalOpen(true)}
				onLongPress={() => dispatch(toggleTodoComplete({ id }))}
				onDragRelease={(event, gestureState) => {
					if (Math.abs(gestureState.dx) > 250 || gestureState.vx > 2) {
						removeTask({ id });
					}
				}}
			>
				<TodoText completed={completed} visibleText={visibleText} />
				<AllTextModal
					text={text}
					modalOpen={modalOpen}
					setModalOpen={setModalOpen}
					completed={completed}
					toggleTodoComplete={() => dispatch(toggleTodoComplete({ id }))}
					id={id}
				/>
			</Draggable>
		</View>
	);
};
