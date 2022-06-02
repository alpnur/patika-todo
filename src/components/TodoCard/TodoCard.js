import React, {useState} from 'react';
import {Text, TextInput, View, Button, TouchableOpacity} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          placeholder="Yapılacak..."
          placeholderTextColor="#7e8183"
          style={styles.todo_input}
          value={props.todo}
          onChangeText={props.setTodo}></TextInput>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.save_button} onPress={props.addNewTask}>
          <Text style={styles.save_button_text}> Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToDoCard;
