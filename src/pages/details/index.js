import React, {useState, useEffect} from 'react';
import {useParams, useHistory, Link} from 'react-router-dom';
import api from '../../services/api';
import Player from 'react-player/lazy';
import CardList from '../../components/card-list';
import Swal from 'sweetalert2';
import '../../styles/details.css';


function Details(){
  
  const {id} = useParams();
  const [anime, setAnime] = useState([]);
  const [genres, setGenres] = useState([]);
  const [recommendations, setRecommedations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  
  useEffect(() => {
    
      async function loadData(){
        try{
        const resAnime = await api.get(`/anime/${id}`);
        setAnime(resAnime.data);
        setGenres(resAnime.data.genres);
  
        const resRecommendations = await api.get(`/anime/${id}/recommendations`);
        setRecommedations(resRecommendations.data.recommendations)
  
        return () => setIsLoading(true);
        }catch(err){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: "Couldn't fetch data from server...",
            footer: err.message,
          });
          history.push('/');
        }
      }
    loadData();
  }, [history, id])

  return (
    <section className="section">
      <header className="row justify-content-center">
        <div className="col-md-3 col-sm-5">
          <img src={anime.image_url} alt={anime.title}/>
        </div>
        <div className="col">
          <h1 className="anime-title">{anime.title}</h1>
          <h2 className="anime-other-titles">{`English name: ${anime.title_english} | 
          Japapenese name: ${anime.title_japanese}`}</h2>
          <p>
            <i className="anime-episodes">
              Total episodes: {anime.episodes}
            </i> | 
            Status: {anime.status}
          </p>
          
          <ul>
            {
              genres.map((genre) => (
                <li className="mr-2 badge badge-danger" key={genre.mal_id}> {genre.name} </li>
              )) 
            }
          </ul>
            
          <section>
            <p>
              {anime.synopsis}
            </p>
          </section>

          <section className="d-flex justify-content-center mb-5">
            <Player url={anime.trailer_url} controls/>
          </section>
        </div>
      </header> 

      
      
      <section>

        <ul>
          <CardList list={recommendations} isInline={true}/>
        </ul>
      </section>

    </section>
  );
}

export default Details;