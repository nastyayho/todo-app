import React, { useContext } from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';
import { ThemeContext } from '../../../theme';
import { AntDesign } from '@expo/vector-icons'; 

export const AllTextModal = (text, modalOpened) => {
    const theme = useContext(ThemeContext);

	const styles = StyleSheet.create({
		modal: {
			flex: 1,
            // marginTop: 100,
			paddingVertical: 20,
            paddingHorizontal: 20,
			backgroundColor: theme.colors.bgApp,
		},

        modalText: {
            marginTop: 50,
			color: theme.colors.main,
			fontSize: theme.text.modal.fontSize,
			fontFamily: theme.text.modal.fontFamily,
		},

        close: {
            position: 'absolute',
            top: 20,
            right: 20,
        },
	});

	return (
		<Modal visible={modalOpened}>
            <View style={styles.modal}>
                <Text style={styles.modalText}>{ text }</Text>
                <AntDesign name="close" size={40} color={theme.colors.main} style={styles.close}/>
            </View>	
        </Modal>
	);
};
