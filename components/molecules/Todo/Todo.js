import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TodoText } from '../../atoms/TodoText/TodoText';
import { removeTodo, toggleTodoComplete } from '../../../store/todoSlice';
import Draggable from 'react-native-draggable';
import { AllTextModal } from '../../molecules/AllTextModal/AllTextModal';

export const Todo = ({ todo }) => {
	const { id, text, completed, modalOpened } = todo;
	const dispatch = useDispatch();
	const [visibleText, setVisibleText] = useState('');
	const state = useSelector((state) => state);

	useEffect(() => {
		if (text.split('').length > 23) {
			setVisibleText(text.split('').slice(0, 23).join('') + '...')
		} else {
			setVisibleText(text)
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
				onShortPressRelease={() => dispatch(setModalOpen({ id, text }))}
				onLongPress={() => dispatch(toggleTodoComplete({ id }))}
				onDragRelease={(event, gestureState) => {
					if (gestureState.dx > 300 || gestureState.vx > 2.5) {
						dispatch(removeTodo({ id }));
						console.log(state);
					}
				}}
			>
				<TodoText text={text} completed={completed} visibleText={visibleText} />
				<AllTextModal text={text} modalOpened={modalOpened}/>
			</Draggable>	
		</View>
	);
};
