import "./Quotes.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { QuotesContext } from "../../../Context/Context";
import axios from "axios";

export default function Quote() {
  const navigate = useNavigate();
  const { token } = useContext(QuotesContext);
  const AT = token;
  const [loaded, setLoaded] = useState(false);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [inputContent, setInputContent] = useState();
  const [inputAuthor, setInputAuthor] = useState();
  const [inputTag, setInputTag] = useState();
  const addQuote = () => {
    // const access_token = "yuim98oq-e275-45a2-bc2e-b3098036d655";
    axios.post(
      `http://localhost:8000/quotes`,
      {
        content: inputContent,
        author: inputAuthor,
        tags: inputTag,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    ).then((response) => {
      if(response.data){
        console.log(response.data)
        navigate("/quotespage")
      }
    })
  };
  return (
    <div className="all-inputs">
      <form
        className="new-form-class"
        onSubmit={(e) => (e.preventDefault() ,addQuote())}
              >
        <label>Enter you author</label>
        <input
          className="input-author"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Enter your quote text</label>
        <textarea
          className="input-area"
          type="text"
          placeholder="Quote text..."
          value={content}
          rows="20"
          cols="40"
          onChange={(e) => setContent(e.target.value)}
        />
        <label>Tags</label>
        <input
          className="input-tags"
          type="text"
          placeholder="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        {/* <Link to="/quotespage"> */}
        <button
          type="submit"
          className="submit-button"
          onClick={() => (
            setInputContent(content),
            setInputAuthor(author),
            setInputTag(tags.split(","))
          )}
        >
          Add quote
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
}
