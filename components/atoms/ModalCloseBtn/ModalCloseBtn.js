import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import { AntDesign } from '@expo/vector-icons';

export const ModalCloseBtn = ({ setModalOpen }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		close: {
			position: 'absolute',
			top: 20,
			right: 20,
		},
	});

	return (
		<TouchableOpacity
			onPress={() => setModalOpen(false)}
			style={styles.close}
			activeOpacity={0.6}
		>
			<AntDesign name="close" size={36} color={theme.colors.main} />
		</TouchableOpacity>
	);
};
