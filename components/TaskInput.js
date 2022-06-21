import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

function TaskInput(props) {
  const [enteredTaskText, setEnteredTastText] = useState("");

  function taskInputHandler(enteredText) {
    setEnteredTastText(enteredText);
  }

  function addTaskHandler() {
    props.onAddTask(enteredTaskText);
    setEnteredTastText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/logo.jpg")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="task"
          onChangeText={taskInputHandler}
          value={enteredTaskText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Task" onPress={addTaskHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
