
import React from 'react';

import BlogImage from '../components/blogImage/BlogImage';
import BlogSection from '../components/blogSection/BlogSection';

import Cities from '../components/cities/City';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import SectionImage from '../components/sectionImg/SectionImg'


function LandingPage(props) {
    return (
        <div>
            <Header />
            < BlogImage />
            <BlogSection />
            <Cities />
            <SectionImage/>
            <Footer />

            
        </div>
    );
}

export default LandingPage;