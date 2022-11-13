import "./Quotes.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuotesContext } from "../../../Context/Context";
import axios from "axios";

export default function Quote() {
  const navigate = useNavigate();
  const { token } = useContext(QuotesContext);
  const AT = token;
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [inputContent, setInputContent] = useState();
  const [inputAuthor, setInputAuthor] = useState();
  const [inputTag, setInputTag] = useState();
  const addQuote = () => {
    const access_token = "yuim98oq-e275-45a2-bc2e-b3098036d655";
    axios.post(
      `http://localhost:8000/quotes`,
      {
        content: inputContent,
        author: inputAuthor,
        tags: inputTag,
      },
      {
        headers: {
          Authorization: "Bearer " + AT,
        },
      }
    );
  };
  return (
    <div>
      <form
        className="form-class"
        onSubmit={() => (addQuote, navigate("/quotespage"))}
        
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
          rows="20"
          cols="50"
          value={content}
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
      </form>
    </div>
  );
}
