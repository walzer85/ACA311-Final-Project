import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tuner from "./componnets/Tuner";
import NewUser from "./components/NewUser";
import UserRequest from "./components/UserRequest";

class App extends Comment {
    render(){
        return(
            <div>
                <Header  />
                <Tuner />
                <NewUser />
                <UserRequest />
                <Footer />
            </div>
        )
    }
}

export default App;