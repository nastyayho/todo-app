import React from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
} from 'react-native';

export const AddTaskBtn = ({ handleSubmit }) => {
    
	return (
		<View style={styles.shadow}>
			<TouchableOpacity
				style={styles.button}
				onPress={handleSubmit}
                activeOpacity={0.6}
			>
				<Text style={styles.buttonText}>Add</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	shadow: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginBottom: 10,
        // shadowColor: '#000000',
		// shadowOffset: {
		// 	width: 0,
		// 	height: 3
		// },
		// shadowRadius: 5,
		// shadowOpacity: 1.0,
		// elevation: 3,
	},

	button: {
        minWidth: 20,
        height: 56,
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: '#010414',
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonText: {
		color: '#fdfcfa',
		fontSize: 16,
	},
});
