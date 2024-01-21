import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { FiAlignJustify } from 'react-icons/fi';
import "../../Styles/Home/Nav.css";


const NavBar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <div className="Nav">
            <AiOutlineUser />
            <FiAlignJustify onClick={toggleNav} />
            {isNavVisible && (
                <ul className="nav-menu">
                    <Link to="/home"><li>홈</li></Link>
                    <Link to="/routine"><li>루틴</li></Link>
                    <Link to="/consultation"><li>장소 추천</li></Link>
                    <Link to="/knock"><li>고민 노크</li></Link>
                </ul>
            )}
        </div>
    );
};

export default NavBar;
