import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Todo } from '../Todo/Todo';
import { useSelector } from 'react-redux';

export const TodoList = () => {
	const todos = useSelector((state) => state.todos.todos);

	const styles = StyleSheet.create({
		list: {
			marginTop: 10,
		},
	});

	return (
		<View>
			<FlatList
			   	inverted
				style={styles.list}
				data={todos}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <Todo todo={item} />}
			/>
		</View>
	);
};
