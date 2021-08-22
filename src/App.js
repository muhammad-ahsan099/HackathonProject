
import React , {useEffect} from 'react'
import './App.css';
import Header from './components/header/Header';
import BlogImage from './components/blogImage/BlogImage';
import BlogSection from './components/blogSection/BlogSection';
import Cities from './components/cities/City';
import Footer from './components/footer/Footer';
import Hotel_Card from './components/hotelCart/HotelCard';
import Detail_Card from './components/detailCard/DetailCard'
import SectionImage from './components/sectionImg/SectionImg'
import SignIn from './modules/auth/signin/SignIn';
import SignUp from './modules/auth/signup/SignUp';
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import Post from './modules/post/Post';
import Navigation from './navigation/Navigation';

import firebase from 'firebase';
import { useDispatch } from "react-redux";
import { doCheckUser } from "./redux/actions/AuthAction";

function App() {

  const dispatch = useDispatch();

  async function Check() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User        var user = user;
        dispatch(doCheckUser(user));
      }
    });
  }

  useEffect(() => {
    Check();
  }, []);


  return (
    <div>
      <p style={{ color: 'white' }}>.</p>
      {/* < LandingPage/> */}
      {/* <UserPage/> */}
      {/* <Post /> */}

      {/* <BlogImage/>
      < Cities />
      <BlogSection /> */}


      {/* <Hotel_Card/> */}
      {/* <Detail_Card />*/}
      {/* < SignIn /> */}
      {/* <SignUp /> */}

      {/* < SectionImage /> 
      <Footer  />  */}

      <Navigation />
    </div>
  );
}

export default App;
