


// App.js
import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCcexTyC9lshgtDrKmnXiaibTB7ntQFa7U",
  authDomain: "community-server-attendance.firebaseapp.com",
  databaseURL: "https://community-server-attendance-default-rtdb.firebaseio.com",
  projectId: "community-server-attendance",
  storageBucket: "community-server-attendance.appspot.com",
  messagingSenderId: "91209010988",
  appId: "1:91209010988:web:60a85ba8508b6b3253a689",
  measurementId: "G-T70E8Q1FPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle sign-in success
        console.log(result.user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
  };

  return (
    <div className="app">
      <div className="signin-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" />
        <h2>Sign in</h2>
        <p>to continue to your app</p>
        <button onClick={handleSignIn} className="google-signin-btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default App;
