import { useState } from "react";
import {ArrowUpIcon, ArrowDownIcon} from "@chakra-ui/icons"
import "./QuoteVotes.css"

export default function QuotesScore({ getQuotes, upVote, downVote }) {
  const numberOfVotes = 100;
  const groupedVotes = upVote + downVote;
  const n = numberOfVotes / groupedVotes
  console.log(n)
  const procentage = Math.round(n * upVote)
  const [votes, setVotes] = useState(procentage);
  return (
    <div className="votes-count">
      <div>
        <button className="button-class"><ArrowUpIcon/></button>
        <div>{votes}%</div>
        <div>
          {upVote}/{downVote}
        </div>
      </div>
      <div>
        <button className="button-class"><ArrowDownIcon/></button>
      </div>
    </div>
  );
}
