export const LAUNCH = 'LAUNCH';
export const USER_AVAILABLE = 'USER_AVAILABLE';
export const USER_FOUND = 'USER_FOUND';
export const DEMO_USER_SET = 'DEMO_USER_SET';
import { AsyncStorage } from 'react-native';
import Data from '../users.json';
import { Actions } from 'react-native-router-flux';
//import Data from '../instruction.json';
//                   instruction.json

export function launch() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: LAUNCH, data: [] })
        }, 2000);
    }
}

export function getUser() {

    return (dispatch) => {
        setTimeout(() => {
            //     console.log(Data);
            dispatch({ type: USER_AVAILABLE, data: Data });
        }, 2000);
    }
}


export function getUserByName(uname) {
    //  console.log('inside getUserByName');
    users = Data;
    return (dispatch) => {
        for (let user in users) {
            // console.log('user : ', user);
            if (users[user].uname == uname) {
                userData = {
                    "uname": uname,
                    "name": users[user].name,
                    "userImg": users[user].userImg
                };
                //   console.log('Contact : ', userData);
                dispatch({ type: USER_FOUND, data: userData });
            }
        }
    }
}


export function addPerson(name, age, pic, tag) {
    contact = {
        uname: name + age,
        age: age,
        name: name,
        userImg: pic,
        tags: tag
    };
    Data.push(contact);
    console.log("pushed data : ", Data);
    return (dispatch) => {
        dispatch({ type: USER_AVAILABLE, data: Data });
        Actions.New_home_housemates();
    }
}

export function getDemoUser() {
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
    console.log("demo action ");
    return (dispatch) => {
        try {
            req = AsyncStorage.setItem("users", demo);
            console.log("req : ", req);
            req.then((res) => {
                console.log("res : ", res);
               // dispatch({ type: DEMO_USER_SET, data: demo });
            });
        } catch (err) {
            console.log("err : ", err);
        } finally {
            AsyncStorage.getItem("users", (err, result) => {
                console.log("Result : ", result);
            });
        }
    }
}