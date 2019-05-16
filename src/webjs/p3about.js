import React from 'react';

import "../css/about.css";

export default class Header extends React.Component {
    render() {
        return (
            <section id="about" class="about section">
                <div class="container">
                    <h2 class="title text-center">TouchMyLike คืออะไร</h2>
                    <div class="row">
                        <div class="item col-lg-4 col-md-6 col-12">
                            <div class="icon-holder">
                                <i class="fa fa-heart"></i>
                            </div>
                            <div class="content">
                                <h3 class="sub-title">Designed for developers</h3>
                                <p>Outline a benefit here. Tell users what your plugin/software can do for them. You can change the icon above to any of the 1000+ <a href="http://fortawesome.github.io/Font-Awesome/icons/" >FontAwesome</a> icons available.</p>
                            </div>
                        </div>
                    <div class="item col-lg-4 col-md-6 col-12">
                        <div class="icon-holder">
                            <i class="far fa-clock"></i>
                        </div>
                        <div class="content">
                            <h3 class="sub-title">Time saver</h3>
                            <p>Outline a benefit here. Tell users what your plugin/software can do for them. You can change the icon above to any of the 1000+ <a href="http://fortawesome.github.io/Font-Awesome/icons/" >FontAwesome</a> icons available.</p>
                        </div>
                    </div>
                        <div class="item col-lg-4 col-md-6 col-12">
                            <div class="icon-holder">
                                <i class="fa fa-crosshairs"></i>
                            </div>
                            <div class="content">
                                <h3 class="sub-title">UX-centred</h3>
                                <p>Outline a benefit here. Tell users what your plugin/software can do for them. You can change the icon above to any of the 1000+ <a href="http://fortawesome.github.io/Font-Awesome/icons/" >FontAwesome</a> icons available.</p>
                            </div>
                        </div>      
                        <div class="clearfix visible-md"></div>    
                        <div class="item col-lg-4 col-md-6 col-12">
                            <div class="icon-holder">
                                <i class="fa fa-mobile-alt"></i>
                            </div>
                            <div class="content">
                                <h3 class="sub-title">Mobile-friendly</h3>
                                <p>Outline a benefit here. Tell users what your plugin/software can do for them. You can change the icon above to any of the 1000+ <a href="http://fortawesome.github.io/Font-Awesome/icons/" >FontAwesome</a> icons available.</p>
                            </div>
                        </div>              
                        <div class="item col-lg-4 col-md-6 col-12">
                            <div class="icon-holder">
                                <i class="fa fa-code"></i>
                            </div>
                            <div class="content">
                                <h3 class="sub-title">Easy to customise</h3>
                                <p>Outline a benefit here. Tell users what your plugin/software can do for them. You can change the icon above to any of the 1000+ <a href="http://fortawesome.github.io/Font-Awesome/icons/" >FontAwesome</a> icons available.</p>
                            </div>
                        </div>
                        <div class="item col-lg-4 col-md-6 col-12">
                            <div class="icon-holder">
                                <i class="fa fa-coffee"></i>
                            </div>
                            <div class="content">
                                <h3 class="sub-title">SCSS source files included</h3>
                                <p>Outline a benefit here. Tell users what your plugin/software can do for them. You can change the icon above to any of the 1000+ <a href="http://fortawesome.github.io/Font-Awesome/icons/" >FontAwesome</a> icons available.</p>
                            </div>
                        </div>            
                    </div>            
                </div>
            </section>
        );
    }
}

