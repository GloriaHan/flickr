import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "../SearchPage";
import SearchResults from "../SearchResults";
import PhotoPage from "../PhotoPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />}>
          <Route index element={<p>enter a search to begin.</p>} />
          <Route path="search/:queryText" element={<SearchResults />} />
          <Route path="photo/:queryText" element={<PhotoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
