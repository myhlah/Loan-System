import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './landing.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './footer';

const Landing = () => {

    const settings = {
        dots: true, // Show dots for slide navigation
        infinite: true, // Infinite loop sliding
        speed: 500, // Slide transition speed
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enable auto slide
        autoplaySpeed: 2000, // Time in milliseconds between auto slides
        arrows: true, // Show navigation arrows
    };

    const slides = [
        { id: 1, image: '1.jpg'},
        { id: 2, image: '2.jpg'},
        { id: 3, image: '3.jpg'},
        { id: 4, image: '4.jpg'},
        { id: 5, image: '5.jpg' },
        { id: 6, image: '6.jpg'},
        { id: 7, image: '7.jpg'},
        { id: 8, image: '8.jpg'},
        { id: 9, image: '9.jpg'},
        { id: 10, image: '10.jpg'},
    ];
    

    return (
        <div className="landing-page">
             <header>
                <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logo"/>
                <h2 className="landingh2">MSU-IIT National Multi-Purpose Cooperative</h2>
                
                <a href="/login" className="nave">Login</a>
                <a href="/register" className="nave1" >Register</a> 
            </header>
            <div className="contentlan">
               <div className="main-banner">
                <div className="text-content">
                    <h1>Quick and Easy Loans for Your Financial Needs.</h1>
                    <p>Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.</p>
                    <button className="apply-btn">Apply Now!</button>
                    
                </div>
                <img src="bldg.png" alt="Building" className="banner-img"/>
            </div>
                <div className="services-section">
                        <h2 className="services">About Us</h2>
                            <p className="aboutp">The MSU-IIT National Multi-Purpose Cooperative is a financial institution based in Iligan City, Lanao del Norte, Philippines.
                            It was established to serve the needs of the faculty, staff, and students of Mindanao State University-Iligan Institute of Technology (MSU-IIT). 
                            However, it has since expanded its membership to include individuals and groups outside of the university.
                            The MSU-IIT National Multi-Purpose Cooperative is a member of the National Confederation of Cooperatives (NATCCO), 
                            a network of cooperatives in the Philippines.This membership allows the cooperative to access various resources and support services. </p>

                    <div className="vmc-section">
                        <div className="vmc-grid">
                            <div className="vmc-card">
                                <img src="vision.jpg" alt="vision" className="vision"/>     
                            </div>
                            <div className="vmc-card">
                             <img src="mission.jpg" alt="mission" className="mission"/>   
                            </div>
                            <div className="vmc-card">  
                                <img src="core-values.jpg" alt="core-values" className="core"/>   
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="slideshow">
                <h2 className="slidep">Photos</h2>
                    <Slider {...settings}>
                        {slides.map((slide) => (
                            <div key={slide.id} className="slide">
                                <img src={slide.image} alt={`Slide ${slide.id}`} className="slide-image" />
                            </div>
                        ))}
                    </Slider>
                </div>

            <div className="services-section">
                <h2 className="services">Our Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <img src="personal.png" alt="Building" className="icon"/>     
                        <h3>Personal Loan</h3>
                        <p>Personal loans provide borrowers with flexibility in how they use the funds...</p>
                        <button>Apply now</button>
                    </div>
                    <div className="service-card">
                        <img src="educ.png" alt="Building" className="icon"/>       
                        <h3>Educational Loan</h3>
                        <p>Educational Loan Services provide financial assistance to students for various purposes...</p>
                        <button>Apply now</button>
                    </div>
                    <div className="service-card">
                        <img src="pension.png" alt="Building" className="icon"/>   
                        <h3>Pensioner Loan</h3>
                        <p>Pensioner Loan Services provide financing options for older adults...</p>
                        <button>Apply now</button>
                    </div>
                    <div className="service-card">
                        <img src="quiz.png" alt="Building" className="icon"/>   
                        <h3>Pre-Approval Quiz</h3>
                        <p>Pre-Approval Quiz helps applicants decide on loan eligibility and how to proceed...</p>
                        <button>Take a quiz</button>
                    </div>
                    <div className="service-card">
                        <img src="calculator.png" alt="Building" className="icon"/>   
                        <h3>Loan Calculator</h3>
                        <p>The Loan Calculator helps estimate monthly payments...</p>
                        <button>Calculate now</button>
                    </div>
                </div>
                </div>   
            </div>
            <Footer/>
        </div>
    );
};

export default Landing;
