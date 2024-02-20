/**
 * My To Do List App
 *
 * @format
 */
'use client';
import { useState } from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';


export default function App() {

const [tasks, setTasks] = useState([
    'Do laundry' ,
    'Walk the dog' ,
    'Go to the gym' 
]);
 
  return (
    <SafeAreaView>
      <ToDoList  task = {tasks}/>
      <ToDoForm />
    </SafeAreaView>
  );
}


