import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, FlatList, View, BackgroundImage, TextInput, Text, Image, TouchableOpacity, Dimensions, Platform, ActivityIndicator } from 'react-native'
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
                  loading: true,
                  data: []
            }
      }

      componentWillMount = () => {
            let demo = [
                  {
                        uname: "dasd234",
                        age: 23,
                        name: "Sandeep",
                        userImg: "http://localhost:8081/src/Images/circle2.jpeg",
                        tags: {
                              Cooking: true,
                              Music: true,
                              Weekends: true,
                              Coffee: false,
                              Running: true
                        }
                  },
                  {
                        uname: "fdf43",
                        age: 18,
                        name: "Swati",
                        userImg: "http://localhost:8081/src/Images/circle4.jpeg",
                        tags: {
                              Cooking: true,
                              Music: true,
                              Weekends: true,
                              Coffee: true,
                              Running: true
                        }
                  },
                  {
                        uname: "dasd234",
                        age: 12,
                        name: "Krish",
                        userImg: "http://localhost:8081/src/Images/circle2.jpeg",
                        tags: {
                              Cooking: true,
                              Music: true,
                              Weekends: true,
                              Coffee: true,
                              Running: false
                        }
                  }
            ];
            console.log(JSON.stringify(demo));
            try {
                  AsyncStorage.setItem("demo", JSON.stringify(demo), (err) => {
                        console.log("err : ", err);
                  }).then((res) => {
                        console.log("res : ", res);
                  });
            } catch (e) {
                  console.log(e);
            }
      }

      componentDidMount = () => {
            //  this.props.getDemoUser();
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
                  console.log("props : ", this.props);
                  return (
                        <View></View>
                  )
            }
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

mapStateToProps = (state, props) => {
      return {
            loading: state.demoUserReducer.loading
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
});
