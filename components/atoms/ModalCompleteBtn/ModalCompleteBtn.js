import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import { MaterialIcons } from '@expo/vector-icons';

export const ModalCompleteBtn = ({ completed, toggleTodoComplete, id }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		completedBtn: {
			position: 'absolute',
			top: 19,
			right: 135,
		},
	});

	return (
		<TouchableOpacity
			style={ styles.completedBtn}
			onPress={() => toggleTodoComplete({ id })}
			activeOpacity={0.6}
		>
			<MaterialIcons name="done" size={38} color={completed ? theme.colors.second : theme.colors.main} />
		</TouchableOpacity>
	);
};
