
import React from 'react';
import './BlogImage.css';
// import blog_image from '../../assets/images/blog_imgage.jpg'
// import blogimg from '../../assets/images/imgOLX.PNG'
import blog_img from '../../assets/images/blog_img.jpg';

function BlogImage() {
    return (
        <div>
            <div className='imageSlide' style={{ marginTop:  35 , width: '100%' , height: '350px'}}>
                <img style={{width: '100% '   }}    src={blog_img} alt="img" />

            </div>

        </div>
    )
}

export default BlogImage;

































