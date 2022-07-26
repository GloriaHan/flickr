import { useParams } from "react-router-dom";
export default function SearchResults() {
    const params = useParams()
  return <p>Search Results here {params.queryText}</p>;
}
