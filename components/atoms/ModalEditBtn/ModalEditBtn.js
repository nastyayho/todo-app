import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import { Feather } from '@expo/vector-icons';

export const ModalEditBtn = ({
	setOpenedEditTodo,
	openedEditTodo,
}) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		edit: {
			position: 'absolute',
			top: 3,
			right: 58,
		},
	});

	return (
		<TouchableOpacity
			style={styles.edit}
			onPress={() =>
				openedEditTodo
					? setOpenedEditTodo(false)
					: setOpenedEditTodo(true)
			}
			activeOpacity={0.6}
		>
			<Feather
				name="edit"
				size={28}
				color={openedEditTodo ? theme.colors.second : theme.colors.main}
			/>
		</TouchableOpacity>
	);
};
