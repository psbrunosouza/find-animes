import React, {useState} from 'react';
import api from '../../services/api';
import CardList from '../../components/card-list';
import {Link} from 'react-router-dom';
import '../../styles/home.css';

function Home(){
  
  const minLength = 3;
  const [searched, setSearched] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadedList, setLoadedList] = useState([]);

  function handleSearchChange(event){
    const {value} = event.target;
    setSearched(value.trimLeft());
  }

  async function handleSubmit(event){
    event.preventDefault();
    setIsLoading(true);

    const res = await api.get(`/search/anime?q=${searched}&limit=16`);

    setLoadedList(res.data.results);

    setIsLoading(false);
  }

  return (
    <section>
      <div className="home col-sm-12 d-flex justify-content-center 
        align-items-center flex-column">
        <Link 
          to="/" 
          className="text-center text-dark title">
          Find your new anime</Link>
        <p className="text-center text-dark subtitle">A powerful website to find 
        a new anime to watch</p>
      </div>

      <form className="row form-inline justify-content-center mb-3" 
            onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="col-sm-12 form-group justify-content-center align-items-center">
            <input
              className="search-bar form-control col"
              name="search"
              type="search"
              placeholder="type anime name..."
              onChange={handleSearchChange}
              value={searched}
              minLength={minLength}/>
            
            <button
              type="submit"
              className={` search-btn btn btn-danger col`}
              disabled={searched.length < minLength}
              role="status"
              aria-describedby="ruleOfThreeCharacters"
              >
              Search
            </button>
          </div>
          <small id="ruleOfThreeCharacters" class={`${searched < minLength ? 'info form-text text-muted text-danger' : 'd-none'}`}>
              You must type a value with more than <br></br>three characters
          </small>
        </div>
      </form>

      <section className="col-sm-12 col-md-12">
        <CardList list={loadedList} isInline={false}/>
      </section>
    </section>
  );
}

export default Home;