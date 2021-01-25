import React from 'react';
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
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <Animated.View style={[styles.buttonWrap, buttonWrapStyle]}>
          {!success && (
            <Animated.View
              style={[
                StyleSheet.absoluteFill,
                styles.inputWrap,
                inputWrapStyle,
              ]}>
              <TextInput
                autoFocus
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor="rgba(255,123,115, 0.8)"
                style={styles.textInput}
              />
              <TouchableOpacity
                style={[styles.sendButton, sendButtonStyle]}
                onPress={this.handleSend}>
                <Text style={styles.sendText}>Send</Text>
              </TouchableOpacity>
            </Animated.View>
          )}

          {!success && (
            <Animated.View style={notifyTextStyle}>
              <Text style={styles.notifyText}>Notify Me</Text>
            </Animated.View>
          )}
          {success && (
            <Animated.View style={thankyouTextStyle}>
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
