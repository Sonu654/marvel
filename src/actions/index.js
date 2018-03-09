export const LAUNCH = 'LAUNCH';
export const USER_AVAILABLE = 'USER_AVAILABLE';
export const USER_FOUND = 'USER_FOUND';
import Data from '../users.json';
<<<<<<< HEAD
//import Data from '../instruction.json';
//                   instruction.json

export function getUser() {
    console.log('inside user data');
=======
import { Actions } from 'react-native-router-flux';
//import Data from '../instruction.json';
//                   instruction.json

export function launch() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: LAUNCH, data: [] })
        }, 10);
    }
}

export function getUser() {
    console.log('inside getUser');
>>>>>>> parent of b022cf0... eslint
    return (dispatch) => {
        setTimeout(() => {
            console.log(Data);
            dispatch({ type: USER_AVAILABLE, data: Data });
        }, 2000);
    }
}


export function getUserByName(uname) {
<<<<<<< HEAD
    console.log('inside contact data');
    users = Data.users;
    return (dispatch) => {
        for (let user in users) {
            console.log('user: ', user);
=======
    console.log('inside getUserByName');
    users = Data.users;
    return (dispatch) => {
        for (let user in users) {
           // console.log('user : ', user);
>>>>>>> parent of b022cf0... eslint
            if (users[user].uname == uname) {
                userData = {
                    "uname": uname,
                    "name": users[user].name,
                    "userImg": users[user].userImg
                };
                console.log('Contact : ', userData);
                dispatch({ type: USER_FOUND, data: userData });
            }
        }
    }
}

<<<<<<< HEAD
export function launch() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: LAUNCH, data: [] })
        }, 2000);
    }
}

export function addPerson(name,age,pic){
    return(dispatch)=>{

=======

export function addPerson(name, age, pic, tag){
     contact={
        uname:name+age,
        age:age,
        name: name,
        userImg:pic,
        tags: tag
    };
    Data.users.push(contact);
    console.log("pushed data : ",Data );
    return(dispatch)=>{
        dispatch({ type: USER_AVAILABLE, data: Data });
        Actions.New_home_housemates();
>>>>>>> parent of b022cf0... eslint
    }
}