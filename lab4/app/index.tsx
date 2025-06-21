import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    if (taskText.trim() === '') return;
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView style={{ padding: 16 }}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}


export default App;