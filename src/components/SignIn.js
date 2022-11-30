import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { Link } from 'react-router-dom'
import { LoginContext } from "../App";

function SignIn() {
   const firebaseConfig = {
      apiKey: "AIzaSyC04AKUw_rqykKonfSsCtuVEQh1kLKj0sA",
      authDomain: "fir-app-8634e.firebaseapp.com",
      projectId: "fir-app-8634e",
      storageBucket: "fir-app-8634e.appspot.com",
      messagingSenderId: "742840512042",
      appId: "1:742840512042:web:fd1ed2e5ce247a04f51d53",
      measurementId: "G-XBWTVQ08ZV"
  };
  const [app] = useState(initializeApp(firebaseConfig));
  const [auth] = useState(getAuth(app));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState('disconnected');
  function showMessage(message, type = "success") {
      alert(message);
  }
  const sign = async () => {
      try {
          const credentials = await signInWithEmailAndPassword(auth, email, password);
          showMessage("Welcome " + credentials.user.email)
          setLogin('connected');
      } catch (error) {
          if (error.code === "auth/wrong-password" || error.code === "auth/invalid-email") {
              showMessage("Usuario o Contraseña erróneos")
          } else {
              showMessage("Error: " + error.message)
          }
      }

  }; 

  const url = "#";
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Link className="btn btn-primary" onClick={()=> sign()}  to={"/home"}>Submit</Link>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href={url}>password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignIn;