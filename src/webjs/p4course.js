import React from 'react';

import "../css/course.css";

export default class Header extends React.Component {
    render() {
        return (
            <section id="course" class="course section">
                <div class="container text-center">
                    <h2 class="title">คอร์สเรียน</h2>
                    <i class="fa fa-search mx-2" />
                    <input type="text" placeholder="Search.."/>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <i class="fa fa-heart"> tags ต่างๆ ที่ควรรู้ก่อนเขียนเว็บ 
                            <a href="http://www.naronk.net/?pa=tagh"> รายละเอียด</a>
                            </i>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <i class="fa fa-heart"> bootstrap ที่ควรรู้ก่อนเขียนเว็บ 
                            <a href="https://www.w3schools.com/bootstrap/"> รายละเอียด</a>
                            </i>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <i class="fa fa-heart"> การเขียน css และการใช้งาน 
                            <a href="https://www.designil.com/professional-css-tutorial.html"> รายละเอียด</a>
                            </i>
                        </div>
                    </div>
                    <ul class="course-list list-unstyled">
                        <li><i class="fab fa-react"></i> React.js</li>
                    </ul>
                </div>
            </section>
        );
    }
}

