
import PropTypes from "prop-types";

import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Components/firebase/firebase.config";
import axios from "axios";
// import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleLogInProvider = new GoogleAuthProvider();
const githubLogInProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }
    //login user
    const logIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }

    //update profile
    const handleUpdateProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }
    //google login
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleLogInProvider)
    }
    //github login
    const githubLogin =()=>{
        setLoading(true)
        signInWithPopup(auth, githubLogInProvider)
    }

    //Observer user
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email: userEmail}    
        setUser(currentUser)
        setLoading(false)
            // console.log(currentUser);
         if(currentUser) {
            axios.post('http://localhost:5000/jwt', loggedUser,{
                withCredentials:true
            })
            .then(res =>{
                console.log('token response',res.data);
            })
         }  
         else{
            axios.post('http://localhost:5000/logout', loggedUser, {
                withCredentials:true
            })
            .then(res =>{
                console.log(res.data);
            })
         } 
        });
        return() =>{
            unSubscribe();
        }
    },[user?.email])

    const authInfo={user,createUser,logIn, logOut,handleUpdateProfile,googleLogin,githubLogin, loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
  };