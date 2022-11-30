
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Calendar from './Calendar';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Main(){
        return (
            <div>
                
                <Routes>
                    <Route path="/auth" element={<SignIn />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/calendar" element={<Calendar />} />
                </Routes>
                
            </div>
        );
    }

export default Main;