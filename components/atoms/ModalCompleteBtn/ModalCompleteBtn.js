import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import { AntDesign } from '@expo/vector-icons';

export const ModalCompleteBtn = ({ completed, toggleTodoComplete, id }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		completedBtn: {
			position: 'absolute',
			top: 3,
			right: 115,
		},
	});

	return (
		<TouchableOpacity
			style={styles.completedBtn}
			onPress={() => toggleTodoComplete({ id })}
			activeOpacity={0.6}
		>
			<AntDesign
				name="flag"
				size={30}
				color={completed ? theme.colors.second : theme.colors.main}
			/>
		</TouchableOpacity>
	);
};
