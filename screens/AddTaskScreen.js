import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTaskScreen = ({ navigation }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    // Ajouter la logique pour ajouter la nouvelle tâche
    // par exemple, mettre à jour l'état global des tâches ou appeler une API
    console.log('Nouvelle tâche ajoutée :', task);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nouvelle tâche"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Ajouter" onPress={handleAddTask} />
      <Button title="Annuler" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
});

export default AddTaskScreen;
