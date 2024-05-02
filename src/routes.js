import React, {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import AddDocument from "./pages/AddDocument";
import SearhDocument from "./pages/SearchDocument";
import ProfileCreator from "./pages/ProfileCreator";

function RouteApp () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/add" element={<AddDocument/>} />
                <Route path="/search" element={<SearhDocument/>} />
                <Route path="/createProfile" element={<ProfileCreator/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouteApp;