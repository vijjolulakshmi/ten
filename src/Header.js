import React from 'react';
import LogoImg from "./images/Logo.png";
import facebookImg from "./images/facebook.jpeg";
import twitterImg from "./images/twitter.png";

function Header() {
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-2'>
                <img src={LogoImg} width="100px"/>
            </div>
            <div className='col-8'>
                <div className='menu'>
                <div className='btn-group'>
                    <a href="" className='btn btn-primary'>Home</a>
                    <a href="" className='btn btn-primary'>about us</a>
                    <a href="" className='btn btn-primary'>services</a>
                    <a href="" className='btn btn-primary'>career</a>
                    <a href="" className='btn btn-primary'>contact</a>
                </div>
                </div>
            </div>
            <div className='col-2'>
                <div className='socialmedia'>
                    <img src={facebookImg} width="40px"/>
                    <img src={twitterImg} width="50px"/>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Header