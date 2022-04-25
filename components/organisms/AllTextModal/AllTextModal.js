import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';
import { ThemeContext } from '../../../theme';
import { ModalCloseBtn } from '../../atoms/ModalCloseBtn/ModalCloseBtn';
import { ModalCompleteBtn } from '../../atoms/ModalCompleteBtn/ModalCompleteBtn';
import { ModalEditBtn } from '../../atoms/ModalEditBtn/ModalEditBtn';
import { EditTodoField } from '../../molecules/EditTodoField/EditTodoField';

export const AllTextModal = ({
	text,
	modalOpen,
	setModalOpen,
	completed,
	toggleTodoComplete,
}) => {
	const [completedText, setCompletedText] = useState(completed);
	useEffect(() => {
		if (completed) {
			setCompletedText('Выполнено');
		} else {
			setCompletedText('Не выполнено');
		}
	});

	const [openedEditTodo, setOpenedEditTodo] = useState(false);
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		modal: {
			flex: 1,
			paddingVertical: 20,
			paddingHorizontal: 20,
			backgroundColor: theme.colors.bgApp,
		},

		completedText: {
			marginTop: 3,
			color: theme.colors.second,
			fontSize: theme.text.modalCompleted.fontSize,
			fontFamily: theme.text.modalCompleted.fontFamily,
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
				<Text style={styles.completedText}>{completedText}</Text>
				<EditTodoField openedEditTodo={openedEditTodo}/>
				<Text style={styles.modalText}>{text}</Text>
				<ModalCompleteBtn completed={completed} toggleTodoComplete={toggleTodoComplete} id={id}/>
				<ModalEditBtn setOpenedEditTodo={setOpenedEditTodo}/>
				<ModalCloseBtn setModalOpen={setModalOpen}/>
			</View>
		</Modal>
	);
};