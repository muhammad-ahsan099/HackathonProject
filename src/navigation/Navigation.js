
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Header from '../components/header/Header';
import BlogImage from '../components/blogImage/BlogImage';
import LandingPage from '../pages/LandingPage';

import Footer from '../components/footer/Footer';
import SectionImg from '../components/sectionImg/SectionImg'
import Post from '../modules/post/Post';

// import Detail_Card from '../components/hotelCart/HotelCard'
import Detail_Card from '../components/detailCard/DetailCard';
import SignIn from '../modules/auth/signin/SignIn';
import SignUp from '../modules/auth/signup/SignUp';

import { useSelector } from 'react-redux';
import UserPage from '../pages/UserPage';


export default function Navigation() {

    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)

    console.log("Initial AuthState: ", authState);

    return (

        <Router>

            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>

                <Route path="/users">
                    <UserPage />
                </Route>
                <Route path="/orders">
                    <Header />
                    <BlogImage />
                    < Detail_Card />
                    <SectionImg />
                    <Footer />
                </Route>


                <PublicRoute path="/signin" auth={authState} >
                    <SignIn />

                </PublicRoute>

                <PublicRoute path="/signup" auth={authState} >

                    <SignUp />


                </PublicRoute>
                <PrivateRoute path="/post" auth={authState}  >
                    <Post />
                    <SectionImg />
                    <Footer />
                </PrivateRoute>
            </Switch>




        </Router>

    )
}


