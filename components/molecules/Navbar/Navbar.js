import React, { useContext }  from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { NavTitle } from '../../atoms/NavTitle/NavTitle';
import { SimpleLineIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../../theme';

export const Navbar = ({ title }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		navBar: {
			// position: 'realtive',
			height: 100,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'transparent',
			paddingTop: 16,
		},

		image: {
			position: 'absolute',
			top: '48%',
			left: '50%',
			marginLeft: 50,
			width: 30,
			height: 30,
			backgroundColor: 'transparent',
		},

		info: {
			position: 'absolute',
			top: '53%',
			right: 20,
		},
	});

	return (
		<View style={styles.navBar}>
			<NavTitle title={title} />
			<Image
				source={require('../../../assets/images/cat.png')}
				style={styles.image}
				transparent
			/>
			<SimpleLineIcons
				name="info"
				size={24}
				color={theme.colors.main}
				style={styles.info}
				onPress={() => {Alert.alert(
					'Подсказка',
					'\n1. Прочитать дело целиком: быстрое касание; \n \n2. Пометить дело как выполненное: долгое касание; \n \n3. Удалить дело: свайп влево или вправо',
					[{ text: 'Понятно' }]
				)}}
			/>
		</View>
	);
};
