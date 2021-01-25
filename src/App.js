import React from 'react';
import { useState,useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const[success,setSuccess]=useState(false)
  const animate=useRef(new Animated.Value(0)).current

  const handlePress=()=>{

  }
  const handleSend=()=>{

  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={[styles.buttonWrap]}>
          {!success && (
            <Animated.View
              style={[
                StyleSheet.absoluteFill,
                styles.inputWrap,
              ]}>
              <TextInput
                autoFocus
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor="rgba(255,123,115, 0.8)"
                style={styles.textInput}
              />
              <TouchableOpacity
                style={[styles.sendButton]}
                onPress={handleSend}>
                <Text style={styles.sendText}>Send</Text>
              </TouchableOpacity>
            </Animated.View>
          )}

          {!success && (
            <Animated.View >
              <Text style={styles.notifyText}>Notify Me</Text>
            </Animated.View>
          )}
          {success && (
            <Animated.View >
              <Text style={styles.notifyText}>Thank You</Text>
            </Animated.View>
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF7B73"
  },
  buttonWrap: {
    backgroundColor: "#FFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  notifyText: {
    color: "#FF7B73",
    fontWeight: "bold"
  },
  inputWrap: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  textInput: {
    flex: 4,
  },
  sendButton: {
    backgroundColor: "#FF7B73",
    flex: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  sendText: {
    color: "#FFF"
  }
});
