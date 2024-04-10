import React, { useEffect } from "react";
import TASK from'../data/tasks.json';




import {
    TextInput,
    StyleSheet, 
    Button,
    View,
} from 'react-native';

function ToDoForm({addTask }) {

  //const {addTask} = props;
  
 // const = addTask = props.addTask;

  const {input, setInput} = React.useState('');
  const {tasks, setTasks} = React.useState('');

  const handleChangeText = text => {
   setInput(text);

  };
  const handlePress = () => {
    addTask(input);

  };

  const handleAddTask = (task) => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setTasks([...tasks.slice(0, randomIndex), task, ...tasks.slice(randomIndex)]);
  };



  useEffect(() => {
    const fetchTasks = async () => {
      try{
        setTasks(tasks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <>
    <View style={styles.form}>
        <TextInput

          style={styles.input}
          placeholder="Add a new task..."
          onClickText={(handleChangeText)}
          value={input}
        />
        <Button title="Add" onPress={handlePress}/>
        <Button title="Add Random Task" onPress={handleAddTask}/>
      </View>
    </>
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
  });

export default ToDoForm;