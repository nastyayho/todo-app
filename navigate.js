import React from 'react';
import { MainScreen } from './components/organisms/MainScreen/MainScreen';
import { Information } from './components/organisms/Information/Information';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SimpleLineIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function Navigate() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="MainScreen"
					component={MainScreen}
					options={{
						title: 'Главный экран',
						// headerStyle: { backgroundColor: 'papayawhip' },
						headerShown: false,
						// tabBarLabel: 'Главный экран',
						// tabBarIcon: ({ }) => (
						// 	<SimpleLineIcons
                        //         name="info"
                        //         size={ 24 }
                        //         color={ '#422413' }
                        //         // style={styles.info}
			            //     />
						// ),
					}}
				/>
				<Stack.Screen
					name="Information"
					component={Information}
					options={{ title: 'Информация' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
