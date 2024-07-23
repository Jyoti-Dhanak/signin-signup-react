import { Routes, Route } from "react-router-dom";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Notfound from "../components/Notfound";
export default function Path() {
    return (
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/*" element={<Notfound />}/>
        </Routes>
    );
}