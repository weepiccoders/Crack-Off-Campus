import React from 'react';
import './App.css';
import LoadingComponent from './Component/Loading/LoadingComponent';
import LoginSignupComponent from './Component/LoginSignup/LoginSignupComponent';
import JobsComponent from './Component/CrackOffCampus-Jobs/JobsComponent';
import MainComponent from './Component/MainComponent';

//redux
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setUserDetatil, setInformation_announcementDetails, setJobsData, fetchData } from "../src/redux/actions/actions";
import store from './redux/store/store';
//

function App() {
    const isDataFetched = useSelector(state => state.isDataFetched);
    const isLoggedin = useSelector(state => state.isLoggedin)

    return (
        <div className="App" > {
            (isDataFetched==false) ? (
                <LoadingComponent />
            ) :
                (
                    //Data Fetched Sussessfully
                    // checking for Login
                    (!isLoggedin) ?
                        (
                            // Need To Login
                            <LoginSignupComponent />
                        ) :
                        (
                            // LoggedIn successfully or Already LoggedIn
                            // After Login : CrackoffCampus Is the Main Component
                            <MainComponent/>
                        )
                )
        }
        </div>
    )

}

export default App;