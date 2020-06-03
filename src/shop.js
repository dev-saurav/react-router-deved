import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Shop() {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const items = await data.json()
        console.log(items)
        setItems(items)
    }

    return (
        <div>
            <h1>Shop Page</h1>
            <div>
                {
                    items.map(item => {
                        return (
                            <p key={item.id}>
                                {/* Dynamic routing */}
                                <Link to={`/shop/${item.id}`}>{item.name}</Link>
                            </p>
                        )
                    })
                }
            </div>
        </div>
    );
}



export default Shop;
