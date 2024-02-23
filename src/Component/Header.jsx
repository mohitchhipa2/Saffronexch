import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";


const Header = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)


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

                                                </li>
                                                <li onClick={() => navigate("/contact")}><a href='https://wa.me/917300042095'>Contact Us</a></li>
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


            <div style={{ background: '#131014' }} className='hello-boy'>
                <div className='main-div'>
                    <div>Get Trusted Online ID Here</div>
                    <div className="header-social">
                        <ul className="sm-megamenu-hover sm_megamenu_menu sm_megamenu_menu_black">  <li onClick={() => navigate("/")}><a href=''>Home</a>

                        </li>
                            <li onClick={() => navigate("/contact")}><a href=''>Contact Us</a></li>
                            <li onClick={() => navigate("/privacy")} ><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header
