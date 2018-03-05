import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux'
import { myActions } from '../actions/';
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.lauch();
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.loading != this.nextProps.loading) {
      this.setState(
        this.state.loading=nextProps.loading
      )
    }
  }

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
        <View style={styles.container}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => Actions.Create_profile()}>
            <Image source={require('../Images/start.png')} style={{ width: width * 1, height: height * 1 }} resizeMode="cover" />
          </TouchableOpacity>
        </View>
      );
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

export default Connect(mapStateToProps, mapDispatchToProps)(Start);
const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },

});
