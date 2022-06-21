import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseTask, setCourseTask] = useState([]);

  function addInputHandler(enteredTaskText) {
    setCourseTask((currentCourseTask) => [
      ...currentCourseTask,
      // si on genere la clé
      // { text: enteredTaskText, key: Math.random().toString() },

      // si on utilise une api en utilisant l'element id
      { text: enteredTaskText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  function deleteTaskHandler(id) {
    setCourseTask((currentCourseTask) => {
      return currentCourseTask.filter((task) => task.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Task"
        color={"#5e0acc"}
        onPress={startAddGoalHandler}
      />
      <TaskInput
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
        onAddTask={addInputHandler}
      />
      <View style={styles.taskContainer}>
        <FlatList
          data={courseTask}
          renderItem={(itemData) => {
            return (
              <TaskItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteTaskHandler}
              />
            );
          }}
          // si on utilise une api en utilisant l'element id
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
  taskContainer: {
    flex: 5,
  },
});
