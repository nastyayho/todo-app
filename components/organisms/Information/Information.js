import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../theme';


export const Information = () => {
    const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		information: {
			flex: 1,
			backgroundColor: theme.colors.bgApp,
		},
	});

    return (
        <View style={styles.information}>
        </View>
    );
};