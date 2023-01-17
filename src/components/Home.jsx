import React, { useState } from "react";
import data from './data.json';

function Home() {
  const [articles] = useState(data.articles);
  const [selectedArtNr, setSelectedArtNr] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [fits, setFits] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  //Creating two boxes
  const XS_BOX = { name: 'XS', width: 120, length: 180, depth: 80, maxWeight: 5000 };
  const XXL_BOX = { name: 'XXL', width: 600, length: 600, depth: 600, maxWeight: 20000 };

  //When pressing the submit-button, function filters the articles array based on the selected article number
  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredArticles = articles.filter(article => article.artNr === parseInt(selectedArtNr));

    if (filteredArticles.length > 0) {
      setSelectedArticle(filteredArticles[0]);

      // Compares the selected articles properties with the XS_BOX and XXL_BOX properties
      if (filteredArticles[0].width < XS_BOX.width &&
        filteredArticles[0].length < XS_BOX.length &&
        filteredArticles[0].depth < XS_BOX.depth &&
        filteredArticles[0].weight < XS_BOX.maxWeight) {
        setFits(`${XS_BOX.name} box. YAAY, it fits in this one!`);

      } else if (filteredArticles[0].width < XXL_BOX.width &&
        filteredArticles[0].length < XXL_BOX.length &&
        filteredArticles[0].depth < XXL_BOX.depth &&
        filteredArticles[0].weight < XXL_BOX.maxWeight) {
        setFits(`${XXL_BOX.name} box. WOHOO, it's large but still manage to fit in this box. That's huge!`);

      } else {
        setFits('Neither... :( ');
      }
      setShowInfo(true);

    } else {
      setSelectedArticle(null);
    }
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="container mx-auto flex items-center justify-center h-screen">
        <div className="w-2/3 h-64">
          <div className="bg-white p-4 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Select article number</label>
                <select
                  className="block w-full border-2 p-2 rounded-lg bg-gray-200 border-indigo-500"
                  onChange={event => setSelectedArtNr(event.target.value)}
                  onClick={() => setShowInfo(false)}
                  value={selectedArtNr}
                >
                  <option value="" disabled>Select</option>
                  {articles.map((article) => (
                    <option key={article.artNr} value={article.artNr}>{article.artNr}</option>
                  ))}
                </select>
              </div>
              <div className="text-center">
                <p>What's the size? And the big question is:</p>
                <br></br>
                <button
                  className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
                  type="submit"
                >
                  Does it fit?!
                </button>
              </div>
            </form>
            {/* When submitting, selectedArticle != null & showing information */}
            {showInfo && selectedArticle && (
              <div className="bg-gray-200 rounded-lg p-4 mt-4">
                <p>{selectedArticle.name}</p>
                <p>Width: {selectedArticle.width}</p>
                <p>Height: {selectedArticle.length}</p>
                <p>Depth: {selectedArticle.depth}</p>
                <p>Weight: {selectedArticle.weight}</p>
                <br></br>
                <p>Fits in: *drumroll* ------ {fits}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
