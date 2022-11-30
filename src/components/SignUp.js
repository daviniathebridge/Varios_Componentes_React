import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
    const sing = async () => {
        try {

            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredentials)
            showMessage("Welcome " + userCredentials.user.email)
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                showMessage("Email en uso")
            } else if (error.code === "auth/invalid-email") {
                showMessage("Email no valido")
            } else if (error.code === "auth/weak-password") {
                showMessage("Contraseña demasiado debil")
            } else {
                showMessage("Error: " + error.message)
            }
        }
    }

    function showMessage(message, type = "success") {
        alert(message);
    }
    const url = "#";
    const [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href={url}>password?</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href={url}>password?</a>
                    </p>
                </div>
            </form>
        </div>
    )

}

export default SignUp;