import React, { useContext } from 'react';
import { StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../../theme';

export const NavBtn = ({ loadScene }) => {
	const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		// navBtn: {
		// 	position: 'absolute',
		// 	top: '52%',
		// 	right: 20,
		// },

        navBtn: {
			// position: 'absolute',
			// top: 0,
			// right: 20,
            // marginLeft: 20,
            // paddingHorizontal: 20,
            // paddingVertical: 5,
            alignItems: 'center',
            justifyContent: 'center',
		},

        info: {
            paddingHorizontal: 20,
            paddingVertical: 5,
            backgroundColor: theme.colors.second,
        },
	});

	return (
		<TouchableOpacity style={styles.navBtn}>
			<SimpleLineIcons
				name="info"
				size={16}
				color={theme.colors.main}
				style={styles.info}
				// onPress={() => {
				// 	Alert.alert(
				// 		'Подсказка',
				// 		'\n1. Прочитать дело целиком: быстрое касание; \n \n2. Пометить дело как выполненное: долгое касание; \n \n3. Удалить дело: свайп влево или вправо',
				// 		[{ text: 'Понятно' }]
				// 	);
				// }}
                onPress={loadScene}
			/>
		</TouchableOpacity>
	);
};
