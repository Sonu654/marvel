import React, { Component } from 'react';
import { StyleSheet, ListView, AsyncStorage, FlatList, View, BackgroundImage, TextInput, Text, Image, TouchableOpacity, Dimensions, Platform, ActivityIndicator } from 'react-native'
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

class Search extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  loading: false,
                  demoContact: [],
            }
      }


      componentWillReceiveProps = (nextProps) => {
            // console.log("next props :", nextProps);
            if (nextProps.demoContact != this.props.demoContact) {
                  this.setState(
                        this.state.demoContact = nextProps.demoContact
                  );
            }
      }
      componentDidMount = () => {
            this.props.setDemoUser();
      }

      addDemoContact=(contact)=>{
            console.log("passing contact : ",contact);
            this.props.addPerson(contact);
      }
      render() {
            if (this.props.loading) {
                  return (
                        < View style={styles.ActivityIndicatorContainer} >
                              <ActivityIndicator
                                    animating={true}
                                    style={{
                                          height: 80,
                                          marginTop: 400
                                    }}
                                    size='large'
                                    color='rgb(68, 35, 124)'
                              />
                        </View >
                  )
            } else {
                  // console.log("demoContact props : ", this.props.demoContact.length);
                  return (

                        <View style={styles.container}>
                              <View style={{ flex: 0.13, backgroundColor: 'rgb(68, 35, 124)', flexDirection: 'row' }}>
                                    <View style={{ flex: 0.8 }}>
                                          <Text style={{ fontFamily: "Verdana", fontSize: 22, textAlign: 'center', color: 'white', padding: 30 }}>Add a Person</Text>
                                    </View>
                                    <View style={{ flex: 0.2 }}>
                                          <Icon name='times' style={{ color: 'white', fontSize: 20, padding: 28, marginTop: 3 }} onPress={() => Actions.pop()} />
                                    </View>
                              </View>
                              <View style={{ flex: 0.13, position: 'relative', flexDirection: 'row' }}>
                                    <View style={{ flex: 0.8 }}>
                                          <TextInput style={{ textAlign: 'left', padding: 20, fontSize: 20, color: '#acacac', fontStyle: 'italic', marginLeft: 25 }} placeholder="Search for a person" underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flex: 0.2 }}>
                                          <Icon name='search' style={{ color: '#282828', fontSize: 20, padding: 20, marginTop: 3, marginLeft: 30 }} />
                                    </View>
                              </View>
                              <KeyboardAwareScrollView style={{ flex: 0.61, width: null, height: null }}>
                                    <View style={{ flex: 1, marginTop: 30 }}>
                                          {  
                                                this.props.demoContact.map((item, index) => (
                                                      <TouchableOpacity
                                                            key={item.uname}
                                                            onPress={() => this.addDemoContact(item)}>

                                                            <View style={{ flexDirection: 'row', height: 70, borderBottomColor: 'rgba(150,150,150,0.9)', borderBottomWidth: 2, paddingBottom: 5, marginTop: 5 }}>
                                                                  <View style={{ width: 100, alignItems: 'center' }}>
                                                                        <Avatar medium rounded source={{ uri: item.userImg }} />
                                                                  </View>
                                                                  <View style={{ width: 200 }}>
                                                                        <Text style={{ fontFamily: "Verdana", fontSize: 18, marginLeft: 10, marginTop: 5, fontWeight: 'bold', color: '#000' }}> {item.name}</Text>
                                                                        <Text style={{ fontFamily: "Verdana", fontSize: 12, marginLeft: 10, marginTop: 5, fontWeight: 'bold', color: '#000' }}> {item.uname}</Text>
                                                                  </View>
                                                            </View>
                                                      </TouchableOpacity>
                                                ))
                                          }
                                    </View>
                              </KeyboardAwareScrollView>
                              <View style={{ flex: 0.13, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 35 }}>
                                    <View style={{ flex: 0.25 }}>
                                          <Icon name='circle' style={{ color: 'rgb(68, 35, 124)', fontSize: 72, textAlign: 'center', marginTop: -20 }} />
                                          <Icon name='plus' style={{ color: 'white', fontSize: 26, position: 'absolute', marginLeft: 20, textAlign: 'center' }} onPress={() => Actions.Add_profile()} />
                                    </View>
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
      /// console.log("props : ", props);
      // console.log("state: ", state);
      return {
            demoContact: state.demoUserReducer.data,
            loading: state.demoUserReducer.loading,
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

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
            backgroundColor: '#fbf1f1',
      },
});
