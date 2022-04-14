import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavTitle } from '../../atoms/NavTitle/NavTitle';

export const Navbar = ({ title }) => {
		
	return (
		<View style={styles.navbar}>
			<NavTitle title={title}/>
		</View>
	);
};

const styles = StyleSheet.create({
	navbar: {
		height: 90,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: 'transparent',
		paddingVertical: 14,

	},
});
