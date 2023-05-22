import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

function TaskListApp() {
const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState('');

// Fonction pour ajouter une nouvelle tâche à la liste
const addTask = () => {
if (newTask.trim() !== '') {
setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
setNewTask('');
}
};

// Fonction pour basculer l'état de complétion d'une tâche
const toggleTaskCompletion = (taskId) => {
const updatedTasks = tasks.map((task) => {
if (task.id === taskId) {
return { ...task, completed: !task.completed };
}
return task;
});
setTasks(updatedTasks);
};

// Fonction pour supprimer une tâche de la liste
const deleteTask = (taskId) => {
const updatedTasks = tasks.filter((task) => task.id !== taskId);
setTasks(updatedTasks);
};

// Fonction pour rendre chaque élément de la liste de tâches
const renderItem = ({ item }) => (
<View style={styles.taskItem}>
<TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
<Text style={item.completed ? styles.completedTaskTitle : styles.taskTitle}>{item.title}</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => deleteTask(item.id)}>
<Text style={styles.deleteButton}>Supprimer</Text>
</TouchableOpacity>
</View>
);

return (
<View style={styles.container}>
<Text style={styles.title}>Liste de tâches</Text>
<View style={styles.inputContainer}>
<TextInput
style={styles.input}
placeholder="Ajouter une tâche"
value={newTask}
onChangeText={(text) => setNewTask(text)}
/>
<TouchableOpacity style={styles.addButton} onPress={addTask}>
<Text style={styles.addButtonText}>Ajouter</Text>
</TouchableOpacity>
</View>
<FlatList
data={tasks}
renderItem={renderItem}
keyExtractor={(item) => item.id.toString()}
contentContainerStyle={styles.taskList}
/>
</View>
);
}

// Styles pour le composant TaskListApp
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
},
inputContainer: {
flexDirection: 'row',
marginBottom: 20,
},
input: {
flex: 1,
height: 40,
borderWidth: 1,
borderColor: 'gray',
borderRadius:5,
marginRight: 10,
paddingHorizontal: 10,
},
addButton: {
backgroundColor: 'blue',
paddingHorizontal: 15,
borderRadius: 5,
alignItems: 'center',
justifyContent: 'center',
},
addButtonText: {
color: 'white',
fontWeight: 'bold',
},
taskList: {
flexGrow: 1,
},
taskItem: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
marginBottom: 10,
},
taskTitle: {
fontSize: 18,
},
completedTaskTitle: {
fontSize: 18,
textDecorationLine: 'line-through',
color: 'gray',
},
deleteButton: {
color: 'red',
fontWeight: 'bold',
},
});

export default TaskListApp;