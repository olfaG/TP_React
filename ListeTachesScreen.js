import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListeTachesScreen = () => {
 const handleSupprimerTache = () => {   // Fonction pour supprimer une tâche
   alert('Cette tâche a été supprimée');
 };

 return (
<View style={styles.container}>
<Text style={styles.title}>Liste de tâches</Text>
<TouchableOpacity style={styles.button} onPress={handleSupprimerTache}>
<Text style={styles.buttonText}>Supprimer une tâche</Text>
</TouchableOpacity>
</View>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
 },
 title: {
   fontSize: 24,
   fontWeight: 'bold',
   marginBottom: 16,
 },
 button: {
   backgroundColor: '#0084e9',
   paddingHorizontal: 16,
   paddingVertical: 8,
   borderRadius: 8,
 },
 buttonText: {
   color: '#fff',
   fontSize: 18,
 },
});

export default ListeTachesScreen;

/*const handleSupprimerTache = () => {
 // Logique de suppression de la tâche ici
 // Affichage d'une boîte de dialogue ou d'une page avec le texte "Cette tâche a été supprimée"
};

return (
<View style={styles.container}>
<Text>Liste de tâches</Text>
<TouchableOpacity onPress={handleSupprimerTache}>
<Text>Supprimer une tâche</Text>
</TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
 },
});

export default ListeTachesScreen;*/