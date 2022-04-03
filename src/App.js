import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link,
    useParams,
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

                    <Route path='/shop/:id' element={<ShopDetail />} />

                    <Route path='/' element={<Home />} />
                </Switch>
            </div>
        </Router>
    );
}

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://fortnite-api.theapinetwork.com/store/get'
        );
        const items = await data.json();
        console.log(items.data[0]);
        setItems(items.data);
    };

    return (
        <div>
            {items.map((item) => (
                <ul>
                    <li key={item.itemId}>
                        <Link to={`/shop/${item.itemId}`}>
                            {item.item.name}
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    );
}

function ShopDetail() {
    const { id } = useParams();

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({
      images: {}
    });

    const fetchItem = async () => {
        const data = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${id}`
        );
        const item = await data.json();
        setItem(item.data);
        console.log(item.data);
    };

    return (
        <div>
            <h1>Shop Details</h1>
            <h2>Name: {item.item.images.information ? item.item.images.information : 'nulll' }</h2>
             {/*<p>desc: {item.item.description}</p>
            <img src={item.item.images.information} alt='items'/> */}
        </div>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}
