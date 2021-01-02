import React from 'react';
import NotFoundImage from '../../assets/img/not-found.png';
import {useHistory} from 'react-router-dom'; 

function NotFound(){

  const history = useHistory();

  function handleGoBack(){
    history.goBack();
  }

  return (
    <section className="section d-flex justify-content-center 
    flex-column align-items-center mt-5">
      <img src={NotFoundImage} alt="not found"/>
      <button className="mt-3 btn btn-danger btn-sm" onClick={handleGoBack}>Go back</button>
    </section>
  );
}

export default NotFound;