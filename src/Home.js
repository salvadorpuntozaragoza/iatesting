import React from 'react';
import { Button, Pressable, Text, TouchableHighlight, View } from 'react-native';
import { TrackableButton } from './TrackableButton';

const Home = ({ navigation }) => {

  const onPress = (type) => {
    console.warn("Pressed");
    navigation.navigate("Camera", { type });
  }

  return (
    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
      <TrackableButton 
        title="Text recognition"
        buttonStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', width: '70%', height: '10%', borderRadius: 10, marginBottom: 5 }}
        logEventName="Opened_camera"
        logEventData={{name: "Test1", activity: 'Opened camera'}}
        feedback
        onPress={() => onPress("Text")}
      />
      <TrackableButton 
        title="Object recognition"
        buttonStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', width: '70%', height: '10%', borderRadius: 10, marginBottom: 5 }}
        logEventName="Opened_camera"
        logEventData={{name: "Test1", activity: 'Opened camera'}}
        feedback
        onPress={() => onPress("Object")}
      />
      <TrackableButton 
        title="Send user event"
        buttonStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', width: '70%', height: '10%', borderRadius: 10, marginBottom: 5 }}
        logEventName="Test_event"
        logEventData={{name: "Test2", activity: 'Pressed test event'}}
        feedback
        onPress={() => console.log("Event sent")}
      />
      
    </View>
  )
}

export { Home };
