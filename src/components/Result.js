import React from 'react';
import { Collection, CollectionItem, Badge } from 'react-materialize';
import { useSelector } from "react-redux";
import './result.css';

const Result = () => {

  const counting = useSelector(state => state.battleReducer);

    return (
        <>
        <h3>Pool</h3>
        {(!counting || counting.length === 0)? <div>No votes yet, choose your first</div> :
        <Collection>
          {counting.map((hero, pos) => {
            return <CollectionItem key={hero.id}>
              <div className="resultdiv">
                <span>{pos+1} - {hero.name}</span>
                <Badge className="red" caption="votes" >{hero.votes}</Badge>
              </div>
            </CollectionItem>
          })}
        </Collection>}
        </>
    )
}

export default Result;