
import React from 'react';
import BlogImage from '../components/blogImage/BlogImage';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hotel_Card from '../components/hotelCart/HotelCard';
import SectionImage from '../components/sectionImg/SectionImg';

function UserPage(props) {
    return (
        <div>
            <Header />
            <BlogImage />
            <Hotel_Card/>
            <SectionImage />
            <Footer />
            
        </div>
    );
}

export default UserPage;