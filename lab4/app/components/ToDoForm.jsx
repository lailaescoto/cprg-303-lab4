import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = React.useState('');

  const handleAdd = () => {
    addTask(taskText);
    setTaskText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
});

export default ToDoForm;
