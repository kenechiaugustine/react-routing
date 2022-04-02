import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link,
} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/shop'>Shop</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path='/about' element={<About />} />

                    <Route path='/shop' element={<Shop />} />

                    <Route path='/' element={<Home />} />
                </Switch>
            </div>
        </Router>
    );
}

function Shop() {



    return (
        <div>
            <h1> SHOP PAGE </h1>
        </div>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}
