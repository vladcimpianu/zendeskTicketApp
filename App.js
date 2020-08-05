import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import ZendeskSupport from '@synapsestudios/react-native-zendesk-support';

const App = () => {
  let sendTicket = () => {
    alert('Ticket created');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Zendesk Ticket Input</Text>
      <View style={styles.textAreaContainer}>
        <TextInput
          className="name-input"
          style={styles.input}
          placeholder="Your name.."
          placeholderTextColor="grey"
        />
        <TextInput
          className="ticket-input"
          style={styles.input}
          placeholder="Your ticket text.."
          placeholderTextColor="grey"
          multiline={true}
          numberOfLines={5}
        />
        <Button title="Submit" onPress={sendTicket} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    marginTop: 100,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
    margin: 30,
  },
  textAreaContainer: {
    borderColor: 'darkslateblue',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    width: 250,
    maxWidth: 250,
  },
  input: {
    textAlign: 'center',
    padding: 5,
    margin: 20,
    minWidth: 150,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
});

export default App;
