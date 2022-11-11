import { useState, useEffect } from "react";
import axios from "axios";
import {useContext} from "react";
import { QuotesContext } from "../../../Context/Context";
import "./QuotesPage.css";
import QuoteVotes from "./QuoteVotes";
import Pagination from "@mui/material/Pagination"
import Quote from "../CreateQuotePage/Quote";

export default function QuotesList() {
  const {token} = useContext(QuotesContext);
  const AT = token;
  const [quotes, setQuotes] = useState([]);
  const numPages = Math.ceil(quotes.length / 5);
  const [page, setPage] = useState(1);
  const access_token = "yuim98oq-e275-45a2-bc2e-b3098036d655";
  const humor = "universe"
  const [tagOrder, setTagOrder] = useState("humor");
  const tagger = (ele) => {
    setTagOrder(ele.target.value)
  }
  const handleChange = (event, value) => {
    setPage(value);
    console.log(event, value);
  }
  const quotesPerPage = 5;
  const numberOfPagesVisited = (page - 1) * quotesPerPage;
  const getQuotesApi = async () => {
    axios
      .get(`http://localhost:8000/quotes?tags=${tagOrder}`, {
        headers: {
          Authorization: "Bearer " + AT,
        },
      })
      .then((res) => {
        setQuotes(res.data.quotes);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getQuotesApi();
  }, []);
  return (
    <div>
      <select defaultValue="humor" onChange={tagger}
        >
        <option value="humor" label="humor">Humor</option>
        <option value="human nature" label="human nature">Human nature</option>
        <option value="science" label="science">Science</option>
        <option value="Philosophy" label="philosophy">Philosophy</option>
        <option value="universe" label="universe">Universe</option>
      </select>
      {quotes.map((el) => (
        <div key={el.id} className="content-class">
          <div className="vote-class">
            <div>
              <QuoteVotes
                el={el}
              ></QuoteVotes>
            </div>

            <div className="quote-class">{el.content}</div>
          </div>
          <div className="decorative-class">{el.author}</div>
          <div>{el.tags.map((tag) => (<div>{tag}</div>))}</div>
        </div>
      )).slice(numberOfPagesVisited, numberOfPagesVisited + quotesPerPage)}
      <div className='div-pagination'>
            <Pagination className="pagination-class" count={numPages} page={page} onChange={handleChange} />
        </div>
    </div>
  );
}
