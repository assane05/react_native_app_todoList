import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [enteredTaskText, setEnteredTastText] = useState('');
  const [courseTask, setCourseTask] = useState([]);

  function taskInputHandler(enteredText) {
    setEnteredTastText(enteredText);
  }
  function addInputHandler() {
    setCourseTask((currentCourseTask) =>[
      ...currentCourseTask, enteredTaskText,
    ]);
  }
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput} 
        placeholder='task' 
        onChangeText={taskInputHandler}
      />
      <Button  
        title='Add Task' 
        onPress={addInputHandler}
      />
     </View>
     <View style={styles.taskContainer}>
      {courseTask.map((task) => <Text key={task}>{task}</Text>)}
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  taskContainer: {
    flex: 4,
  }
});
