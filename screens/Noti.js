import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { TimePicker } from 'react-native-simple-time-picker';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default class Noti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setSelectedHours: '',
      setSelectedMinutes: '',
    };
  }

  schedulePushNotification = async (hour, minute) => {
    const hours = Number(hour.hours);
    const minutes = Number(hour.minutes);
    console.log(hours, minutes);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hey!! it's time",
        body: 'Have a drink and suprise your liver 💧 ',
        data: { data: '💧💧💧' },
      },
      trigger: {
        hour: hours,
        minute: minutes,
        repeats: true,
      },
    });

    Alert.alert('You will be reminded by ' + hours + ':' + minutes);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>We will remind you, Please tell us the time 🕑</Text>

        <TimePicker
          onChange={(hours, minutes) => {
            this.setState({
              setSelectedHours: hours,
              setSelectedMinutes: minutes,
            });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.schedulePushNotification(
              this.state.setSelectedHours,
              this.state.setSelectedMinutes
            );
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
