import React, { useContext } from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
} from 'react-native';
import { ThemeContext } from '../../../theme';
import { MaterialIcons } from '@expo/vector-icons';

export const AddTaskBtn = ({ handleSubmit }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		shadow: {
			alignSelf: 'stretch',
			marginLeft: 10,
			marginBottom: 10,
			shadowColor:  '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowRadius: 2.62,
			shadowOpacity: 0.23,
			elevation: 4,
		},

		button: {
			minWidth: 20,
			height: 56,
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
		}
	});
    
	return (
		<View style={styles.shadow}>
			<TouchableOpacity
				style={styles.button}
				onPress={handleSubmit}
                activeOpacity={0.6}
			>
				{/* <Text style={styles.text}>Add</Text> */}
				<MaterialIcons name="add-task" size={24} color={theme.colors.bgApp} />
			</TouchableOpacity>
		</View>
	);
};
