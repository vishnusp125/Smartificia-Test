import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function SinglePage() {

    const { id } = useParams();
    const { lang } = useParams();

    const [details, setDetails] = useState([]);

    async function getResult() {
        const result = await axios.get(`http://localhost:5000/passages/singlePassage/${id}`)
        setDetails(result?.data);
    }
    const data = { text: details?.passage, language: lang }
    useEffect(() => {
        getResult()
    }, [])

    async function translatePassage() {
        const result = await axios.post("http://dev-oracle.tesoract.com:8000/translations",data)
        console.log(result);
    }
    return (
        <div>
            <h1>Title --- {details.title}</h1>
            <br/>
            <h1>Passage --- {details.passage}</h1>
            <br/>
            <button onClick={() => translatePassage()}>Translate</button>
        </div>
    )
}

export default SinglePage