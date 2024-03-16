/**
 * My To Do List App
 *
 * @format
 */
import React from 'react';
import { useState } from 'react';
;

import {
  SafeAreaView  
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';

export default function App() {
  const Stack = createNativeStackNavigator();



const [tasks, setTasks] = useState([
    'Do laundry' ,
    'Walk the dog' ,
    'Go to the gym' 
]);


const handleAddTask = (task) => {
    setTasks([...tasks, task]);
};
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});


