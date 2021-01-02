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
      <div className="home">
        <Link 
          to="/" 
          className="mx-auto title text-dark">
          Find your new anime</Link>
        <p className="text-dark subtitle">A powerful website to find 
        a new anime to watch</p>
      </div>

      <form className="form-inline justify-content-center mb-3" 
            onSubmit={handleSubmit}>
        <div className="column">
          <div className="form-group row">
            <input
              className="form-control"
              name="search"
              type="search"
              placeholder="type anime name..."
              onChange={handleSearchChange}
              value={searched}
              minLength={minLength}/>
            
            <button
              type="submit"
              className={`btn btn-danger ${isLoading ? 'spinner-border' : ''}`}
              disabled={searched.length < minLength}
              role="status"
              aria-describedby="ruleOfThreeCharacters"
              >
              Search
            </button>
          </div>

          <div className=" form-group row">
            <small id="ruleOfThreeCharacters" class={`${searched < minLength ? 'form-text text-muted text-danger' : 'd-none'}`}>
              You must type a value with more than <br></br>three characters
            </small>
          </div>
        </div>
      </form>

      <section>
        <CardList list={loadedList} isInline={false}/>
      </section>
    </section>
  );
}

export default Home;