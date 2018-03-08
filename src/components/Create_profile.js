import React, { Component } from 'react';
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, TouchableOpacity, Platform, Dimensions, ActivityIndicator } from 'react-native'
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Create_profile extends Component {


  componentDidMount() {
    this.props.launch();
  }

  // componentWillReceiveProps = (nextProps) => {

  // }
  render() {
    if (this.props.loading) {
      return (
        <View style={styles.ActivityIndicatorContainer}>
          <ActivityIndicator
            animating={true}
            style={{
              height: 80,
              marginTop: 400
            }}
            size='large'
            color='rgb(68, 35, 124)'
          />
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1, flexDirection: 'column', marginTop: Platform.OS == 'ios' ? 20 : 0, }}>
          <View style={{ flex: 0.13, backgroundColor: 'rgb(68, 35, 124)' }}>
            <Text style={{ fontSize: 23, textAlign: 'center', color: 'white', padding: 25 }}>Create a profile</Text>
          </View>
          <View style={{ flex: 0.03 }}></View>
          <View style={{ flex: 0.74, flexDirection: 'column' }}>
            <View style={{ flex: 0.48, flexDirection: 'row' }}>
              <View style={{ flex: 0.05 }}></View>
              <View style={{ flex: 0.9 }}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => Actions.New_home_housemates()}>
                  <Image source={require('../Images/one.png')} style={{ height: height * 0.34, width: width * 0.9, borderRadius: 5 }} resizeMode="stretch" />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.05 }}></View>
            </View>
            <View style={{ flex: 0.04 }}></View>
            <View style={{ flex: 0.48, flexDirection: 'row' }}>
              <View style={{ flex: 0.05 }}></View>
              <View style={{ flex: 0.9 }}>
                <TouchableOpacity>
                  <Image source={require('../Images/two.png')} style={{ height: height * 0.35, width: width * 0.9, resizeMode: "stretch", borderRadius: 5 }} />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.05 }}></View>
            </View>
          </View>
          <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { Actions.New_home_housemates() }} >
              <Text style={{ fontSize: 20, textAlign: 'center', color: 'gray', padding: 10 }}>Skip & Browse</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
}


mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}

mapStateToProps = (state, props) => {
  return {
    loading: state.launchReducer.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create_profile);
const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
});
