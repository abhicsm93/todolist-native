import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, ScrollView, StyleSheet } from "react-native";

class ListItem extends Component {
  render() {
    return (
      <ScrollView style={styles.listContainer}>
        <Text>List Items:</Text>
        <View>
          <ol>
            {this.props.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}{" "}
                  <Ionicons
                    name="ios-trash"
                    size={20}
                    color={"red"}
                    onPress={() => {
                      this.props.delete(item.id);
                    }}
                  />
                </li>
              );
            })}
          </ol>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: "80%"
  },
  textVal: {
    fontSize: 30
  },
  placeImage: {
    height: 200
  }
});

export default ListItem;
