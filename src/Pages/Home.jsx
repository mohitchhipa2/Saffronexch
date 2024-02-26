import React from 'react'
import "../Template.css"
import '../css/bootstrap.min.css';
import '../css/animate.min.css';
// import '../src/css/magnific-popup.css';
// import '../src/css/all.min.css';
// import 'odometer/themes/odometer-theme-default.css';
import '../css/aos.css';
// import '../src/css/owl.carousel.css';
import '../css/meanmenu.css';
import '../css/slick.css';
import '../css/default.css';
import '../css/style.css';
import '../css/responsive.css';
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <main>
                <Link target="_blank" to="https://wa.me/917300042095" className="enq-side-btn-icone"><i className="fab fa-whatsapp" /> Click Here to Get ID</Link>
                <section className="slider-area slider-bg">
                    <marquee style={{ fontSize: "20px", marginTop: "5px" }} behavior="" direction="right">
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <div>100₹ ke recharge pe 300% bonus Offer </div>
                            <div>100₹ ke recharge pe 300% bonus Offer </div></div>
                    </marquee>
                     
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9">
                                <div className="slider-content text-center">
                                    <div style={{ marginTop: "50px" }} className="logo">
                                        <a target="_blank" href="https://api.whatsapp.com/send?phone=917300042095&text=%20I%20want%20Online%20Cricket%20ID%20with%2010%25%20Extra%20bonus%20Source%3A-%20MMC%2C%20AD"><img src="./images/scorecard-logo.png" alt="Logo" width="200px" /></a>
                                    </div>
                                    <h6 className="wow fadeInDown" data-wow-delay=".2s">Saffron Exch [10 साल का भरोसा] - Get your Trusted Fantasy Sport</h6>
                                    <h2 className="tlt fix" data-in-effect="fadeInLeft">300% bonus on the  <span>recharge of the Rs 100</span></h2>
                                    <p style={{ marginBottom: "10px" }} className="wow fadeInUp" data-wow-delay="2s">India's no. 1 Daily online Fantasy Sport games promoter. Create your Account within 2 minutes! Join Most Trusted, Secure &amp; Fastest Fantasy Sport of India.</p>
                                    <a style={{ marginBottom: "15px" }} target="_blank" href="https://api.whatsapp.com/send?phone=917300042095&text=%20I%20want%20Online%20Cricket%20ID%20with%2010%25%20Extra%20bonus%20Source%3A-%20MMC%2C%20AD" className="btn wow fadeInUp" data-wow-delay="2.2s">Whatsapp Now For Create Id</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="game-single-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div style={{ background: "#FFE4C9" }} className="game-single-content">
                                    <div className="upcoming-game-head">
                                        <div className="uc-game-head-title">
                                            <h4>welcome in The Family of <span style={{ color: "red" }}>Saffron "Khelo Dil and Dimag Se" - Oldest Fantasy Sports provider</span></h4>
                                        </div>
                                        <a target="_blank" href="https://api.whatsapp.com/send?phone=917300042095&text=%20I%20want%20Online%20Cricket%20ID%20with%2010%25%20Extra%20bonus%20Source%3A-%20MMC%2C%20AD">
                                            <div className="uc-game-price">
                                                <h5 style={{ color: 'blue' }}>Get Your ID NOW</h5>
                                            </div>
                                        </a>
                                    </div>
                                    <p>Get in touch with Saffron for any Queries, Emergencies, Feedback, or Complaints. We are here to help you 24*7 with our services on WhatsApp.</p>
                                    <p>Welcome to Saffron Exch, we offer you a genuinely unique fantasy sports experience. Besides, We have a global network and provide the best industry experience with a single click.</p>
                                    <p>Saffron Exch is a responsible fantasy sports promoter. We deal in all kinds of fantasy sports games. We have helped 50000+ players to find the best fantasy sports online.</p>
                                    <p>Our Company Works In A Very Transparent Way. Get Your Demo ID Now</p>
                                    <div className="game-single-title mt-30 mb-30">
                                        <h4 style={{ color: "blue" }}>Why Choose Us</h4>
                                    </div>
                                    <div className="game-single-info mb-20">
                                        <ul>
                                            <li>24*7 Support</li>
                                            <li>Instant Reply</li>
                                            <li>Most Trusted &amp; Secure Platform</li>
                                            <li>10 Lac+ Active Users</li>
                                            <li>250+ Branches</li>
                                            <li>Working Since 2010</li>
                                        </ul>
                                    </div>
                                    <div className="footer-widget mb-0">
                                        <div className="fw-title mb-25">
                                            <h5 style={{ color: 'blue' }}>Follow us</h5>
                                        </div>
                                        <div className="footer-social">
                                            <ul>

                                                <li><a href="https://api.whatsapp.com/send?phone=917300042095&text=%20I%20want%20Online%20Cricket%20ID%20with%2010%25%20Extra%20bonus%20Source%3A-%20MMC%2C%20AD"><FaWhatsapp /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    )
}

export default Home;
