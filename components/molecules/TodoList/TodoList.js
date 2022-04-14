import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Todo } from '../Todo/Todo';
import { useSelector } from 'react-redux';

export const TodoList = () => {
	const todos = useSelector((state) => state.todos.todos);

	return (
		<View>
			<FlatList
				data={todos}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Todo
						todo={item}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});