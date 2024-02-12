import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>


            <header>
                <div className="header-top-area s-header-top-area d-none d-lg-block">
                    <div className="container-fluid s-container-full-padding">
                        <div className="row align-items-center">
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="header-top-offer">
                                    <p>Get Trusted Online ID Here</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="header-top-right">
                                    <div className="header-social">
                                        <ul>
                                            <ul className="sm-megamenu-hover sm_megamenu_menu sm_megamenu_menu_black">
                                                {/*                        <li><a href="index.php">Home</a></li>*/}
                                                <li onClick={() => navigate("/")}><a href=''>Home</a>
                                                    {/*<ul>
                     <li><a href="#">Food & Experience</a></li>
                     <li><a href="#">Brand Legacy</a></li>
                     <li><a href="#">Our Team</a></li>
                 </ul>*/}
                                                </li>
                                                <li onClick={() => navigate("/contact")}><a href=''>Contact Us</a></li>
                                                <li onClick={() => navigate("/privacy")} ><a href="">Privacy Policy</a></li>
                                            </ul>
                                        </ul>
                                    </div>
                                    <div className="header-top-action">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
