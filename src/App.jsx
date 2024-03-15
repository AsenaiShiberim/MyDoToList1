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
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';


export default function App() {



const [tasks, setTasks] = useState([
    'Do laundry' ,
    'Walk the dog' ,
    'Go to the gym' 
]);


const handleAddTask = (task) => {
    setTasks([...tasks, task]);
};
 
  return (
    <SafeAreaView>
      <ToDoList  tasks = {tasks}/>
      <ToDoForm addTask = {handleAddTask}/>
    </SafeAreaView>
  );
}


