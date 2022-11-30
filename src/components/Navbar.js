import { signOut } from "firebase/auth"
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { Link } from 'react-router-dom';


function Navbar() {
    
    const out = async () => {
        await signOut(auth);
        alert('Out');
        setLogin(false);
    }
    const url = "#"
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
    const [login, setLogin] = useState(false);
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

                <div className="container">
                    <a className="navbar-brand" href={url}>App Espacios The Bridge</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item logged-out">
                                <Link className="nav-link logged-out"  to={"/auth"}>SignIn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link logged-out" to={"/register"}>SignUp</Link>
                            </li>
                            {login?
                                <li className="nav-item">
                                    <a className="nav-link logged-in " href={url} onClick={() => out()}>Logout</a>
                                </li> : null}
                        </ul>
                    </div>
                </div>

            </nav>

        </div>


    );

}
export default Navbar;