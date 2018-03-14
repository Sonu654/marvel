export const LAUNCH = 'LAUNCH';
export const USER_AVAILABLE = 'USER_AVAILABLE';
export const USER_FOUND = 'USER_FOUND';
export const DEMO_USER_SET = 'DEMO_USER_SET';
export const MERGE_USER = 'MERGE_USER';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

export function launch() {

    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: LAUNCH, data: [] })
        }, 1);
    }
}

export function getUser() {
    let Data = [];
    AsyncStorage.getItem("users").then((val) => {
        console.log("val get user: ", JSON.parse(val));
        Data = JSON.parse(val);
    });
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: USER_AVAILABLE, data: Data });
        }, 1);
    }
}


export function getUserByName(uname) {
    //  console.log('inside getUserByName');
    let Data = [];
    AsyncStorage.getItem("users").then((val) => {
        console.log("val by name: ", JSON.parse(val));
        Data = JSON.parse(val);
    });
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

export function addPerson(contact) {
    // let contact = {
    //     uname: name + age,
    //     age: age,
    //     name: name,
    //     userImg: pic,
    //     tags: tag
    // };
    console.log("myContact: ", JSON.stringify(contact));
    let Data = [];
    let d = [];
    console.log("type of d : ", d, typeof d);
    return (dispatch) => {
        AsyncStorage.getItem("users").then((val) => {
            console.log("val: ", val);
            d.push(JSON.parse(val));
            d[0].push(contact);
            console.log("d : ", d[0]);           
            AsyncStorage.setItem("user", JSON.stringify(d[0]),(err)=>{
                console.log("err : ",err);
            }).then((res) => {
                console.log("res : ",res)
                AsyncStorage.getItem("users").then((val) => {
                        Data = JSON.parse(val);
                        console.log("Data : ", Data);
                        dispatch({ type: USER_AVAILABLE, data: Data });
                        Actions.New_home_housemates();
                    });
            });
        });
    }
}

export function getDemoUser() {

}

export function setDemoUser() {
    asyncDemo = [];
    AsyncStorage.getItem("demo").then((val) => {
        console.log("val: ", JSON.parse(val));
        asyncDemo = JSON.parse(val);
    });
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: DEMO_USER_SET, data: asyncDemo });
        }, 1);

    }
}