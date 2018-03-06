export const LAUNCH = 'LAUNCH';
export const USER_AVAILABLE = 'USER_AVAILABLE';
export const USER_FOUND = 'USER_FOUND';
import Data from '../users.json';
//import Data from '../instruction.json';
//                   instruction.json

export function getUser() {
    console.log('inside user data');
    return (dispatch) => {
        setTimeout(() => {
            console.log(Data);
            dispatch({ type: USER_AVAILABLE, data: Data });
        }, 2000);
    }
}


export function getUserByName(uname) {
    console.log('inside contact data');
    users = Data.users;
    return (dispatch) => {
        for (let user in users) {
            console.log('user: ', user);
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

export function launch() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: LAUNCH, data: [] })
        }, 2000);
    }
}

export function addPerson(name,age,pic){
    return(dispatch)=>{

    }
}