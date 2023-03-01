import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

    useEffect(() => {
        Axios()
    })

    const [api, setData] = useState([])

    const Axios = async () => {
        try {
            let { data } = await axios.get("https://jsonplaceholder.typicode.com/comments")
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {
                api.map((item) => (
                    <h4 key={item.email}>{item.email}</h4>
                ))
            }
        </>
    );
}

export default App;
