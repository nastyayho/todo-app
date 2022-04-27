import React, { useContext, useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../../store/todoSlice';
import { ModalHeader } from '../../molecules/ModalHeader/ModalHeader';
import { EditTodoField } from '../../molecules/EditTodoField/EditTodoField';
import { ThemeContext } from '../../../theme';
import { ModalTodoText } from '../../atoms/ModalTodoText/ModalTodoText';

export const AllTextModal = ({
	text,
	modalOpen,
	setModalOpen,
	completed,
	toggleTodoComplete,
	id,
}) => {
	const [inputText, setInputText] = useState('');
	const [openedEditTodo, setOpenedEditTodo] = useState(false);
	const dispatch = useDispatch();
	const editTask = () => {
		dispatch(editTodo({ inputText, id }));
		if (inputText !== '') {
			setInputText('');
			setOpenedEditTodo(false);
		}
	};
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		modal: {
			flex: 1,
			paddingVertical: 20,
			paddingHorizontal: 20,
			backgroundColor: theme.colors.bgApp,
		},

		modalText: {
			marginTop: 30,
			color: theme.colors.main,
			fontSize: theme.text.modalText.fontSize,
			fontFamily: theme.text.modalText.fontFamily,
		},
	});

	return (
		<Modal visible={modalOpen} animationType="slide">
			<View style={styles.modal}>
				<ModalHeader
					setModalOpen={setModalOpen}
					toggleTodoComplete={toggleTodoComplete}
					completed={completed}
					setOpenedEditTodo={setOpenedEditTodo}
					openedEditTodo={openedEditTodo}
				/>
				<EditTodoField
					openedEditTodo={openedEditTodo}
					inputText={inputText}
					handleInput={setInputText}
					handleSubmit={editTask}
				/>
				<ModalTodoText text={text} />
			</View>
		</Modal>
	);
};
