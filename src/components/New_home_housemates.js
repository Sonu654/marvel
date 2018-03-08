import React, { Component } from 'react';
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class New_home extends Component {
  constructor(props) {
    super(props);
    console.log('new home constructor');
    this.state = {
      loading: true,
      users: [],
      modalVisible: false,
      contact: []
    };
  }

  componentDidMount=()=> {
    this.props.getUser();
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("props updated rendring");
    if (nextProps.users != this.props.users) {
      this.setState(
        this.state.users = nextProps.users
      );
    }
    if (nextProps.contact != this.props.contact) {
      this.setState(
        this.state.contact = nextProps.contact,
      );
    }
  }

  componentWillUnmount = () => {
    console.log("unmounting")
  }
  render() {
  //  console.log("props loading : ",this.props.loading);
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
      console.log(this.state);
      userList = this.state.users.map((user) => {
        console.log('imgpath', user.userImg);
        return (
          <View style={{ flex: 0.33, flexDirection: 'column', flexWrap: 'wrap' }} key={user.uname} >
            <View style={{ flex: 0.8, borderRadius: 100, backgroundColor: '#f7f6f6', justifyContent: 'center', alignItems: 'center', }}>
              <Image source={{ uri: user.userimg }} ImageSourcePropTyp style={{ resizeMode: 'stretch', height: height * 0.16, width: width * 0.273, borderRadius: 50 }} />
            </View>
            <View style={{ flex: 0.2, flexDirection: 'row' }}>
              <Text style={{ fontFamily: "Verdana", fontSize: 12, fontWeight: 'bold', textAlign: 'center', marginLeft: width * 0.1, color: '#000', padding: 8 }}>
                {user.name}
              </Text>
            </View>
          </View>
        )
      });
    //  console.log("userList : ",userList);
      return (
        //<KeyboardAwareScrollView ref="scroll" style={{backgroundColor:'white'}}>
        <View style={styles.container}>

          <View style={{ flex: 0.13, backgroundColor: 'rgb(68, 35, 124)', flexDirection: 'row' }}>
            <View style={{ flex: 0.8 }}>
              <Text style={{ fontFamily: "Verdana", fontSize: 22, textAlign: 'right', color: 'white', padding: 26 }}>Create a new Home</Text>
            </View>
            <View style={{ flex: 0.2 }}>
              <Icon name='times' style={{ color: 'white', fontSize: 20, padding: 28, marginTop: 3 }} onPress={() => Actions.Create_profile()} />
            </View>
          </View>

          <View style={{ flex: 0.28, marginTop: 20, flexDirection: 'column' }}>
            <View style={{ flex: 0.13 }}>
              <Text style={{ fontFamily: "Verdana", fontSize: 19, fontWeight: 'bold', textAlign: 'center', color: 'rgb(68, 35, 124)' }}>Housemates</Text>
            </View>
            <View style={{ flex: 0.13 }}>
              <Text style={{ fontFamily: "Verdana", fontSize: 15.5, textAlign: 'center', color: 'gray', padding: 7 }}>Tell us who you live with</Text>
            </View>
            <View style={{ flex: 0.74, backgroundColor: '#f7f6f6', marginTop: 10 }}>
              <TouchableOpacity>
                <Image source={require('../Images/tellus.png')} style={{ resizeMode: 'cover', height: height * 0.18, width: width, resizeMode: 'stretch', position: 'relative' }} />
              </TouchableOpacity>
              <Icon name='plus' style={{ color: 'rgb(68, 35, 124)', fontSize: 30, position: 'absolute', marginLeft: width * 0.8205, marginTop: height * 0.105 }} onPress={() => Actions.Add_person()} />
            </View>
          </View>

          <View style={{ flex: 0.59, flexDirection: 'column', marginTop: 15 }}>
            <View style={{ flex: 0.4, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              {userList}
            </View>
            <View style={{ flex: 0.4, flexDirection: 'row' }}>
              <View style={{ flex: 0.33, borderRadius: 100, backgroundColor: '#f7f6f6', justifyContent: 'center', alignContent: 'center' }}>
                <Icon name='plus' style={{ color: 'gray', fontSize: 80, padding: 20, marginLeft: width * 0.04, position: 'absolute' }}
                  onPress={() => Actions.Add_person()} />
              </View>
              <View style={{ flex: 0.33, borderRadius: 100, backgroundColor: '#f7f6f6' }}></View>
              <View style={{ flex: 0.33, borderRadius: 100, backgroundColor: '#f7f6f6' }}></View>
            </View>
            <View style={{ flex: 0.2, flexDirection: 'row', position: 'absolute', bottom: 0 }}>
              <View style={{ flex: 0.4 }}></View>
              <View style={{ flex: 0.3 }}></View>
              <View style={{ flex: 0.3 }}>
                <Icon name='check-circle' style={{ color: '#43b4e5', fontSize: 80, marginLeft: 25 }} onPress={() => Actions.Rooms()} />
              </View>
            </View>
          </View>

        </View>
        // </KeyboardAwareScrollView>
      );
    }
  }
}


mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}

mapStateToProps = (state, props) => {
  if (state.contactReducer.isContactInfo == true) {
    return {
      loading: state.contactReducer.loading,
      contact: state.contactReducer.data,
      users: state.userReducer.data
    }
  } else {
    return {
      users: state.userReducer.data,
      loading: state.userReducer.loading,
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(New_home);

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    //backgroundColor: '#F5FCFF',
  },
});
