import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div>

            <footer>
                <div className="footer-top footer-bg s-footer-bg">
                    <div className="container">
                        <ul className="sm-megamenu-hover sm_megamenu_menu sm_megamenu_menu_black sdfgfd">
                            <li onClick={() => navigate("/terms")}><a href=''>Terms and conditions</a></li>
                            <li onClick={() => navigate("/game-addiction")}><a href="">Game Addiction</a></li>
                            <li onClick={() => navigate("/privacy")}><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", fontSize: "11px", color: "gray" }}>Please leave this site if you are from Telangana, Orissa, Assam, Sikkim, and Nagaland.</div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
