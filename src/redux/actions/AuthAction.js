


import { auth , db} from '../../config/Firebase';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CHECK_USER = 'CHECK_USER';

export const doLogin = (email, password) => async (dispatch) => {
  try {
    // firebase login
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    var user = userCredential.user;
    console.log("user ID: ", user.uid);
    dispatch({
      type: LOGIN,
      payload: user,
    });
  } catch (error) {
      alert(JSON.stringify(error))
    console.log("error", error);
  }
};


export const doSignUp = (user) => async (dispatch) => {
    try {
      // firebase login
  
      const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
      var userData = userCredential.user;
      console.log("user", userData);
      

      await db.collection('users').add({
          ...user ,
          uid : userData.uid,
      })

      dispatch({
        type: LOGIN,
        payload: userData,
      });

    } catch (error) {
        alert(JSON.stringify(error))
      console.log("error", error);
    }
  };
  

  
export const doLogout = () => async (dispatch) => {
    try {
      // firebase logout
  
      const res = await auth.signOut();
      
      console.log("user logout", res);
      dispatch({
        type: LOGOUT,
        
      });
    } catch (error) {
        alert(JSON.stringify(error))
      console.log("error", error);
    }
  };




  export const doCheckUser = (user) => async (dispatch) => {
    try {
      const id = user.uid;
      //For Getting data Which user Provide on the time of Signup
      const data = await db.collection("users").where("id", "==", id).get();
      let userData = [];
      data.forEach((doc) => {
        userData.push({
          ...doc.data(),
          docId: doc.id,
        });
      });
      //Convert Array into Object
      userData = userData.values();
      for (let val of userData) {
        userData = val;
      }
      //End UserData Code
      dispatch({
        type: CHECK_USER,
        payload: {
          user: user,
          userData: userData,
        },
      });
    } catch (error) {
  
      alert(JSON.stringify(error));
      console.log("error", error);
    }
  };
