import React, {useState} from 'react';
import api from '../../services/api';
import CardList from '../../components/card-list';
import {Link} from 'react-router-dom';
import '../../styles/home.css';
import Spinner from 'react-spinner-material';

function Home(){
  
  const minLength = 3;
  const [searched, setSearched] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadedList, setLoadedList] = useState([]);
  let NsfwString = '&genre=12&genre_exclude=0';
  let isNsfw = false;

  function handleChange(e) {
    isNsfw = e.target.checked;
    console.log(isNsfw);
    // do whatever you want with isChecked value
  }

  function handleSearchChange(event){
    const {value} = event.target;
    setSearched(value.trimLeft());
  }

  async function handleSubmit(event){
    event.preventDefault();
    setIsLoading(true);

    if(!isNsfw){
      NsfwString = '&genre=9,12,33,34,35&genre_exclude=0&order_by=members';
    }else{
      NsfwString = '&genre=12';
    }
    
    const res = await api.get(`/search/anime?q=${searched}&limit=16&sort=desc${NsfwString}`);
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

      <form className="row form-inline align-items-center justify-content-center mb-3" 
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

            <div className="form-check ml-2">
              <input className="form-check-input" name="nsfwCheck" 
              type="checkbox" id="nsfwCheck" onChange={handleChange}/>
              <label className="text-danger form-check-label">
                NSFW!
              </label>
            </div>

          </div>
          <small id="ruleOfThreeCharacters" className={`${searched < minLength ? 'info form-text text-muted text-danger' : 'd-none'}`}>
              You must type a value with more than <br></br>three characters
          </small>
        </div>
      </form>
      
      <div className={` justify-content-center m-5 ${isLoading ? 'd-flex' : 'd-none'}`}>
        <Spinner radius={60} color={"#E57984"} stroke={5} 
          />  
      </div>
      
      <section>
        <CardList list={loadedList} isInline={false} size={16}/>
      </section>  
    </section>
  );
}

export default Home;