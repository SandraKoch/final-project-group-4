import React, { useState } from 'react';
import Search from 'components/Search/Search';
import styles from './SearchPage.module.css';
const mongoose = require('mongoose');

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showImage, setShowImage] = useState(true);
  const [searchBy, setSearchBy] = useState('title'); // Domyślnie wyszukujemy po tytule

//   useEffect(() => {
//     // Po zmianie searchBy lub innym warunku wywołaj funkcję wyszukiwania
//     searchInMongoDB();
//   }, [searchBy]);

const searchInMongoDB = async (query) => {
    try {
      // Połącz się z bazą danych MongoDB
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      // Zdefiniuj model dokumentu (np. przepisów)
      const Recipe = mongoose.model('Recipe', {
        title: String,
        ingredients: [String],
      });
  
      // Inicjuj RegExp na podstawie wartości query
      const titleRegex = new RegExp(query, 'i'); // Wyszukaj po tytule (ignorując wielkość liter)
      const ingredientsRegex = new RegExp(query, 'i'); // Wyszukaj po składnikach (ignorując wielkość liter)
  
      // Ustaw warunek zapytania w zależności od searchBy
      let condition = {};
      if (searchBy === 'title') {
        condition = { title: titleRegex };
      } else if (searchBy === 'ingredients') {
        condition = { ingredients: ingredientsRegex };
      }
  
      // Wykonaj zapytanie do bazy danych
      const results = await Recipe.find(condition);
  
      // Aktualizuj wyniki wyszukiwania
      setSearchResults(results);
  
      // Ustaw showImage na false tylko jeśli wprowadzono wartość w pole wyszukiwania.
      setShowImage(query !== '');
    } catch (error) {
      console.error('Błąd podczas wyszukiwania w bazie danych:', error);
    }
  };
  

  const handleSearch = (query) => {
    // Zaktualizuj wyniki wyszukiwania na podstawie query
    searchInMongoDB(query);
  };

  const handleSearchByChange = (selectedSearchBy) => {
    setSearchBy(selectedSearchBy);
  };

  return (
    <section className={styles['search-wrapper']}>
      
      <div className={styles['search-page-container']}>
      <h2 className={styles['search-title']}>Search</h2>
        <Search onSearch={handleSearch} />
        <div className={styles['search-by-select']}>
          Search by:
          <select
            className={styles['search-select-field']}
            value={searchBy}
            onChange={(e) => handleSearchByChange(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="ingredients">Ingredients</option>
          </select>
        </div>
        <div>
          {showImage ? (
            <picture  className={styles['search-image']}>
              <source
                srcSet="../../images/backgrounds/search-mobile.png 1x, ../../images/backgrounds/search-mobile@2x.png 2x"
                media="(max-width: 767px)"
              />
              <source
                srcSet="../../images/backgrounds/search-tablet.png 1x, ../../images/backgrounds/search-tablet@2x.png 2x"
                media="(max-width: 1199px)"
              />
              <source
                srcSet="../../images/backgrounds/search-desktop.png 1x, ../../images/backgrounds/search-desktop@2x.png 2x"
                media="(max-width: 1600px)"
              />
              <img
                src="../../images/backgrounds/search-mobile.png"
                alt="vegetables"
                width="208"
                height="133"
              />
            </picture>
          ) : null}
          <p className={styles['search-image-text']}>
            Try looking for something else...
          </p>
        </div>
      </div>
      <div className={styles['search-results']}>
        {searchResults.map((result) => (
          <div key={result._id}>{result.title}</div>
        ))}
      </div>
    </section>
  );
};

export default SearchPage;
