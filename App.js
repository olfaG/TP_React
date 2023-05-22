import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TodoListScreen from './screens/TodoListScreen';
import EditTaskScreen from './screens/EditTaskScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'TodoList') {
              iconName = 'ios-list';
            } else if (route.name === 'EditTask') {
              iconName = 'ios-create';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="TodoList" component={TodoListScreen} />
        <Tab.Screen name="EditTask" component={EditTaskScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




/*import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import TabBar from './navigation/TabBar';


const App = () => {

  return (

    <NavigationContainer>

      <TabBar />

    </NavigationContainer>

  );

};


export default App;

*/

/*import React from 'react';
import TaskListApp from './TaskListApp';
import TabBar from './navigation/TabBar';
import { Image } from 'react-native';



<Image source={require('.assets/home.jpg')} style={styles.image} />



export default function App() {
  return (
    <>
      <TaskListApp />
      <TabBar />
    </>
  );
}
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import TaskListApp from './TaskListApp';
import TabBar from './navigation/TabBar';

export default function App() {
  return (
    <>
      <Image source={require('./assets/home.jpg')} style={styles.image} />
      <TaskListApp />
      <TabBar />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    //  les styles souhaités pour l'image
    width: 200,
    height: 200,
  },
});











*/
/*

   // Fonction pour supprimer une tâche
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

export default ListeTachesScreen;*/
