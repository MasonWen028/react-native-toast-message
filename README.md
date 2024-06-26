# react-native-toast-message
react-native-toast-message

A customizable, easy-to-use toast message component for React Native applications. Display toast notifications with various themes and configurations to enhance user experience.

# Features
Customizable Themes: Predefined themes include default, primary, error, warning, and success, all with semi-transparent backgrounds and white text.
Configurable Duration: Set the duration for which the toast message is displayed (default is 2 seconds).
Flexible Positioning: Display toast messages at the top, middle, or bottom of the screen.
Easy Integration: Simple API to show toast messages from anywhere in your app using Toast.show().

# Installation
```sh
npm install react-native-toast-message
```
# Usage
```jsx
Import and include the ToastContainer in your main component:

// App.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Toast, ToastContainer } from 'react-native-toast-message';

const App = () => {
  const handleButtonPress = () => {
    Toast.show({
      type: 'error',
      text: 'This is an error message',
      position: 'top',
      duration: 3000,
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Show Toast" onPress={handleButtonPress} />
      <ToastContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```
Show toast messages from anywhere in your app:

```jsx
Toast.show({
  type: 'success',
  text: 'Operation successful!',
  position: 'bottom',
  duration: 2000,
});
```
# Customization

## Type
Set the type of toast message (default, primary, error, warning, success).
## Text
Customize the message text with the text property.
## Position
Control the vertical position of the toast message (top, middle, bottom).
## Duration
Specify how long the toast message should be displayed (in milliseconds).


Enhance your React Native app with beautiful and customizable toast messages using react-native-toast-message.