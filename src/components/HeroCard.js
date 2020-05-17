import React from 'react';
import { Card, CardTitle, Icon, Button } from 'react-materialize';

const HeroCard = ({ hero, vote }) => {

    //console.log(hero);

    if(!hero) {
        return <div>Loading...</div>
    }

    return (
        <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} reveal waves="light"/>}
            reveal={<><p>{hero.description}</p>
                <strong>Participations:</strong>
                <ul>
                    <li>Comics: {hero.comics?hero.comics.available:0}</li>
                    <li>Series: {hero.series?hero.series.available:0}</li>
                    <li>Stories: {hero.stories?hero.stories.available:0}</li>
                    <li>Comics: {hero.events?hero.events.available:0}</li>
                </ul>
            </>}
            revealIcon={<Icon>more_vert</Icon>}
            title={hero.name}
            >
            <p>
                <Button key="1" onClick={()=>{vote()}}>Choose</Button>
            </p>
        </Card>
    );
}

export default HeroCard;