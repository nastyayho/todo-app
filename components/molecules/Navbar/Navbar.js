import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavTitle } from '../../atoms/NavTitle/NavTitle';

export const Navbar = ({ title }) => {
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
	});

	return (
		<View style={styles.navBar}>
			<NavTitle title={title} />
			<Image
				source={require('../../../assets/images/cat.png')}
				style={styles.image}
				transparent
			/>
		</View>
	);
};
