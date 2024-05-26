import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app) ;

const AuthProvider = ({children}) =>{   

    const [user,setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    //create user with email and password 

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in user with email and password 

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    // logout user 

    const logOut = () =>{
        return signOut(auth) ;
    }

    useEffect(()=>{
        const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
            console.log(currentUser);
          }
        });
        return ()=>{
           return unscubcribe()
        }

    },[])

    const authInfo = { googleLogin, user, createUser, signIn, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider ;

