import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.taskItem}>
        <Text style={styles.getText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  getText: {
    color: "#fff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
