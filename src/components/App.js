
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from '../store/';

import { Router, Scene, Stack } from 'react-native-router-flux';
import Add_person from './Add_person';
import Add_room from './Add_room';
import Create_profile from './Create_profile';
import New_home_housemates from './New_home_housemates';
import New_home_housephotos from './New_home_housephotos';
import Start from './Start';
import Rooms from './Rooms';
import Short_bio from './Short_bio';
import No_peeping from './No_peeping';
import Location from './Location';
import Success from './Success';
import Add_profile from './Add_profile';
import example from './modal';
import Search from './search';


export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <Router>
          <Stack key='root' >
            <Scene hideNavBar hideTabBar component={Start} title="Start" key="Start" />
            <Scene hideNavBar hideTabBar component={Create_profile} title="Profile" key="Create_profile" />
            <Scene hideNavBar hideTabBar component={New_home_housemates} title="New_home_housemates" key="New_home_housemates"   />
            <Scene hideNavBar hideTabBar component={New_home_housephotos} title="New_home_housephotos" key="New_home_housephotos" />
            <Scene hideNavBar hideTabBar component={Add_room} title="Add_room" key="Add_room" />
            <Scene hideNavBar hideTabBar component={Add_person} title="Add_person" key="Add_person" />
            <Scene hideNavBar hideTabBar component={Rooms} title="Rooms" key="Rooms" />
            <Scene hideNavBar hideTabBar component={Short_bio} title="Short_bio" key="Short_bio" />
            <Scene hideNavBar hideTabBar component={No_peeping} title="No_peeping" key="No_peeping" />
            <Scene hideNavBar hideTabBar component={Location} title="Location" key="Location" />
            <Scene hideNavBar hideTabBar component={Success} title="Success" key="Success" />
            <Scene hideNavBar hideTabBar component={Add_profile} title="Add_profile" key="Add_profile"/>
            <Scene hideNavBar hideTabBar component={example} title="modal" key="modal"/>       
            <Scene hideNavBar hideTabBar component={Search} title="Search" key="search"  initial/>       
          </Stack>
        </Router>
      </Provider>
    );
  }
}
