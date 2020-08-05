import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import ZendeskSupport from 'react-native-zendesk-support';

const config = {
  appId: 'c50167be8565fff4dcded1959f7c2a8195d01b968ff7caa3',
  zendeskUrl: 'https://vlatech.zendesk.com',
  clientId: 'mobile_sdk_client_207306d3c8c5c6de37b0',
};
ZendeskSupport.initialize(config);

const identity = {
  customerEmail: 'foo@bar.com',
  customerName: 'John Doe',
};
ZendeskSupport.setupIdentity(identity);

const customFields = {
  customFieldId: 'Custom Field Value',
};
ZendeskSupport.callSupport(customFields);

// Zendesk.INSTANCE.init(
//   context,
//   'https://vlatech.zendesk.com',
//   'c50167be8565fff4dcded1959f7c2a8195d01b968ff7caa3',
//   'mobile_sdk_client_207306d3c8c5c6de37b0',
// );
// Support.INSTANCE.init(Zendesk.INSTANCE);

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Zendesk Ticket Input</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
});

export default App;
