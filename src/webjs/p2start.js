import React from 'react';

import "../css/start.css";

export default class Header extends React.Component {
    render() {
        return (
            <section id="start" class="start section offset-header">
                <div class="container text-center">
                    <h2 class="title">TOUCH MY LIKE</h2>
                    <p class="intro">คอร์สเรียนเขียนโปรแกรม และ พัฒนาเว็ปไซต์ตั้งเเต่ 0 ไปจนถึง 100 (ภาษาไทย)</p>
                    <div class="btns">
                        <a class="btn btn-cta-secondary mb-5" href="#docs">Get started</a>
                    </div>
                </div>
                <div class="social-media ">
                    <div class="social-media-inner container text-center">
                        <ul class="list-inline mb-2">
                        <i class="fa fa-heart"></i>   
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

