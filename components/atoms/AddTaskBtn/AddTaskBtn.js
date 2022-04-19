import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import { Entypo } from '@expo/vector-icons';

export const AddTaskBtn = ({ handleSubmit }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		button: {
			alignSelf: 'stretch',
			marginLeft: 10,
			minWidth: 20,
			paddingHorizontal: 20,
			paddingVertical: 10,
			backgroundColor: theme.colors.main,
			borderRadius: 3,
			justifyContent: 'center',
			alignItems: 'center',
		},

		text: {
			color: theme.colors.bgApp,
			fontSize: theme.text.btnText.fontSize,
			fontFamily: theme.text.btnText.fontFamily,
		},
	});

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={handleSubmit}
			activeOpacity={0.6}
		>
			<Entypo name="add-to-list" size={24} color={theme.colors.bgApp} />
		</TouchableOpacity>
	);
};
