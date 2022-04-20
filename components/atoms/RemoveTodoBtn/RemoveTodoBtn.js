import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
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
			fontSize: 16,
			justifyContent: 'center',
			alignItems: 'center',
		},
	});

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => removeTodo({ id })}
		>
			<MaterialCommunityIcons
				name="delete"
				size={20}
				color={theme.colors.second}
			/>
		</TouchableOpacity>
	);
};
