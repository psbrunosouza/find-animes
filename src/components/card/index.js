import React from 'react';
import { useHistory } from 'react-router-dom';

function MyCard({ id, title, image_url }) {
  const history = useHistory();

  function handleNavigateToDetail() {
    history.push(`/details/${id}`);
  }

  return (
  
    <>
      <div className="card bg-light col d-flex justify-content-stretch">
        
        <img src={image_url}
        alt={title} height="320px"/>
        
        <div className="card-body">
          <h5 className="card-title">
            {title}
          </h5> 
          <button className="btn btn-sm btn-danger" 
          onClick={handleNavigateToDetail}>Details</button>
        </div>
      </div>
    </>
  );
}

export default MyCard;
