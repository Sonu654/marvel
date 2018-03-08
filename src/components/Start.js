import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image,Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux'
import  * as myActions from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount=()=> {
    this.props.launch();
  }

  componentWillUnmount=()=>{
    console.log('unmounting');
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

export default connect(mapStateToProps, mapDispatchToProps)(Start);
const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  container: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 20 : 0,
    flexDirection: "column",
  },

});
