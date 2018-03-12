// import { Actions } from "react-native-router-flux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { connect } from "react-redux";
import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {StyleSheet,View,TextInput,Text,Platform,Image} from 'react-native'
export default class Add_room extends Component
{
  render()
  {
    return(
      <KeyboardAwareScrollView ref="scroll" style={styles.scroller}>
       <View style={styles.container}>
         <View style={{flex:0.13,backgroundColor:'rgb(68, 35, 124)',flexDirection:'row'}}>
           <View style={{flex:0.8}}>
             <Text style={{ fontFamily:"Verdana",fontSize: 22,marginLeft:50,textAlign:'center', color:'white',padding:26}}>Add a room</Text>
           </View>
           <View style={{flex:0.2}}>
               <Icon name='times' style={{color:'white', fontSize:20,padding:20,marginTop:10}} onPress={()=>Actions.Rooms()}/>
           </View>
         </View>
          <View style={{flex:0.4, backgroundColor:'#f7f6f6',flexDirection:'column'}}>

            <View style={{flex:0.3,flexDirection:'row',marginTop:20}}>
              <View style={{ flex:0.5}}>
                <Text style={{marginLeft:34,fontSize:20,fontWeight:'bold'}}>Suitable for</Text>
              </View>
              <View style={{  flex:0.5, justifyContent: 'center',alignItems: 'center',}}>
                <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Male or Female</Text>
              </View>
            </View>
            <View style ={{flex:0.3,flexDirection:'row',marginTop:20}}>
              <View style={{flex:0.22,backgroundColor:'white',marginLeft:40,justifyContent: 'center', alignItems: 'center',borderRadius:10,height:60}}>
                <Icon name='user' style={{color:'rgb(68, 35, 124)', fontSize:30,padding:10,marginTop:3}}/>
              </View>
              <View style={{flex:0.22,backgroundColor:'white',marginLeft:23,justifyContent: 'center', alignItems: 'center',borderRadius:10,height:60}}>
                <Icon name='users' style={{color:'rgb(68, 35, 124)', fontSize:30,padding:10,marginTop:3}}/>
              </View>
              <View style={{flex:0.22,backgroundColor:'white',marginLeft:34,justifyContent: 'center', alignItems: 'center',borderRadius:10,height:60}}>
                <Icon name='male' style={{color:'rgb(68, 35, 124)', fontSize:30,padding:10,marginTop:3}}/>
              </View>
              <View style={{flex:0.22,backgroundColor:'white',marginLeft:23,justifyContent: 'center', alignItems: 'center',borderRadius:10,height:60}}>
                <Icon name='female' style={{color:'rgb(68, 35, 124)', fontSize:30,padding:10,marginTop:3}}/>
              </View>
            </View>

            <View style ={{flex:0.2,flexDirection:'row',marginTop:10}}>
              <View style={{flex:0.24,marginLeft:25,justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={{textAlign:'center'}}>1 Person</Text>
              </View>
              <View style={{flex:0.24,marginLeft:20,justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{textAlign:'center'}}>2 Sharing</Text>
              </View>
              <View style={{flex:0.22,marginLeft:20,justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{textAlign:'center'}}>Male</Text>
              </View>
              <View style={{flex:0.22,marginLeft:26,justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{textAlign:'center'}}>Female</Text>
              </View>
            </View>

            <View style={{flex:0.2,marginTop:25,marginBottom:10}}><Text style={{marginLeft:40,fontSize:20,fontWeight:'bold'}}>Monthly cost</Text></View>
          </View>
          <View style={{flex:0.5,flexDirection:'column'}}>
            <View style={{flex:0.1,marginLeft:35}}>
              <TextInput style={{height:40 }} placeholder="$550"  underlineColorAndroid = "transparent"/>
            </View>
            <View style={{flex:0.1,marginBottom:10, marginTop:10,backgroundColor:'#f7f6f6',height:50}}>
              <Text style={{marginLeft:40,fontSize:20,fontWeight:'bold',marginTop:10}}>Security Deposit</Text>
            </View>
            <View style={{flex:0.1,marginLeft:35}}>
              <TextInput style={{height:40 }} placeholder="$550"  underlineColorAndroid = "transparent"/>
            </View>

            <View style={{flex:0.1,marginBottom:10, backgroundColor:'#f7f6f6',height:50,flexDirection:'row'}}>
                <View style={{flex:0.5}}>
                  <Text style={{marginLeft:40,fontSize:20,fontWeight:'bold',marginTop:10}}>Available from</Text>
                </View>
                <View style={{flex:0.5}}>
                  <Text style={{marginLeft:40,fontSize:20,fontWeight:'bold',marginTop:10}}>Term length</Text>
                </View>
            </View>
            <View style={{flex:0.1,flexDirection:'row'}}>

              <View style={{flex:0.5,marginLeft:35} }>
                <TextInput style={{height:40 }} placeholder="22 June 2015"  underlineColorAndroid = "transparent"/>
              </View>
              <View style={{flex:0.5 ,marginLeft:38}}>
                <TextInput style={{height:40 }} placeholder="long term"  underlineColorAndroid = "transparent"/>
              </View>

            </View>
            <View style={{flex:0.1,marginBottom:10, marginTop:10,backgroundColor:'#f7f6f6',height:50}}>
              <Text style={{marginLeft:40,fontSize:20,fontWeight:'bold',marginTop:10}}>Brief Description of the room</Text>
            </View>
            <View style={{flex:0.2,marginLeft:35}}>
              <TextInput style={{height:70 }} placeholder="E.g. Downstairs with sunlight in the morning"  underlineColorAndroid = "transparent"/>
            </View>
            <View>
              <Text style={{marginLeft:40,fontSize:20,fontWeight:'bold',marginTop:10}}>Photos of the room</Text>
            </View>
            <View style={{flex:0.2,marginLeft:35}}>
              <TextInput style={{height:70 }} placeholder="E.g. Downstairs with sunlight in the morning"  underlineColorAndroid = "transparent"/>
            </View>
          </View>
       </View>
    </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroller: {
    backgroundColor: "white"
  },
  container: {
    marginTop: Platform.OS == 'ios' ? 20 : 0,
    flex: 1,
    flexDirection: "column",
  },

});
