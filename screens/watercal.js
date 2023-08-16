import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default class WaterCal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      empty: 10,
    };
  }

  increment = (val) => {
    console.log('incev', val);

    if (val === 1) {
      this.setState({ empty: 1, count: 1 });
    } else if (val === 2) {
      this.setState({ empty: 2, count: 2 });
    } else if (val === 3) {
      this.setState({ empty: 3, count: 3 });
    } else if (val === 4) {
      this.setState({ empty: 4, count: 4 });
    } else if (val === 5) {
      this.setState({ empty: 5, count: 5 });
    } else if (val >= 6) {
      this.setState({ empty: 5, count: 5 });
      Alert.alert("Well Done!!! you have reached today's limit");
    }
  };

  decrement = (val) => {
    console.log('dec', val);

    if (val <= -1) {
      this.setState({ empty: 10 });
      Alert.alert('Invalid Input');
    } else if (val === 0) {
      this.setState({ empty: 10, count: 0 });
    } else if (val === 1) {
      this.setState({ empty: 1, count: 1 });
    } else if (val === 2) {
      this.setState({ empty: 2, count: 2 });
    } else if (val === 3) {
      this.setState({ empty: 3, count: 3 });
    } else if (val === 4) {
      this.setState({ empty: 4, count: 4 });
    }
  };

  render() {
    console.log(this.state.empty);
    var emptycup = require('../assets/10.gif');
    var cup1 = require('../assets/1.gif');
    var cup2 = require('../assets/2.gif');
    var cup3 = require('../assets/3.gif');
    var cup4 = require('../assets/4.gif');
    var cup5 = require('../assets/5.gif');

    const { empty, count } = this.state;
    return (
      <View style={{ flex: 1, width: 320, height: 320 }}>
        <SafeAreaView style={{ marginTop: 50 }} />
        <ImageBackground style={{ backgroundColor: '#f9f7f9', flex: 1 }}>
          <Text
            style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 25 }}>
            WaterCalculation
          </Text>
          <Image
            source={require('../assets/' + empty + '.gif')}
            style={{ width: 200, height: 250, alignSelf: 'center' }}></Image>
          {console.log(this.state.empty)}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'green' }]}
              onPress={() => this.increment(count + 1)}>
              <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity
              disabled={count <= 0 ? true : false}
              style={styles.button}
              onPress={() => this.decrement(count - 1)}>
              <Text style={styles.textButton}>-</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ alignSelf: 'center' }}>
            You have consumed {count} liter(s) for the day
          </Text>
          <TouchableOpacity style={styles.updateButton}>
            <Text style={{ alignSelf: 'center' }}>Update</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
  },
  button: {
    margin: 20,
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 15,
  },
  updateButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 25,
    backgroundColor: '#c35ec3',
    width: 100,
    height: 50,
    borderRadius: 25,
  },
});