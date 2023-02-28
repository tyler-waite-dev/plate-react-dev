import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Nav(){

    const navigate = useNavigate();

    const [dropdownActive, setDropdownActive] = useState('none');

    let dropdown = document.getElementById("nav-dropdown");

    function navDropdown(){
        if(!dropdownActive){
            setDropdownActive('none');
        }else{
            setDropdownActive('');
        }
    }

    function logout(){
        navDropdown();
        alert('log out!');
    }

    return (<div>
        <nav>
            <img onClick={()=>navigate("/feed")}id="logo" src='/assets/logo.png'></img>
            <div id="nav-search">
                <input placeholder='Search Here..' type="text"></input>
                <button className="search-button" onClick={() => navigate("/search")}>
                    <img src="/assets/icons8-search.svg" alt="Search Icon" />
                </button>
            </div>
            <br/>
            <Link className="nav-link" to="/feed">feed</Link>
            <Link className="nav-link" to="/explore">explore</Link>
            <Link className="nav-link" to="/saved">saved</Link>
            <button className="nav-link" onClick={navDropdown} >you
                <svg id="icon_double_caret" data-name="icon/double caret" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                <rect id="base" width="15" height="15" fill="none"/>
                <path id="select" d="M3886.877,524.493l4.389,4.371,4.223-4.371" transform="translate(-3883.877 -519.493)" fill="none" stroke="#100b09" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                </svg>
            </button>
        </nav>
        <div id="nav-dropdown" style={{display: dropdownActive}}>
            <ul>
                <li><Link to="/profile/user-view" onClick={navDropdown}>Profile</Link></li>
                <li><a onClick={logout}>Log Out</a></li>
            </ul>
        </div>
    </div>);

}

export default Nav