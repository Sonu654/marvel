import React, { Component } from 'react';
import { StyleSheet, FlatList, View, BackgroundImage, TextInput, Text, Image, TouchableOpacity, Dimensions, Platform, ActivityIndicator } from 'react-native'
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Avatar } from 'react-native-elements'
import Modal from "react-native-modal";
import renderIf from '../renderIf';
class New_home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: [],
      modalVisible: false,
      contact: []
    }
  }

  componentDidMount() {
    this.props.getUser();
  }

  componentWillReceiveProps = (nextProps) => {
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
      userList =
        <View style={{ justifyContent: "center", alignContent: 'center', flex: 0.8, padding: 10, marginLeft: 45 }}>
          {this.props.users ?
            <FlatList
              numColumns={3}
              scrollEnabled={false}
              data={this.props.users}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ width: 120, height: 120 }}>
                    <Avatar large rounded source={{ uri: item.userImg }} onPress={() => { this.setState({ modalVisible: !this.state.modalVisible, contact: item }) }} />
                    <Text style={{ fontFamily: "Verdana", fontSize: 12, marginLeft: 10, marginTop: 5, fontWeight: 'bold', color: '#000' }}> {item.name}</Text>
                  </View>
                )
              }}
            />
            : null
          }
        </View>
      return (
        <View style={styles.container}>
          <View style={{ flex: 0.13, backgroundColor: 'rgb(68, 35, 124)', flexDirection: 'row' }}>
            <View style={{ flex: 0.8 }}>
              <Text style={{ fontFamily: "Verdana", fontSize: 22, textAlign: 'right', color: 'white', padding: 26 }}>Create a new Home</Text>
            </View>
            <View style={{ flex: 0.2 }}>
              <Icon name='times' style={{ color: 'white', fontSize: 20, padding: 28, marginTop: 3 }} onPress={() => Actions.No_peeping()} />
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

            <Modal
              isVisible={this.state.modalVisible}
              animationIn="slideInLeft"
              animationOut="slideOutRight">
              <View style={styles.modalContent}>
                <View style={{ flex: 0.9, width: 150, height: 150, justifyContent: "center", alignItems: "center", }}>
                  <Avatar large rounded source={{ uri: this.state.contact.userImg }} style={{ marginLeft: 20 }} />
                  <Text style={{ fontFamily: "Verdana", fontSize: 20, textAlign: 'center', marginTop: 10, fontWeight: 'bold', color: '#000' }}> {this.state.contact.name} , {this.state.contact.age}</Text>
                </View>
                <View style={{ flex: 0.10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#19B5FE' }}>
                  <TouchableOpacity style={{}} onPress={() => { this.setState({ modalVisible: !this.state.modalVisible }) }} >
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#fff', padding: 10 }}>Remove from Profile <Icon name='times' /></Text>
                  </TouchableOpacity>
                </View>

              </View>
            </Modal>


          </View>
          <View style={{ flex: 0.59, flexDirection: 'column', marginTop: 15, justifyContent: 'center', alignItems: 'center', }}>
            {userList}
            <View style={{ flex: 0.2, flexDirection: 'row', position: 'absolute', bottom: 0 }}>
              <View style={{ flex: 0.4 }}></View>
              <View style={{ flex: 0.3 }}></View>
              <View style={{ flex: 0.3 }}>
                <Icon name='check-circle' style={{ color: '#43b4e5', fontSize: 80, marginLeft: 25 }} onPress={() => Actions.Rooms()} />
              </View>
            </View>
          </View>

        </View >
        //</KeyboardAwareScrollView>
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
    marginTop: Platform.OS == 'ios' ? 20 : 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    flex: 0.5,
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
});


/*
          <Modal
            isVisible={this.modalVisible}
            animationIn="slideInLeft"
            animationOut="slideOutRight">
            <View style={styles.modalContent}>
              <Text>Hello!</Text>
              <TouchableOpacity onPress={() => { this.setState({ modalVisible: !modalVisible }) }}>
                <View style={styles.button}>
                  <Text>X</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>

          */