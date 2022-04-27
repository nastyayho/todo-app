import React, { useContext } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { NavTitle } from '../../atoms/NavTitle/NavTitle';
import { SimpleLineIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../../theme';

export const Navbar = ({ title }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		navBar: {
			height: 100,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'transparent',
			paddingTop: 16,
		},

		info: {
			position: 'absolute',
			top: '52%',
			right: 20,
		},
	});

	return (
		<View style={styles.navBar}>
			<NavTitle title={title} />
			<SimpleLineIcons
				name="info"
				size={24}
				color={theme.colors.main}
				style={styles.info}
				onPress={() => {
					Alert.alert(
						'Подсказка',
						'\n1. Прочитать дело целиком: быстрое касание; \n \n2. Пометить дело как выполненное: долгое касание; \n \n3. Удалить дело: свайп влево или вправо',
						[{ text: 'Понятно' }]
					);
				}}
			/>
		</View>
	);
};
