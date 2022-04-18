import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const RemoveTodoBtn = ({ id, removeTodo }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		button: {
			marginLeft: 10,
			paddingVertical: 5,
			paddingHorizontal: 5,
			backgroundColor: 'transparent',
			// borderStyle: 'solid',
			// borderWidth: 1,
			// borderColor: theme.colors.bgTodo,
			// borderRadius: 3,
			fontSize: 16,
			justifyContent: 'center',
			alignItems: 'center',
		},

		// buttonText: {
		// 	color: theme.colors.bgTodo,
		// },
	});

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => removeTodo({ id })}
		>
			<MaterialCommunityIcons name="delete" size={20} color={theme.colors.bgTodo} />
			{/* <Text style={styles.buttonText}>&times;</Text> */}
		</TouchableOpacity>
	);
};
