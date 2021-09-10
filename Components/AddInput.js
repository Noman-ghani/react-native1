import React, { useState } from "react";
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native'
// import { AntDesign } from "react-native-vector-icons";

export default function AddInput({submitHandler}) {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.ComponentContainer}>
      <View style={styles.InputContainer}>
        <TextInput style={styles.Input} placeholder="Add Task..." onChangeText={onChangeText}/>
      </View>
      <TouchableOpacity style={styles.SubmitButton} onPress={() => {
          setValue(submitHandler(value));
        }}>
        <Text>Submit </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
  SubmitButton: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    marginBottom: 20,
    borderRadius: 10,
  },
  ComponentContainer: {
    flexDirection: 'row',
  },
  InputContainer : {
    flexDirection: 'row',
    borderRadius: 10,
  },
  Input : {
    fontSize: 20,
    backgroundColor: 'white',
    width: 200,
    marginRight: 20,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    zIndex: 9999,
    position: 'relative',
  }

})
