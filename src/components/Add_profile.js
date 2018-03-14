import React, { Component } from 'react';
import { StyleSheet, View, BackgroundImage, ScrollView, TextInput, Text, Image, TouchableOpacity, Dimensions, ActivityIndicator, Platform } from 'react-native'
var { height, width } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import renderIf from '../renderIf';
class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Marval',
      age: '25',
      pic: 'http://localhost:8081/src/Images/circle2.jpeg',
      tag: {
        Cooking: true,
        Music: true,
        Weekends: true,
        Coffee: true,
        Running: true
      }
    }
  }
  uploadProPic = () => {
    alert('uploading');
  }

  handleName = (text) => {
    this.setState({ name: text })
  }
  handleAge = (text) => {
    this.setState({ age: text })
  }

  handalAddBtn = () => {
    console.log(this.state);
    this.props.addPerson(this.state.name, this.state.age, this.state.pic, this.state.tag);
  }

  handleTag = (tagName) => {
    tag = this.state.tag;
    for (x in tag) {
      if (x == tagName) {
        console.log(tag[x] = false);
      }
    }
    this.setState({ tag: tag });

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.9 }}>
          <KeyboardAwareScrollView>
            <View style={{ flex: 0.13, backgroundColor: 'rgb(68, 35, 124)', flexDirection: 'row' }}>
              <View style={{ flex: 0.8 }}>
                <Text style={{ fontFamily: "Verdana", fontSize: 22, textAlign: 'center', color: 'white', padding: 30 }}>Add New Person</Text>
              </View>
              <View style={{ flex: 0.2 }}>
                <Icon name='times' style={{ color: 'white', fontSize: 20, padding: 28, marginTop: 3 }} onPress={() => Actions.pop()} />
              </View>
            </View>
            <View style={{ flex: 0.87, flexDirection: 'column', position: 'relative', backgroundColor: '#f7f6f6' }}>
              <View style={{ flex: 0.5, flexDirection: 'row', marginTop: height * 0.015 }}>
                <View style={{ flex: 0.3 }}></View>
                <View style={{ flex: 0.7, borderRadius: 100 }}>
                  <Image source={require('../Images/profile.png')} style={{ height: height * 0.2, width: width * 0.355, borderRadius: 65, position: 'relative' }} />
                </View>
                <Icon name='circle' style={{ color: 'white', fontSize: 75, zIndex: 99, marginLeft: width * 0.52, marginTop: height * 0.15, position: 'absolute' }} />
                <Icon name='upload' onPress={() => { this.uploadProPic() }} style={{ color: 'rgb(68, 35, 124)', zIndex: 99, fontSize: 30, marginLeft: width * 0.56, marginTop: height * 0.17, position: 'absolute' }} />
              </View>
              <View style={{ flex: 0.1, flexDirection: 'row', marginTop: height * 0.05 }}>
                <View style={{ flex: 0.7 }}><Text style={{ fontSize: 20, color: '#535353', marginLeft: 35 }}>Name</Text></View>
                <View style={{ flex: 0.3 }}><Text style={{ fontSize: 20, color: '#535353', marginLeft: 35 }}>Age</Text></View>
              </View>
              <View style={{ flex: 0.1, flexDirection: 'row', marginTop: height * 0.01 }}>
                <View style={{ flex: 0.7 }}>
                  <TextInput onChangeText={this.handleName} style={{ fontSize: 18, marginLeft: 35 }} placeholder='ABC' underlineColorAndroid="transparent" />
                </View>
                <View style={{ flex: 0.3 }}>
                  <TextInput onChangeText={this.handleAge} style={{ fontSize: 18, marginLeft: 30 }} placeholder='xx' underlineColorAndroid="transparent" />
                </View>
              </View>
              <View style={{ flex: 0.3, position: 'relative', justifyContent: 'space-between' }}>
                <View style={{ flex: 0.2, flexDirection: 'column' }}>
                  <Text style={{ fontSize: 20, color: '#535353', padding: 5, paddingLeft: 15, marginLeft: 18 }}>Tags</Text>
                </View>
                <View style={{ flex: 0.3, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', marginTop: height * 0.04 }}>
                  {renderIf(this.state.tag.Cooking)(
                    <View style={{ flex: 0.30, borderRadius: 10, backgroundColor: 'rgb(68, 35, 124)', position: 'relative', marginTop: height * 0.01 }}>
                      <Text style={{ fontSize: 16, textAlign: 'left', color: 'white', padding: 10 }}>Cooking</Text>
                      <Icon name='times' style={{ color: 'white', fontSize: 15, marginTop: height * 0.02, position: 'absolute', marginLeft: width * 0.25 }} onPress={() => { this.handleTag('Cooking') }} />
                    </View>
                  )}
                  {renderIf(this.state.tag.Music)(
                    <View style={{ flex: 0.30, borderRadius: 10, backgroundColor: 'rgb(68, 35, 124)', position: 'relative', marginTop: height * 0.01 }}>
                      <Text style={{ fontSize: 16, textAlign: 'left', color: 'white', padding: 10 }}>Music</Text>
                      <Icon name='times' style={{ color: 'white', fontSize: 15, marginTop: height * 0.02, position: 'absolute', marginLeft: width * 0.25 }} onPress={() => { this.handleTag('Music') }} />
                    </View>
                  )}
                  {renderIf(this.state.tag.Weekends)(
                    <View style={{ flex: 0.30, borderRadius: 10, backgroundColor: 'rgb(68, 35, 124)', position: 'relative', marginTop: height * 0.01 }}>
                      <Text style={{ fontSize: 16, textAlign: 'left', color: 'white', padding: 10 }}>Weekends</Text>
                      <Icon name='times' style={{ color: 'white', fontSize: 15, marginTop: height * 0.02, position: 'absolute', marginLeft: width * 0.25 }} onPress={() => { this.handleTag('Weekends') }} />
                    </View>
                  )}
                </View>
                <View style={{ flex: 0.3, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', }}>
                  {renderIf(this.state.tag.Coffee)(
                    <View style={{ flex: 0.30, borderRadius: 10, backgroundColor: 'rgb(68, 35, 124)', position: 'relative', marginTop: height * 0.05 }}>
                      <Text style={{ fontSize: 16, textAlign: 'left', color: 'white', padding: 10 }}>Coffee</Text>
                      <Icon name='times' style={{ color: 'white', fontSize: 15, marginTop: height * 0.02, position: 'absolute', marginLeft: width * 0.25 }} onPress={() => { this.handleTag('Coffee') }} />
                    </View>
                  )}
                  {renderIf(this.state.tag.Running)(
                    <View style={{ flex: 0.30, borderRadius: 10, backgroundColor: 'rgb(68, 35, 124)', position: 'relative', marginTop: height * 0.05 }}>
                      <Text style={{ fontSize: 16, textAlign: 'left', color: 'white', padding: 10 }}>Running</Text>
                      <Icon name='times' style={{ color: 'white', fontSize: 15, marginTop: height * 0.02, position: 'absolute', marginLeft: width * 0.25 }} onPress={() => { this.handleTag('Running') }} />
                    </View>
                  )}
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
        <View style={{ flex: 0.10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#19B5FE' }}>
          <TouchableOpacity style={{}} onPress={() => { this.handalAddBtn() }} >
            <Text style={{ fontSize: 20, textAlign: 'center', color: '#fff', padding: 10 }}>Add <Icon name='check' /></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

mapStateToProps = (state, props) => {
  return {

  }
}
mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPerson);
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == 'ios' ? 20 : 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    //backgroundColor: '#F5FCFF',
  },
});
