import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import { Feather } from '@expo/vector-icons';

export const ModalEditBtn = ({ setOpenedEditTodo }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		edit: {
			position: 'absolute',
			top: 23,
			right: 80,
		},
	});

	return (
		<TouchableOpacity
			style={styles.edit}
			onPress={() => setOpenedEditTodo(true)}
			activeOpacity={0.6}
		>
			<Feather name="edit" size={28} color={theme.colors.main} />
		</TouchableOpacity>
	);
};
