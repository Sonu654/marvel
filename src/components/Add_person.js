import React, { Component } from 'react';
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class Add_person extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.13, backgroundColor: 'rgb(68, 35, 124)', flexDirection: 'row' }}>
          <View style={{ flex: 0.8 }}>
            <Text style={{ fontFamily: "Verdana", fontSize: 22, textAlign: 'center', color: 'white', padding: 30 }}>Add a Person</Text>
          </View>
          <View style={{ flex: 0.2 }}>
            <Icon name='times' style={{ color: 'white', fontSize: 20, padding: 28, marginTop: 3 }} onPress={() => Actions.Create_profile()} />
          </View>
        </View>

        <View style={{ flex: 0.1, backgroundColor: 'white', flexDirection: 'row', marginTop: 5 }}>
          <View style={{ flex: 0.7 }}>
            <TextInput style={{ textAlign: 'left', padding: 20, fontSize: 20, color: '#acacac', fontStyle: 'italic', marginLeft: 25 }} placeholder="Search for a person" underlineColorAndroid="transparent" />
          </View>
          <View style={{ flex: 0.3 }}>
            <Icon name='search' style={{ color: '#282828', fontSize: 20, padding: 20, marginTop: 3, marginLeft: 30 }} />
          </View>
        </View>

        <View style={{ flex: 0.65, flexDirection: 'column' }}>

          <View style={{ flex: 0.12, backgroundColor: '#fbf1f1' }}></View>

          <View style={{ flex: 0.35, flexDirection: 'row', backgroundColor: 'white' }}>
            <View style={{ flex: 0.12, backgroundColor: '#fbf1f1' }}></View>
            <View style={{ flex: 0.76, flexDirection: 'column' }}>
              <View style={{ flex: 0.5, padding: 15 }}>
                <Icon name='search' style={{ color: '#d9d8d8', fontSize: 50, textAlign: 'center' }} />
              </View>
              <View style={{ flex: 0.5 }}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#acacac' }}> Search for</Text>
                <Text style={{ textAlign: 'center', fontSize: 15, color: '#acacac' }}>someone on Roomr</Text>
              </View>
            </View>
            <View style={{ flex: 0.12, backgroundColor: '#fbf1f1' }}></View>
          </View>

          <View style={{ flex: 0.16, backgroundColor: '#fbf1f1' }}>
            <Text style={{ textAlign: 'center', fontSize: 22, color: '#acacac', padding: 20 }}>or</Text>
          </View>

          <View style={{ flex: 0.35, flexDirection: 'row', backgroundColor: 'white' }}>
            <View style={{ flex: 0.12, backgroundColor: '#fbf1f1' }}></View>
            <View style={{ flex: 0.76, flexDirection: 'column' }}>
              <View style={{ flex: 0.5, padding: 20, marginTop: 10 }}>
                <Icon name='user-plus' style={{ color: '#d9d8d8', fontSize: 50, textAlign: 'center' }} onPress={() => Actions.Add_profile()} />
              </View>
              <View style={{ flex: 0.5 }}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#acacac' }}>Add a new person</Text>
              </View>
            </View>
            <View style={{ flex: 0.12, backgroundColor: '#fbf1f1' }}></View>
          </View>

          <View style={{ flex: 0.02, backgroundColor: '#fbf1f1' }}></View>

        </View>
        <View style={{ flex: 0.12, flexDirection: 'row' }}>
          <View style={{ flex: 0.2 }}></View>
          <View style={{ flex: 0.55 }}></View>
          <View style={{ flex: 0.25 }}>
            <Icon name='circle' style={{ color: 'rgb(68, 35, 124)', fontSize: 72, textAlign: 'center', position: 'relative' }} onPress={() => Actions.Add_profile()} />
            <Icon name='plus' style={{ color: 'white', fontSize: 26, textAlign: 'center', position: 'absolute', marginLeft: width * 0.1, marginTop: 23 }}  />
          </View>
        </View>

      </View>
    );
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}

mapStateToProps = (state, props) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add_person);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fbf1f1',
  },

});
