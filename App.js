import React, { useState } from "react";
import ListItem from "./app/components/listItem";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [text, setOutputText] = useState("");
  const [data, setData] = useState([]);
  const deleteItem = id => {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data.splice(i, 1);
      }
    }
    setData([...data]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>To Do List</Text>
      <View style={styles.buttonContainer}>
        <TextInput
          placeholder="Item"
          style={styles.inputText}
          onChangeText={text => {
            setOutputText(text);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setData([...data, { id: data.length, value: text }]);
          }}
        >
          <Text> Add Item</Text>
        </TouchableOpacity>
      </View>
      <ListItem list={data} delete={deleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30
  },
  inputText: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1
  },
  button: {
    backgroundColor: "#aaa",
    alignItems: "center",
    padding: 10,
    marginLeft: 10
  },
  mainHeading: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 30,
    textShadowColor: "rgb(88, 89, 88)",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 4,
    color: "blue",
    marginBottom: 50
  }
});
