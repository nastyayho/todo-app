import React from 'react';
import { View } from 'react-native';
import { ModalCloseBtn } from '../../atoms/ModalCloseBtn/ModalCloseBtn';
import { ModalCompleteBtn } from '../../atoms/ModalCompleteBtn/ModalCompleteBtn';
import { ModalEditBtn } from '../../atoms/ModalEditBtn/ModalEditBtn';
import { ModalCompleteText } from '../../atoms/ModalCompleteText/ModalCompleteText';

export const ModalHeader = ({
	setModalOpen,
	completed,
	toggleTodoComplete,
	id,
	setOpenedEditTodo,
	openedEditTodo,
}) => {
	return (
		<View>
			<ModalCompleteText completed={completed} />
			<ModalCompleteBtn
				completed={completed}
				toggleTodoComplete={toggleTodoComplete}
				id={id}
			/>
			<ModalEditBtn
				setOpenedEditTodo={setOpenedEditTodo}
				openedEditTodo={openedEditTodo}
			/>
			<ModalCloseBtn setModalOpen={setModalOpen} />
		</View>
	);
};
