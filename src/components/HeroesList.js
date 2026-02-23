import React from 'react';
import { useSelector } from "react-redux";
import './heroList.css'

const HeroesList = () => {
  const content = useSelector(state => state.marvelReducer);

  if(!content.data) {
    return <div>No content to show</div>
  }

  const list = content.data.data.results;

  if(!list) {
    return <div>No list to show</div>
  }

  return (
    <>
      <p>This session is playing with these {list.length} heroes in the list.<br/>
      Check character details on buttons to support this nice API from Marvel. Thanks!</p>
      <ul className="collection">
        {list.map(hero => (
          <li key={hero.id} className="collection-item">
            <div className="heroitem">
              <div className="heroIcon">
                <img alt={hero.name} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
                <span>{hero.name}</span>
              </div>
              <div className="buttons">
                {hero.urls.map(u => (
                  <a key={`${hero.name}-${u.type}`} href={u.url} className="btn waves-effect waves-light" target="_blank" rel="noreferrer">{u.type}</a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default HeroesList;