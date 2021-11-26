import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './pages/Signin';
import Login from "./pages/Login";
import Home from './pages/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/signin" element={<Signin/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route element={<Signin/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;