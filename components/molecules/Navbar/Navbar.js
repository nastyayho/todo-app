import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavTitle } from '../../atoms/NavTitle/NavTitle';

export const Navbar = ({ title }) => {

	const styles = StyleSheet.create({
		navBar: {
			height: 90,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'transparent',
			paddingVertical: 14,
		},

		image: {
			width: 40,
			height: 40,
			backgroundColor: 'transparent',
		}
	});
		
	return (
		<View style={styles.navBar}>
			<NavTitle title={title}/>
			<Image 
				source={require('../../../assets/images/icon.png')}
				style={styles.image} 
			/>
		</View>
	);
};
