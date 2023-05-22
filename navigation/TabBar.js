import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TodoListScreen from '../screens/TodoListScreen';
import EditTaskScreen from '../screens/EditTaskScreen';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
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
  );
}

export default TabBar;








/*import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import AccueilScreen from '../screens/AccueilScreen';
import ListeTachesScreen from '../screens/ListeTachesScreen';

const TabBar = createBottomTabNavigator(
{
Accueil: {
screen: AccueilScreen,
navigationOptions: {
tabBarLabel: 'Accueil',
tabBarIcon: ({ focused }) => (
<Icon name="home" size={20} color={focused ? '#0084e9' : '#111130'} />
),
},
},
ListeTaches: {
screen: ListeTachesScreen,
navigationOptions: {
tabBarLabel: 'Liste de tâches',
tabBarIcon: ({ focused }) => (
<Icon name="tasks" size={20} color={focused ? '#0084e9' : '#111130'} />
),
},
},
},
{
tabBarOptions: {
activeTintColor: '#0084e9',
inactiveTintColor: '#111130',
},
}
);

export default TabBar;
*/






















/*
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
  return (
    <View>
      <Text>Écran d'accueil </Text>
      <Icon name="pencil" size={20} color="black" style={styles.icon} />
    </View>
  );
}

function TaskListScreen() {
  return (
    <View>
      <Text>Liste des tâches</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Accueil"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Tâches"
          component={TaskListScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="tasks" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  
  tasksContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  },
  icon: {
 marginLeft: 10,
  },
  image: {
 width: 200,
  height: 200,
 resizeMode: 'contain',
  },
  });

export default TabBar;

*/
