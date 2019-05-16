import React from 'react';

import "../css/header.css";

export default class Header extends React.Component {
    render() {
        return (
            <header id="header" className="header">  
                <div className="container">            
                    <h1 className="logo float-left">
                        <a className="scrollto" href="#promo">
                            <span className="logo-title">TOUCHMYLIKE</span>
                        </a>
                    </h1>          
                    <nav id="main-nav" className="main-nav navbar-expand-md float-right" role="navigation">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                               
                        <div className="navbar-collapse collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="nav-item sr-only"><a className="nav-link scrollto active" href="#promo">หน้าหลัก</a></li>
                                <li className="nav-item"><a className="nav-link scrollto" href="#about">เกี่ยวกับ</a></li>
                                <li className="nav-item"><a className="nav-link scrollto" href="#features">คอร์ส</a></li>
                                <li className="nav-item"><a className="nav-link scrollto" href="#docs">เอกสาร</a></li>
                                <li className="nav-item"><a className="nav-link scrollto" href="#license">กิจกรรม</a></li>                        
                                <li className="nav-item last"><a className="nav-link scrollto" href="#contact">ติดต่อ</a></li>
                            </ul>
                        </div>
                    </nav>
                    {/* <div className="account">
                        <i class="fas fa-user-circle"></i>
                    </div> */}
                </div>
            </header>
        );
    }
}

