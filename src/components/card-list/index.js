import React from 'react';
import MyCard from '../card';
import '../../styles/card-list.css';

function CardList({ list, isInline = false, size = 16}) {
  return (
    <ul className={`${isInline ? 'card-inline d-flex flex-row' : 'row justify-content-center'}`}>
      {list.slice(0, size).map((item) => (
        <li className="card-item mb-3 ml-3" key={item.mal_id}>
          <MyCard
            id={item.mal_id}
            title={item.title}
            image_url={item.image_url}
          />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
