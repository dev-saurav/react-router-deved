import React, { useEffect, useState } from 'react';

function ItemDetails({ match }) {

    const [item, setItems] = useState({})

    useEffect(() => {
        fetchItem()
        console.log(match)
    }, [])

    const fetchItem = async () => {
        console.log(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
        const fetchItemData = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
        const item = await fetchItemData.json()
        setItems(item)
    }

    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    );
}



export default ItemDetails;
