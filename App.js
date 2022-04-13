import React from "react";
import { TouchableOpacity, Text, TextInput, View, StyleSheet } from "react-native";
import {RadioButton} from 'react-native-paper'

const App = () => {
  const [message, setMessage] = React.useState();
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity 
        style={{marginTop: 10, height: 200, width: 200, backgroundColor: 'yellow', allignSelf:'center'}}
        onPress={() => {
          setTimeout(() => {
            setMessage("Hello Tester");
          }, Math.floor(Math.random() * 200));
        }}>
        <Text>
          Say Hello
        </Text>
      </TouchableOpacity>
      {message && (
        <Text style={styles.messageText} testID="printed-message">
          {message}
        </Text>
      )}
      <RadioButton
        testID="first"
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
        color="red"
      />
      <RadioButton
        testID="second"
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messageText: {
    fontFamily: "Arial",
    fontSize: 38,
    textAlign: "center",
    marginTop: 10
  }
});

export default App;