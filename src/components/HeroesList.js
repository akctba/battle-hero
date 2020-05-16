import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import { useSelector } from "react-redux";

const HeroesList = () => {
  const content = useSelector(state => state);


    return (
        <Collection>
          <CollectionItem>
            1- Alvin
          </CollectionItem>
          <CollectionItem>
            2- Alvin
          </CollectionItem>
          <CollectionItem>
            3- Alvin
          </CollectionItem>
          <CollectionItem>
            4- Alvin
          </CollectionItem>
        </Collection>
    )
}

export default HeroesList;