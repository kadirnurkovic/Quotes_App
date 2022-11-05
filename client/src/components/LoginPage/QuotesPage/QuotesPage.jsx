import { useState, useEffect } from 'react';
import axios from 'axios';
import useContext from 'react';
import { QuotesContext } from '../../../Context/Context';
import './QuotesPage.css'

export default function QuotesList() {
    const [quotes, setQuotes] = useState([]);
    const access_token = "yuim98oq-e275-45a2-bc2e-b3098036d655"
    const getQuotesApi = async () => {
        axios.get("http://localhost:8000/quotes" , {
            headers: {
                Authorization : 'Bearer ' + access_token
            }
        })
        .then((res) => {
            setQuotes(res.data.quotes)
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getQuotesApi()
    }, [])
    
    return(
        <div>
           {quotes.map((el) => (
            <div key={el.id} className="content-class">
                <div className="quote-class">{el.content}</div>
                {/* <div>{el.tags.map((tag) => (<div>{tag}</div>))}</div> */}
                <div className="decorative-class">{el.author}</div>
            </div>
           ))}
        </div>
    )
}