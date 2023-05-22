import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Task from '../components/Task';

const TodoListScreen = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Task 1' },
    { id: '2', title: 'Task 2' },
    { id: '3', title: 'Task 3' },
  ]);

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Task title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default TodoListScreen;
