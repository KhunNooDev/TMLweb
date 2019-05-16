import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./css/all.css";

import Header from "./webjs/p1header";
import Start from "./webjs/p2start";
import About from "./webjs/p3about";
import Course from "./webjs/p4course";

class App extends React.Component {
    render() {
        return (
          <div>
            <Header />
            <Start />
            <About />
            <Course />
          </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

