import React from "react";
import { TouchableOpacity, Text, TextInput, View, StyleSheet } from "react-native";

const App = () => {
  const [message, setMessage] = React.useState();

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
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