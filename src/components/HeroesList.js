import React from 'react';
import { Collection, CollectionItem, Button } from 'react-materialize';
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
        <Collection>
          {list.map(hero => {
            return <CollectionItem key={hero.id}>
              <div className="heroitem">
                <div className="heroIcon">
                  <img alt={hero.name} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
                  <span>{hero.name}</span>
                </div>
                <div className="buttons">
                  {hero.urls.map(u => {
                    return <Button key={`${hero.name}-${u.type}`} href={u.url} node="a" waves="light" target="_blank">{u.type}</Button>
                  })
                  }
                </div>
              </div>
            </CollectionItem>
          })}
        </Collection>
      </>
    )
}

export default HeroesList;