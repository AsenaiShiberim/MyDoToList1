
import React from 'react';
import {
    Button,
  SafeAreaView  
} from 'react-native';

import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({navigation}) => {

   



    const [tasks, setTasks] = useState([
        'Do laundry' ,
        'Walk the dog' ,
        'Go to the gym' 
    ]);
    
    
    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };


    return (
        <>
        <MainLayout>
            <SafeAreaView>
                <ToDoList  tasks = {tasks}/>
                <ToDoForm addTask = {handleAddTask}/>
                <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
                />
            </SafeAreaView>
        </MainLayout>
        </>
    );
    }

    export default HomeScreen;