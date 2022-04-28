import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavTitle } from '../../atoms/NavTitle/NavTitle';
import { NavBtn } from '../../atoms/NavBtn/NavBtn';

export const Navbar = () => {
	const styles = StyleSheet.create({
		navBar: {
			height: 90,
			flexDirection: 'row',
			alignItems: 'flex-end',
			justifyContent: 'center',
			backgroundColor: 'transparent',
			paddingTop: 16,
			paddingBottom: 16,
		},
	});

	return (
		<View style={styles.navBar}>
			<NavTitle />
			{/* <NavBtn /> */}
		</View>
	);
};
